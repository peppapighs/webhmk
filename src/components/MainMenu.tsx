'use client'

import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from './ui/button'
import { KEYBOARDS } from '@/constants/keyboards'
import { getKeycodeMetadata } from '@/constants/keycodes'
import { useDevice } from '@/hooks/useDevice'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

const GAUSS64 = KEYBOARDS[0]

const sendSchema = z.object({
  request: z.coerce.number().min(0).max(7),
  value: z.coerce.number().min(0).max(1),
  length: z.coerce.number().min(0),
  data: z.string().refine((data) => {
    if (data === undefined) {
      return true
    }
    if (data.length % 2 !== 0) {
      return false
    }
    for (let i = 0; i < data.length / 2; i++) {
      if (Number.isNaN(parseInt(data.slice(i * 2, i * 2 + 2), 16))) {
        return false
      }
    }
    return true
  }),
})

export default function MainMenu() {
  const { device, connect, disconnect, send, receive } = useDevice()
  const [keymap, setKeymap] = useState<number[][][]>([])

  const form = useForm<z.infer<typeof sendSchema>>({
    resolver: zodResolver(sendSchema),
    defaultValues: {
      request: 0,
      value: 0,
      length: 0,
    },
  })

  const fetchKeymap = useCallback(async () => {
    const buffer = await receive(
      7,
      0,
      2 * GAUSS64.numProfiles * GAUSS64.numLayers * GAUSS64.numKeys,
    )

    const keymap = []
    for (let p = 0; p < GAUSS64.numProfiles; p++) {
      const profile = []
      for (let l = 0; l < GAUSS64.numLayers; l++) {
        const layer = []
        for (let i = 0; i < GAUSS64.numKeys; i++) {
          layer.push(
            buffer.getUint16(
              2 *
                (p * GAUSS64.numLayers * GAUSS64.numKeys +
                  l * GAUSS64.numKeys +
                  i),
              true,
            ),
          )
        }
        profile.push(layer)
      }
      keymap.push(profile)
    }

    setKeymap(keymap)
  }, [receive])

  const onSubmit = useCallback(
    async (values: z.infer<typeof sendSchema>) => {
      if (device.status === 'disconnected') {
        return
      }

      if (values.data.length === 0) {
        const result = await receive(
          values.request,
          values.value,
          values.length,
        )

        const hexData = []
        for (let i = 0; i < result.byteLength; i++) {
          hexData.push(result.getUint8(i).toString(16).padStart(2, '0'))
        }

        console.log(hexData)
      } else {
        const buffer = new Uint8Array(values.data.length / 2)
        for (let i = 0; i < values.data.length / 2; i++) {
          buffer[i] = parseInt(values.data.slice(i * 2, i * 2 + 2), 16)
        }

        await send(values.request, values.value, buffer)
      }

      await fetchKeymap()
    },
    [device.status, send, receive, fetchKeymap],
  )

  useEffect(() => {
    if (device.status === 'connected') {
      fetchKeymap()
    }
  }, [device.status, fetchKeymap])

  return (
    <div className="flex flex-col items-center justify-center">
      {device.status === 'disconnected' ? (
        <Button onClick={() => connect([])}>Connect</Button>
      ) : (
        <>
          <Button onClick={disconnect}>Disconnect</Button>
          {keymap.length > 0 && (
            <div className="mt-6 flex flex-col">
              {GAUSS64.layout.map((row, i) => (
                <div key={i} className="flex items-center">
                  {row.map((key, j) => (
                    <div
                      key={j}
                      className="p-1"
                      style={{
                        width: `${key.w * 5}rem`,
                        height: `${key.h * 5}rem`,
                        marginLeft: `${key.ml * 5}rem`,
                        marginTop: `${key.mt * 5}rem`,
                      }}
                    >
                      <Button
                        variant="secondary"
                        className="h-full w-full break-all text-center"
                      >
                        {getKeycodeMetadata(keymap[0][0][key.i]).name}
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          <div className="mt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="request"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Request</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormDescription>
                        The control request number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="value"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Value</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormDescription>
                        The control request value
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="length"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Length</FormLabel>
                      <FormControl>
                        <Input placeholder="0" {...field} />
                      </FormControl>
                      <FormDescription>
                        The control request length
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="data"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data</FormLabel>
                      <FormControl>
                        <Input placeholder="00" {...field} />
                      </FormControl>
                      <FormDescription>
                        The control request data
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Send</Button>
              </form>
            </Form>
          </div>
        </>
      )}
    </div>
  )
}

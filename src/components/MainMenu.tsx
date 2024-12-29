'use client'

import { useDevice } from '@/hooks/useDevice'
import { Button } from './ui/button'
import { useEffect, useRef, useState } from 'react'

export default function MainMenu() {
  const { device, connect, disconnect, receive } = useDevice()
  const timer = useRef<NodeJS.Timeout>(null)
  const [data, setData] = useState<number[][]>([])

  useEffect(() => {
    timer.current = setInterval(async () => {
      if (device.status === 'connected') {
        try {
          const array = await receive(6, 0, 192)

          const transformed = []
          for (let i = 0; i < 64; i++) {
            transformed.push([
              array.getUint16(i * 2, true),
              array.getUint8(64 * 2 + i),
            ])
          }

          setData(transformed)
        } catch (error) {
          if (timer.current) {
            clearInterval(timer.current)
            timer.current = null
          }
          setData([])
          throw error
        }
      } else {
        if (timer.current) {
          clearInterval(timer.current)
          timer.current = null
        }
        setData([])
      }
    }, 1000 / 30)

    return () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
      setData([])
    }
  }, [device.status, receive])

  return (
    <div className="flex flex-col items-center justify-center space-x-8">
      {device.status === 'disconnected' ? (
        <Button onClick={() => connect([])}>Connect</Button>
      ) : (
        <>
          <Button onClick={disconnect}>Disconnect</Button>
          <div className="mt-4 grid grid-cols-8 gap-4">
            {data.map((elt, i) => (
              <div key={i}>
                <div>{elt[0]}</div>
                <div>{elt[1]}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

'use client'

import { useDevice } from '@/hooks/useDevice'
import { Button } from './ui/button'
import { useEffect, useRef, useState } from 'react'

interface IDisplaySwitch {
  idx: number
  w: number
  h: number
  ml: number
  mt: number
}

const GAUSS64: IDisplaySwitch[][] = [
  [
    { idx: 0, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 1, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 2, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 3, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 4, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 5, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 6, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 7, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 8, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 9, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 10, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 11, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 12, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 13, w: 1.5, h: 1, ml: 0, mt: 0 },
  ],
  [
    { idx: 14, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 15, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 16, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 17, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 18, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 19, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 20, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 21, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 22, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 23, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 24, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 25, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 26, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 27, w: 1.5, h: 1, ml: 0, mt: 0 },
  ],
  [
    { idx: 28, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 29, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 30, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 31, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 32, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 33, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 34, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 35, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 36, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 37, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 38, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 39, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 40, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 41, w: 1, h: 1, ml: 0, mt: 0 },
  ],
  [
    { idx: 42, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 43, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 44, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 45, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 46, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 47, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 48, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 49, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 50, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 51, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 52, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 53, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 54, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 55, w: 1, h: 1, ml: 0, mt: 0 },
  ],
  [
    { idx: 56, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 57, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 58, w: 1.5, h: 1, ml: 0, mt: 0 },
    { idx: 59, w: 7, h: 1, ml: 0, mt: 0 },
    { idx: 60, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 61, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 62, w: 1, h: 1, ml: 0, mt: 0 },
    { idx: 63, w: 1, h: 1, ml: 0, mt: 0 },
  ],
]

export default function MainMenu() {
  const { device, connect, disconnect, receive } = useDevice()
  const timer = useRef<NodeJS.Timeout>(null)
  const [data, setData] = useState<number[][]>([])

  useEffect(() => {
    const cleanup = () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
      setData([])
    }

    const loop = async () => {
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
          timer.current = setTimeout(loop, 1000 / 30)
        } catch (error) {
          cleanup()
          throw error
        }
      } else {
        cleanup()
      }
    }

    if (device.status === 'disconnected') {
      cleanup()
    } else {
      loop()
    }

    return cleanup
  }, [device.status, receive])

  return (
    <div className="flex flex-col items-center justify-center space-x-8">
      {device.status === 'disconnected' ? (
        <Button onClick={() => connect([])}>Connect</Button>
      ) : (
        <>
          <Button onClick={disconnect}>Disconnect</Button>
          {data.length === 64 && (
            <div className="mt-4">
              {GAUSS64.map((row, i) => (
                <div key={i} className="flex">
                  {row.map((elt, j) => (
                    <div
                      key={j}
                      className="p-1"
                      style={{
                        width: `${elt.w * 4}rem`,
                        height: `${elt.h * 4}rem`,
                        marginLeft: `${elt.ml * 4}rem`,
                        marginTop: `${elt.mt * 4}rem`,
                      }}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center rounded border text-center">
                        <p>{data[elt.idx][0]}</p>
                        <p>{`${((data[elt.idx][1] * 5) / 100) >> 0}.${(data[elt.idx][1] * 5) % 100}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}

"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { KeyboardLayout } from "../keyboard-layout"

interface IDebugKeyboardProps {
  device: KeyboardDevice
}

const POLLING_INTERVAL = 1000 / 30

export function DebugKeyboard({
  device: { metadata, getSwitchDebug },
}: IDebugKeyboardProps) {
  const {
    debug: { isDebugging },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  const { status, data } = useQuery({
    queryKey: ["configurator", "switchDebug"],
    queryFn: getSwitchDebug,
    enabled: isDebugging,
  })

  const interval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const cleanup = () => {
      if (interval.current) {
        clearInterval(interval.current)
        interval.current = null
      }
    }

    if (!isDebugging) {
      cleanup()
      return
    }

    interval.current = setInterval(() => {
      if (isDebugging && status === "success") {
        queryClient.invalidateQueries({
          queryKey: ["configurator", "switchDebug"],
        })
      }
    }, POLLING_INTERVAL)

    return cleanup
  }, [isDebugging, queryClient, status])

  return (
    <KeyboardLayout
      metadata={metadata}
      size={4}
      elt={(i) => (
        <div className="absolute inset-0 p-0.5">
          <div className="flex size-full flex-col items-center justify-center overflow-hidden rounded-lg border p-1 text-sm font-medium">
            {isDebugging && data && (
              <>
                <p>{data.adcValues[i]}</p>
                <p>{(data.distances[i] / 20).toFixed(2)}</p>
              </>
            )}
          </div>
        </div>
      )}
    />
  )
}

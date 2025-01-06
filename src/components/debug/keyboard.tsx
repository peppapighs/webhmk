/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { displayDistance } from "@/lib/display-integer"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeyboardLayout } from "../keyboard-layout"

const POLLING_INTERVAL = 1000 / 30

export function DebugKeyboard() {
  const device = useKeyboardDevice()

  const {
    debug: { isDebugging },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  const { status, data } = useQuery({
    queryKey: [device.id, "configurator", "switchDebug"],
    queryFn: device.getSwitchDebug,
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
          queryKey: [device.id, "configurator", "switchDebug"],
        })
      }
    }, POLLING_INTERVAL)

    return cleanup
  }, [device, isDebugging, queryClient, status])

  return (
    <KeyboardLayout
      metadata={device.metadata}
      size={4}
      elt={(i) => (
        <div className="absolute inset-0 p-0.5">
          <div className="card flex size-full flex-col items-center justify-center p-1 text-sm font-medium">
            {isDebugging && data && (
              <>
                <p>{data.adcValues[i]}</p>
                <p>{displayDistance(data.distances[i])}</p>
              </>
            )}
          </div>
        </div>
      )}
    />
  )
}

"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useConfiguratorState } from "../configurator-state-provider"
import { Button } from "../ui/button"

export function PerformanceHeader() {
  const { metadata } = useKeyboardDevice()

  const {
    performance: { indices, setIndices },
  } = useConfiguratorState()

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() =>
            setIndices([...Array(metadata.numKeys)].map((_, i) => i))
          }
        >
          Select All
        </Button>
        <Button
          variant="outline"
          disabled={indices.length === 0}
          onClick={() => {
            const allIndices = [...Array(metadata.numKeys)].map((_, i) => i)
            setIndices(allIndices.filter((i) => !indices.includes(i)))
          }}
        >
          Invert Selection
        </Button>
        <Button
          variant="outline"
          disabled={indices.length === 0}
          onClick={() => setIndices([])}
        >
          Deselect All
        </Button>
      </div>
      <Button variant="destructive" disabled={indices.length === 0}>
        Reset
      </Button>
    </header>
  )
}

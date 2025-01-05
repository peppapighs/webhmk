"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useConfiguratorState } from "../configurator-state-provider"
import { Label } from "../ui/label"

export function RemapLayerSelector() {
  const { metadata } = useKeyboardDevice()

  const {
    remap: { layerNum, setLayerNum },
  } = useConfiguratorState()

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="layer" className="ml-2 text-lg font-bold">
        Layer
      </Label>
      <RadioGroup
        defaultValue="0"
        id="layer"
        value={`${layerNum}`}
        onValueChange={(value) => setLayerNum(Number(value))}
        className="grid grid-flow-col items-center gap-2"
      >
        {[...Array(metadata.numLayers)].map((_, i) => (
          <RadioGroupItem
            key={i}
            value={`${i}`}
            className="card radio-item size-8 text-sm"
          >
            {i}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}

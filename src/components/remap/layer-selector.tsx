"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { Label } from "../ui/label"

interface IRemapLayerSelectorProps {
  device: KeyboardDevice
}

export function RemapLayerSelector({
  device: { metadata },
}: IRemapLayerSelectorProps) {
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
            className="radio-item size-8 text-sm"
          >
            {i}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}

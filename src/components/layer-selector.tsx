"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { Label } from "./ui/label"

interface ILayerSelectorProps {
  device: KeyboardDevice
}

export function LayerSelector({ device: { metadata } }: ILayerSelectorProps) {
  const {
    remap: { layerNum, setLayerNum },
  } = useConfiguratorState()

  return (
    <div className="flex h-14 items-center gap-2">
      <Label htmlFor="layer" className="text-lg font-bold">
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
            className="radio-item h-8 w-8 text-sm"
          >
            {i}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}

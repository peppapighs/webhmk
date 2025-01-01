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
    remap: { setLayerNum },
  } = useConfiguratorState()

  return (
    <div className="flex h-14 items-center gap-2">
      <Label htmlFor="layer" className="text-lg font-bold">
        Layer
      </Label>
      <RadioGroup
        defaultValue="0"
        id="layer"
        onValueChange={(value) => setLayerNum(Number(value))}
        className="grid grid-flow-col items-center gap-2"
      >
        {[...Array(metadata.numLayers)].map((_, i) => (
          <RadioGroupItem
            key={i}
            value={`${i}`}
            className="h-8 w-8 rounded-lg border bg-background px-2 font-normal text-foreground hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:font-medium data-[state=checked]:text-accent-foreground"
          >
            {i}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}

import { KeyboardDevice } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"

interface ILayerSelectorPlaceholderProps {
  device: KeyboardDevice
}

export function LayerSelectorPlaceholder({
  device: { metadata },
}: ILayerSelectorPlaceholderProps) {
  return (
    <div className="grid grid-cols-[repeat(8,minmax(0,min-content))] gap-2">
      {[...Array(metadata.numLayers)].map((_, i) => (
        <div
          key={i}
          className="card flex size-8 flex-col items-center justify-center text-center text-sm opacity-50"
        >
          {i}
        </div>
      ))}
    </div>
  )
}

interface ILayerSelectorProps {
  device: KeyboardDevice
  layerNum: number | null
  onLayerNumChange: (layerNum: number | null) => void
}

export function LayerSelector({
  device: { metadata },
  layerNum,
  onLayerNumChange,
}: ILayerSelectorProps) {
  return (
    <ToggleGroup
      type="single"
      value={layerNum === null ? "" : `${layerNum}`}
      onValueChange={(value) =>
        onLayerNumChange(value === "" ? null : Number(value))
      }
      className="grid grid-cols-[repeat(8,minmax(0,min-content))] gap-2"
    >
      {[...Array(metadata.numLayers)].map((_, i) => (
        <ToggleGroupItem
          key={i}
          value={`${i}`}
          className="card toggle-item size-8 text-sm"
        >
          {i}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

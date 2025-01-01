import { KeyboardDevice } from "@/types/keyboard-device"
import { LayerSelector } from "./layer-selector"
import { Button } from "./ui/button"

interface IRemapHeaderProps {
  device: KeyboardDevice
}

export function RemapHeader({ device }: IRemapHeaderProps) {
  return (
    <header className="flex w-full items-center justify-between gap-6 px-6">
      <LayerSelector device={device} />
      <Button variant="outline">Reset</Button>
    </header>
  )
}

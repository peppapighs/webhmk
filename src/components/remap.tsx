import { KeyboardDevice } from "@/types/keyboard-device"
import { RemapHeader } from "./remap-header"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

interface IRemapProps {
  device: KeyboardDevice
}

export function Remap({ device }: IRemapProps) {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="w-full">
        <div className="flex w-full flex-col">
          <RemapHeader device={device} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1"></ScrollArea>
    </div>
  )
}

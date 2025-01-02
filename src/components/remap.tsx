import { KeyboardDevice } from "@/types/keyboard-device"
import { RemapHeader } from "./remap-header"
import { RemapKeyboard } from "./remap-keyboard"
import { RemapKeycodes } from "./remap-keycodes"
import { ScrollArea, ScrollBar } from "./ui/scroll-area"

interface IRemapProps {
  device: KeyboardDevice
}

export function Remap({ device }: IRemapProps) {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[75%] w-full">
        <div className="flex w-full flex-col">
          <RemapHeader device={device} />
          <div className="flex flex-col items-center p-6 pt-0">
            <RemapKeyboard device={device} />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <RemapKeycodes device={device} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

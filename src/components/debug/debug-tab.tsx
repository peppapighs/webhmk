import { KeyboardDevice } from "@/types/keyboard-device"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { DebugHeader } from "./header"
import { DebugKeyboard } from "./keyboard"

interface IDebugTabProps {
  device: KeyboardDevice
}

export function DebugTab({ device }: IDebugTabProps) {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <DebugHeader />
          <div className="flex flex-col items-center p-6 pt-0">
            <DebugKeyboard device={device} />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

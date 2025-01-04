import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeProvider } from "../keycode-context"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { RemapHeader } from "./header"
import { RemapKeyboard } from "./keyboard"
import { RemapKeycodes } from "./keycodes"

interface IRemapTabProps {
  device: KeyboardDevice
}

export function RemapTab({ device }: IRemapTabProps) {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <RemapHeader device={device} />
          <div className="flex flex-col items-center p-6 pt-0">
            <RemapKeyboard device={device} />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <div className="mx-auto max-w-7xl p-6">
          <KeycodeProvider device={device}>
            <RemapKeycodes device={device} />
          </KeycodeProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

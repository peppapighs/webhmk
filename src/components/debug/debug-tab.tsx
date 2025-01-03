import { KeyboardDevice } from "@/types/keyboard-device"
import { KeyTesterDown, KeyTesterProvider, KeyTesterUp } from "../key-tester"
import { Label } from "../ui/label"
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
        <div className="grid w-full flex-1 grid-cols-[minmax(0,1fr)_400px]">
          <div className="flex w-full flex-col p-6"></div>
          <KeyTesterProvider>
            <div className="grid grid-rows-2 gap-4 p-6">
              <div className="flex flex-col">
                <Label htmlFor="key-tester-down" className="font-bold">
                  Pressed keys
                </Label>
                <KeyTesterDown id="key-tester-down" className="mt-2 h-32" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="key-tester-up" className="font-bold">
                  Released keys
                </Label>
                <KeyTesterUp id="key-tester-up" className="mt-2 h-32" />
              </div>
            </div>
          </KeyTesterProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

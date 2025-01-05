import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { RemapAdvancedFunctions } from "./advanced-functions"
import { RemapHeader } from "./header"
import { RemapKeyboard } from "./keyboard"
import { RemapKeycodes } from "./keycodes"

export function RemapTab() {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <RemapHeader />
          <div className="flex flex-col items-center p-6 pt-0">
            <RemapKeyboard />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <div className="flex justify-center gap-4">
          <RemapKeycodes />
          <RemapAdvancedFunctions />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

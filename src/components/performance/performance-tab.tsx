import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { PerformanceConfig } from "./config"
import { PerformanceHeader } from "./header"
import { PerformanceKeyboard } from "./keyboard"

export function PerformanceTab() {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <PerformanceHeader />
          <div className="flex flex-col items-center p-6 pt-0">
            <PerformanceKeyboard />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <PerformanceConfig />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

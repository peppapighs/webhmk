"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { TriangleAlert } from "lucide-react"
import { buttonVariants } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"

export function DebugHeader() {
  const {
    debug: { isDebugging, toggleDebugging },
  } = useConfiguratorState()

  return (
    <header className="flex w-full items-center p-3">
      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() => toggleDebugging()}
              className={buttonVariants({ variant: "outline" })}
            >
              {isDebugging ? "Stop Debugging" : "Start Debugging"}
              <TriangleAlert />
            </TooltipTrigger>
            <TooltipContent className="max-w-56 text-sm font-medium">
              <p>
                This feature will request keyboard matrix data at high
                frequency. It may cause the keyboard to slow down or become
                unresponsive. Make sure it is disabled when not in use. Note
                that this feature will be disabled automatically when switching
                to another tab.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  )
}

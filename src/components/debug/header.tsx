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
            <TooltipContent className="max-w-prose text-sm font-medium">
              <p>
                This feature continuously requests keyboard matrix data at a
                high frequency, which may cause the keyboard to slow down or
                become unresponsive. Ensure it is disabled when not in use. Note
                that the feature will automatically disable itself when you
                switch to another tab.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  )
}

/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use client"

import { TriangleAlert } from "lucide-react"
import { useConfiguratorState } from "../configurator-state-provider"
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

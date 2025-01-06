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

import { cn } from "@/lib/utils"
import { Info } from "lucide-react"
import { useConfiguratorState } from "../configurator-state-provider"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import { RemapLayerTap } from "./layer-tap"
import { RemapModifierKey } from "./modifier-key"
import { RemapModifierTap } from "./modifier-tap"

export function RemapAdvancedFunctions() {
  const {
    remap: {
      index,
      advancedFunction,
      setAdvancedFunction,
      keycodeFilter,
      setKeycodeFilter,
    },
  } = useConfiguratorState()

  return (
    <div
      className={cn(
        "flex min-w-96 flex-col gap-4 p-6",
        index === null && "pointer-events-none opacity-50",
      )}
    >
      <div className="flex flex-col">
        <Label
          htmlFor="advanced-functions"
          className="whitespace-nowrap text-lg font-bold"
        >
          Advanced Functions
        </Label>
        <Accordion
          id="advanced-functions"
          type="single"
          collapsible
          disabled={index === null}
          value={advancedFunction}
          onValueChange={(value) => setAdvancedFunction(value)}
          className="w-full"
        >
          <AccordionItem value="modifier-key">
            <AccordionTrigger className="whitespace-nowrap disabled:hover:no-underline">
              <div className="flex items-center">
                Modifier Key
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm font-medium">
                      Send modifier(s) together with the key. Only compatible
                      with basic and MO keys.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </AccordionTrigger>
            <AccordionContent asChild>
              <RemapModifierKey />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="mod-tap">
            <AccordionTrigger className="whitespace-nowrap disabled:hover:no-underline">
              <div className="flex items-center">
                Mod-Tap
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm font-medium">
                      Send the key when tapped, send modifier(s) when held. The
                      duration to register the hold action can be adjusted in
                      the <span className="font-bold">Performance</span> tab.
                      Only compatible with basic keys.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </AccordionTrigger>
            <AccordionContent asChild>
              <RemapModifierTap />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="layer-tap">
            <AccordionTrigger className="whitespace-nowrap disabled:hover:no-underline">
              <div className="flex items-center">
                Layer-Tap
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm font-medium">
                      Send the key when tapped, activate a layer when held. The
                      duration to register the hold action can be adjusted in
                      the <span className="font-bold">Performance</span> tab.
                      Only compatible with basic keys.
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </AccordionTrigger>
            <AccordionContent asChild>
              <RemapLayerTap />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Button
          variant="secondary"
          disabled={index === null || keycodeFilter === null}
          onClick={() => setKeycodeFilter(null)}
        >
          Reset Filter
        </Button>
      </div>
    </div>
  )
}

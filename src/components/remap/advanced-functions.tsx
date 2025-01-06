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
    <div className="flex min-w-96 flex-col gap-4 p-6">
      <div className="flex flex-col">
        <Label
          htmlFor="advanced-functions"
          className={cn(
            "whitespace-nowrap text-lg font-bold",
            index === null && "opacity-50",
          )}
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
            <AccordionTrigger className="whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 disabled:hover:no-underline">
              <div className="flex items-center">
                Modifier Key
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-prose font-medium">
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
            <AccordionTrigger className="whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 disabled:hover:no-underline">
              <div className="flex items-center">
                Mod-Tap
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-prose font-medium">
                      Send the key when tapped, send modifier(s) when held. Only
                      compatible with basic keys.
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
            <AccordionTrigger className="whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 disabled:hover:no-underline">
              <div className="flex items-center">
                Layer-Tap
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger disabled={index === null} asChild>
                      <Info className="ml-2 size-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-prose font-medium">
                      Send the key when tapped, activate a layer when held. Only
                      compatible with basic keys.
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

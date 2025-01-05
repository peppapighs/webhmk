"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { cn } from "@/lib/utils"
import { KeyboardDevice } from "@/types/keyboard-device"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { RemapModifierKey } from "./modifier-key"

interface IRemapAdvancedFunctionsProps {
  device: KeyboardDevice
}

export function RemapAdvancedFunctions({
  device,
}: IRemapAdvancedFunctionsProps) {
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
            <AccordionTrigger className="whitespace-nowrap disabled:opacity-50 disabled:hover:no-underline">
              Modifier Key
            </AccordionTrigger>
            <AccordionContent asChild>
              <RemapModifierKey device={device} />
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
          Reset filter
        </Button>
      </div>
    </div>
  )
}

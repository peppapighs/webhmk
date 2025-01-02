import { keycodeToMetadata, renderableKeycodes } from "@/lib/keycodes"
import { cn } from "@/lib/utils"
import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeMetadata } from "@/types/keycodes"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"
import { Label } from "./ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface IRemapKeycodes {
  device: KeyboardDevice
}

export function RemapKeycodes({ device }: IRemapKeycodes) {
  const groupedKeycodes = renderableKeycodes(device.metadata)
    .map((keycode) => keycodeToMetadata(keycode))
    .reduce(
      (acc, keycode) => {
        const category = keycode.category
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(keycode)
        return acc
      },
      {} as Record<string, KeycodeMetadata[]>,
    )

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {Object.entries(groupedKeycodes).map(([category, keycodes]) => (
        <div key={category} className="flex flex-col">
          <div className="flex items-center pl-1">
            <Label
              htmlFor={`category-${category}`}
              className="text-lg font-bold"
            >
              {category}
            </Label>
          </div>
          <div className="mt-2 grid min-w-max grid-cols-12">
            {keycodes.map((keycode, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <div className="h-16 w-16 p-0.5">
                    <TooltipTrigger
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "size-full overflow-hidden whitespace-normal p-1 text-center",
                      )}
                    >
                      {keycode.name}
                    </TooltipTrigger>
                  </div>
                  <TooltipContent className="flex max-w-56 flex-col gap-2">
                    {keycode.description && (
                      <p className="text-sm font-medium">
                        {keycode.description}
                      </p>
                    )}
                    <div className="grid auto-rows-auto gap-2">
                      {keycode.keycodeNames.map((name, index) => (
                        <div key={index}>
                          <Badge variant="secondary">{name}</Badge>
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

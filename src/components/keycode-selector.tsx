"use client"

import { cn } from "@/lib/utils"
import { useKeycodeContext } from "./keycode-context"
import { Badge } from "./ui/badge"
import { buttonVariants } from "./ui/button"
import { Label } from "./ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface IKeycodeSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean
  onKeycodeSelect?: (keycode: number) => void
}

export function KeycodeSelector({
  disabled,
  onKeycodeSelect,
  className,
  ...props
}: IKeycodeSelectorProps) {
  const { groupedKeycodes } = useKeycodeContext()

  return (
    <div
      className={cn("flex flex-col items-center gap-6", className)}
      {...props}
    >
      {Object.entries(groupedKeycodes).map(
        ([category, keycodes]) =>
          keycodes.length > 0 && (
            <div key={category} className="flex flex-col">
              <Label
                htmlFor={`category-${category}`}
                className={cn(
                  "ml-1 text-lg font-bold text-foreground",
                  disabled && "text-muted-foreground",
                )}
              >
                {category}
              </Label>
              <div className="mt-2 grid min-w-max grid-cols-12">
                {keycodes.map((keycode, i) => (
                  <TooltipProvider key={i}>
                    <Tooltip>
                      <div className="size-16 p-0.5">
                        <TooltipTrigger
                          disabled={disabled}
                          onClick={() => onKeycodeSelect?.(keycode.keycode)}
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "keycode size-full overflow-hidden p-1 text-center",
                          )}
                        >
                          {keycode.render ? (
                            <>
                              {keycode.render}
                              <span className="sr-only">{keycode.name}</span>
                            </>
                          ) : (
                            keycode.name
                          )}
                        </TooltipTrigger>
                      </div>
                      <TooltipContent className="flex max-w-prose flex-col gap-2">
                        {keycode.description && (
                          <p className="text-sm font-medium">
                            {keycode.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {keycode.keycodeNames.map((name, j) => (
                            <div key={j}>
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
          ),
      )}
    </div>
  )
}

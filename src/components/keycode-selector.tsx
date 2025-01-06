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

import { KEYCODE_CATEGORIES } from "@/constants/keycode-metadata"
import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { keycodeToMetadata, renderableKeycodes } from "@/lib/keycodes"
import { cn } from "@/lib/utils"
import { KeycodeMetadata } from "@/types/keycodes"
import { useMemo } from "react"
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
  filter?(keycode: number): boolean
  onKeycodeSelect?(keycode: number): void
}

export function KeycodeSelector({
  disabled,
  filter,
  onKeycodeSelect,
  className,
  ...props
}: IKeycodeSelectorProps) {
  const { metadata } = useKeyboardDevice()

  const groupedKeycodes = useMemo(
    () =>
      renderableKeycodes(metadata)
        .filter(filter || (() => true))
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
          KEYCODE_CATEGORIES.reduce(
            (acc, category) => {
              acc[category] = []
              return acc
            },
            {} as Record<string, KeycodeMetadata[]>,
          ),
        ),
    [filter, metadata],
  )

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
      {...props}
    >
      {Object.entries(groupedKeycodes).map(
        ([category, keycodes]) =>
          keycodes.length > 0 && (
            <div key={category} className="flex flex-col">
              <Label
                htmlFor={`category-${category}`}
                className="ml-1 whitespace-nowrap text-lg font-bold"
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
                            "keycode size-full p-1",
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

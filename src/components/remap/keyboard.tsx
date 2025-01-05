"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { keycodeToMetadata } from "@/lib/keycodes"
import { cn } from "@/lib/utils"
import { KeyboardDevice } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useQuery } from "@tanstack/react-query"
import { KeyboardLayout } from "../keyboard-layout"
import { Skeleton } from "../ui/skeleton"

interface IRemapKeyboardProps {
  device: KeyboardDevice
}

export function RemapKeyboard({
  device: { metadata, getKeymap },
}: IRemapKeyboardProps) {
  const {
    profileNum,
    remap: { layerNum, index, setIndex },
  } = useConfiguratorState()

  const { status, data } = useQuery({
    queryKey: ["configurator", "keymap"],
    queryFn: getKeymap,
  })

  if (status !== "success") {
    return (
      <KeyboardLayout
        metadata={metadata}
        size={4}
        elt={() => (
          <div className="absolute inset-0 p-0.5">
            <Skeleton className="size-full rounded-lg" />
          </div>
        )}
      />
    )
  }

  return (
    <ToggleGroup
      type="single"
      value={index === null ? "" : `${index}`}
      onValueChange={(value) => setIndex(value === "" ? null : Number(value))}
      asChild
    >
      <KeyboardLayout
        metadata={metadata}
        size={4}
        elt={(i) => {
          const keycode = keycodeToMetadata(data[profileNum][layerNum][i])
          return (
            <div className="absolute inset-0 p-0.5">
              <ToggleGroupItem
                value={`${i}`}
                className="card toggle-item keycode group relative size-full overflow-hidden p-1 text-sm"
              >
                <span
                  className={cn(
                    keycode.overlay &&
                      "opacity-0 transition-opacity group-hover:opacity-100",
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
                </span>
                {keycode.overlay && (
                  <div className="keycode absolute inset-0 transition-opacity group-hover:opacity-0">
                    {keycode.overlay}
                  </div>
                )}
              </ToggleGroupItem>
            </div>
          )
        }}
      />
    </ToggleGroup>
  )
}

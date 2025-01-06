"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useKeymap } from "@/hooks/use-keymap"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeyboardLayout } from "../keyboard-layout"
import { Keycode } from "../keycode"
import { Skeleton } from "../ui/skeleton"

export function RemapKeyboard() {
  const device = useKeyboardDevice()

  const {
    remap: { layerNum, index, setIndex },
  } = useConfiguratorState()

  const { status, keymap } = useKeymap()

  if (status !== "success") {
    return (
      <KeyboardLayout
        metadata={device.metadata}
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
        metadata={device.metadata}
        size={4}
        elt={(i) => (
          <div className="absolute inset-0 p-0.5">
            <ToggleGroupItem
              value={`${i}`}
              className="card toggle-item keycode group size-full p-1 text-sm"
            >
              <Keycode keycode={keymap[layerNum][i]} />
            </ToggleGroupItem>
          </div>
        )}
      />
    </ToggleGroup>
  )
}

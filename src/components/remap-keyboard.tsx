"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { KeyboardLayout } from "./keyboard-layout"

interface IRemapKeyboardProps {
  device: KeyboardDevice
}

export function RemapKeyboard({ device: { metadata } }: IRemapKeyboardProps) {
  const {
    remap: { index, setIndex },
  } = useConfiguratorState()

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
        elt={(i) => (
          <div className="absolute inset-0 p-0.5">
            <ToggleGroupItem
              value={`${i}`}
              className="toggle-item flex size-full flex-col items-center justify-center overflow-hidden p-1 text-sm"
            >
              {i}
            </ToggleGroupItem>
          </div>
        )}
      />
    </ToggleGroup>
  )
}

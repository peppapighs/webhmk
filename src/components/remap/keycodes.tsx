"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useSetKeymap } from "@/hooks/use-set-keymap"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeycodeSelector } from "../keycode-selector"

export function RemapKeycodes() {
  const device = useKeyboardDevice()

  const {
    remap: { layerNum, index, setIndex, keycodeFilter },
  } = useConfiguratorState()

  const setKeymapQuery = useSetKeymap(device, layerNum, true, setIndex)

  return (
    <KeycodeSelector
      filter={keycodeFilter?.filter}
      disabled={index === null}
      onKeycodeSelect={(keycode) => setKeymapQuery.mutate({ index, keycode })}
      className="p-6"
    />
  )
}

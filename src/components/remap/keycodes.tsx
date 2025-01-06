"use client"

import { useSetKeymap } from "@/hooks/use-set-keymap"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeycodeSelector } from "../keycode-selector"

export function RemapKeycodes() {
  const {
    remap: { layerNum, index, setIndex, keycodeFilter },
  } = useConfiguratorState()

  const setKeymapQuery = useSetKeymap(layerNum, true, setIndex)

  return (
    <KeycodeSelector
      filter={keycodeFilter?.filter}
      disabled={index === null}
      onKeycodeSelect={(keycode) => setKeymapQuery.mutate({ index, keycode })}
      className="p-6"
    />
  )
}

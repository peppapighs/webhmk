"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { useSetKeymap } from "@/hooks/use-set-keymap"
import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeSelector } from "../keycode-selector"

interface IRemapKeycodes {
  device: KeyboardDevice
}

export function RemapKeycodes({ device }: IRemapKeycodes) {
  const {
    remap: { layerNum, index, setIndex, keycodeFilter },
  } = useConfiguratorState()

  const setKeymapQuery = useSetKeymap(device, layerNum, true, setIndex)

  return (
    <KeycodeSelector
      device={device}
      filter={keycodeFilter?.filter}
      disabled={index === null}
      onKeycodeSelect={(keycode) => setKeymapQuery.mutate({ index, keycode })}
      className="p-6"
    />
  )
}

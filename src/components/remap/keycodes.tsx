"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { KeycodeSelector } from "../keycode-selector"

interface IRemapKeycodes {
  device: KeyboardDevice
}

export function RemapKeycodes({
  device: { metadata, setKeymap },
}: IRemapKeycodes) {
  const {
    profileNum,
    remap: { layerNum, index, setIndex },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  type SetKeymapQuery = {
    index: number
    keycode: number
  }

  const setKeymapQuery = useMutation({
    mutationFn: async ({ index, keycode }: SetKeymapQuery) => {
      await setKeymap([
        { profile: profileNum, layer: layerNum, index, keycode },
      ])
      return index
    },
    onSuccess: (index) => {
      queryClient.invalidateQueries({ queryKey: ["configurator", "keymap"] })
      if (index !== null) {
        setIndex(index + 1 === metadata.numKeys ? null : index + 1)
      }
    },
  })

  return (
    <KeycodeSelector
      disabled={index === null}
      onKeycodeSelect={(keycode) =>
        index !== null && setKeymapQuery.mutate({ index, keycode })
      }
    />
  )
}

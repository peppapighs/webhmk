"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useConfiguratorState } from "../configurator-state-provider"
import { Button } from "../ui/button"
import { RemapLayerSelector } from "./layer-selector"

export function RemapHeader() {
  const device = useKeyboardDevice()

  const {
    profileNum,
    remap: { layerNum },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  const resetKeymapQuery = useMutation({
    mutationFn: () =>
      device.setKeymap(
        device.metadata.defaultKeymap[layerNum].map((keycode, index) => ({
          profile: profileNum,
          layer: layerNum,
          index,
          keycode,
        })),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device.id, "configurator", "keymap"],
      })
    },
  })

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <RemapLayerSelector />
      <Button variant="destructive" onClick={() => resetKeymapQuery.mutate()}>
        Reset
      </Button>
    </header>
  )
}

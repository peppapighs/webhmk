"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "../ui/button"
import { RemapLayerSelector } from "./layer-selector"

interface IRemapHeaderProps {
  device: KeyboardDevice
}

export function RemapHeader({ device }: IRemapHeaderProps) {
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
        queryKey: [device, "configurator", "keymap"],
      })
    },
  })

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <RemapLayerSelector device={device} />
      <Button variant="destructive" onClick={() => resetKeymapQuery.mutate()}>
        Reset
      </Button>
    </header>
  )
}

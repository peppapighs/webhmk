"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { LayerSelector } from "./layer-selector"
import { Button } from "./ui/button"

interface IRemapHeaderProps {
  device: KeyboardDevice
}

export function RemapHeader({ device }: IRemapHeaderProps) {
  const {
    profileNum,
    remap: { layerNum },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  const resetKeymap = useMutation({
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
      queryClient.invalidateQueries({ queryKey: ["keymap"] })
    },
  })

  return (
    <header className="flex w-full items-center justify-between gap-6 px-6">
      <LayerSelector device={device} />
      <Button variant="outline" onClick={() => resetKeymap.mutate()}>
        Reset
      </Button>
    </header>
  )
}

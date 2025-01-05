import { useConfiguratorState } from "@/components/configurator-state-provider"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useQuery } from "@tanstack/react-query"

export const useKeycode = (
  device: KeyboardDevice,
  layerNum: number,
  index: number | null,
) => {
  const { profileNum } = useConfiguratorState()

  const { status, data: keymap } = useQuery({
    queryKey: [device, "configurator", "keymap"],
    queryFn: device.getKeymap,
  })

  if (index === null || status !== "success") {
    return null
  }

  return keymap[profileNum][layerNum][index]
}

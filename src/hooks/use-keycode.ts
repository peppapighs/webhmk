import { KeyboardDevice } from "@/types/keyboard-device"
import { useQuery } from "@tanstack/react-query"
import { useConfiguratorState } from "./use-configurator-state"

export const useKeycode = (
  device: KeyboardDevice,
  layerNum: number,
  index: number | null,
) => {
  const { profileNum } = useConfiguratorState()

  const { status, data: keymap } = useQuery({
    queryKey: ["configurator", "keymap"],
    queryFn: device.getKeymap,
  })

  if (index === null || status !== "success") {
    return null
  }

  return keymap[profileNum][layerNum][index]
}

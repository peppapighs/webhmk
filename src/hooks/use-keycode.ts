import { useConfiguratorState } from "@/components/configurator-state-provider"
import { useQuery } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

export const useKeycode = (layerNum: number, index: number | null) => {
  const device = useKeyboardDevice()

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

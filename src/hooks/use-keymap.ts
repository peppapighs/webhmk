import { useConfiguratorState } from "@/components/configurator-state-provider"
import { useQuery } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

export const useKeymap = () => {
  const device = useKeyboardDevice()

  const { profileNum } = useConfiguratorState()

  const { status, data: keymap } = useQuery({
    queryKey: [device.id, "configurator", "keymap"],
    queryFn: device.getKeymap,
  })

  if (status !== "success") {
    return { status }
  }

  return { status, keymap: keymap[profileNum] }
}

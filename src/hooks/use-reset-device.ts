import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useConfiguratorState } from "./use-configurator-state"

export const useResetDevice = (device: KeyboardDevice) => {
  const { reset: configuratorReset } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => device.reset(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device, "configurator"] })
      configuratorReset()
    },
  })
}

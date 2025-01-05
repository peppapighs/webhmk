import { useConfiguratorState } from "@/components/configurator-state-provider"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useResetDevice = (device: KeyboardDevice) => {
  const { reset } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => device.reset(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device, "configurator"] })
      reset()
    },
  })
}

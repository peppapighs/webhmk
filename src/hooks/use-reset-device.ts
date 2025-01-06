import { useConfiguratorState } from "@/components/configurator-state-provider"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

export const useResetDevice = () => {
  const device = useKeyboardDevice()

  const { reset } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: device.reset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device, "configurator"] })
      reset()
    },
  })
}

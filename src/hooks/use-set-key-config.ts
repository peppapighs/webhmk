import { useConfiguratorState } from "@/components/configurator-state-provider"
import { KeyConfig } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

type SetKeyConfigQuery = {
  index: number
  config: KeyConfig
}

export const useSetKeyConfig = () => {
  const device = useKeyboardDevice()

  const { profileNum } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (queries: SetKeyConfigQuery[]) => {
      await device.setKeyConfig(
        queries.map(({ index, config }) => ({
          profile: profileNum,
          index,
          config,
        })),
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device, "configurator", "keyConfig"],
      })
    },
  })
}

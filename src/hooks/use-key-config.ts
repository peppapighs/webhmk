import { useConfiguratorState } from "@/components/configurator-state-provider"
import { KeyConfig } from "@/types/keyboard-device"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

type SetKeyConfigQuery = {
  index: number
  config: KeyConfig
}

export const useKeyConfig = () => {
  const device = useKeyboardDevice()

  const { profileNum } = useConfiguratorState()

  const { status, data: keyConfig } = useQuery({
    queryKey: [device, "configurator", "keyConfig"],
    queryFn: device.getKeyConfig,
  })

  const queryClient = useQueryClient()

  const setKeyConfigQuery = useMutation({
    mutationFn: (queries: SetKeyConfigQuery[]) =>
      device.setKeyConfig(
        queries.map(({ index, config }) => ({
          profile: profileNum,
          index,
          config,
        })),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device, "configurator", "keyConfig"],
      })
    },
  })

  if (status !== "success") {
    return {
      status,
      setKeyConfigQuery,
    }
  }

  return {
    status,
    keyConfig,
    setKeyConfigQuery,
  }
}

import { useConfiguratorState } from "@/components/configurator-state-provider"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

type SetKeymapQuery = {
  index: number | null
  keycode: number
}

export const useSetKeymap = (
  layerNum: number,
  shouldIncrementIndex = false,
  setIndex?: (index: number | null) => void,
) => {
  const device = useKeyboardDevice()

  const { profileNum } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ index, keycode }: SetKeymapQuery) => {
      if (index === null) {
        throw new Error("Invalid index to set keymap")
      }

      await device.setKeymap([
        { profile: profileNum, layer: layerNum, index, keycode },
      ])
      return index
    },
    onSuccess: (index) => {
      queryClient.invalidateQueries({
        queryKey: [device.id, "configurator", "keymap"],
      })
      if (shouldIncrementIndex) {
        setIndex?.(index + 1 === device.metadata.numKeys ? null : index + 1)
      }
    },
  })
}

/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

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

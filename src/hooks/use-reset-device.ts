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

export const useResetDevice = () => {
  const device = useKeyboardDevice()

  const { reset } = useConfiguratorState()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: device.reset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device.id, "configurator"] })
      reset()
    },
  })
}

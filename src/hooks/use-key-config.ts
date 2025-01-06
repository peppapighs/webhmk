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
    queryKey: [device.id, "configurator", "keyConfig"],
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
        queryKey: [device.id, "configurator", "keyConfig"],
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

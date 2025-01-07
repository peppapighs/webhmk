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

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useKeyboardDevice } from "./use-keyboard-device"

export function useTapHold() {
  const device = useKeyboardDevice()

  const { status, data: tapHold } = useQuery({
    queryKey: [device.id, "configurator", "tapHold"],
    queryFn: device.getTapHold,
  })

  const queryClient = useQueryClient()

  const setTapHoldQuery = useMutation({
    mutationFn: device.setTapHold,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device.id, "configurator", "tapHold"],
      })
    },
  })

  if (status !== "success") {
    return {
      status,
      setTapHoldQuery,
    }
  }

  return {
    status,
    tapHold,
    setTapHoldQuery,
  }
}

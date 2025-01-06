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

"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useConfiguratorState } from "../configurator-state-provider"
import { Button } from "../ui/button"
import { RemapLayerSelector } from "./layer-selector"

export function RemapHeader() {
  const device = useKeyboardDevice()

  const {
    profileNum,
    remap: { layerNum },
  } = useConfiguratorState()

  const queryClient = useQueryClient()

  const resetKeymapQuery = useMutation({
    mutationFn: () =>
      device.setKeymap(
        device.metadata.defaultKeymap[layerNum].map((keycode, index) => ({
          profile: profileNum,
          layer: layerNum,
          index,
          keycode,
        })),
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device.id, "configurator", "keymap"],
      })
    },
  })

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <RemapLayerSelector />
      <Button variant="destructive" onClick={() => resetKeymapQuery.mutate()}>
        Reset
      </Button>
    </header>
  )
}

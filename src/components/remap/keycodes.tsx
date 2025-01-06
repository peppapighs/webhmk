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

import { useSetKeymap } from "@/hooks/use-set-keymap"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeycodeSelector } from "../keycode-selector"

export function RemapKeycodes() {
  const {
    remap: { layerNum, index, setIndex, keycodeFilter },
  } = useConfiguratorState()

  const setKeymapQuery = useSetKeymap(layerNum, true, setIndex)

  return (
    <KeycodeSelector
      filter={keycodeFilter?.filter}
      disabled={index === null}
      onKeycodeSelect={(keycode) => setKeymapQuery.mutate({ index, keycode })}
      className="p-6"
    />
  )
}

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

import { useKeycode } from "@/hooks/use-keycode"
import { useSetKeymap } from "@/hooks/use-set-keymap"
import {
  IS_HID_KEYCODE,
  IS_LAYER_MO_KEYCODE,
  IS_LAYER_MOD_KEYCODE,
  IS_MODS_KEYCODE,
  MO,
  SP_LAYER_MO_GET_LAYER,
  SP_LAYER_MOD_GET_LAYER,
  SP_MODS_GET_KEY,
} from "@/lib/keycodes"
import { Keycode } from "@/types/keycodes"
import { useConfiguratorState } from "../configurator-state-provider"
import {
  ModifierSelector,
  ModifierSelectorPlaceholder,
} from "../modifier-selector"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

const isValidKeycode = (keycode: number) =>
  IS_MODS_KEYCODE(keycode) ||
  IS_LAYER_MOD_KEYCODE(keycode) ||
  IS_HID_KEYCODE(keycode) ||
  IS_LAYER_MO_KEYCODE(keycode)

const getModifier = (keycode: number) => {
  if (IS_MODS_KEYCODE(keycode)) {
    return (keycode >> 8) & 0x1f
  } else if (IS_LAYER_MOD_KEYCODE(keycode)) {
    return (keycode >> 4) & 0x1f
  }
  return 0
}

export function RemapModifierKey() {
  const {
    remap: { layerNum, index, keycodeFilter, setKeycodeFilter },
  } = useConfiguratorState()

  const keycode = useKeycode(layerNum, index)
  const setKeymapQuery = useSetKeymap(layerNum)

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="flex items-center gap-4">
        <Switch
          id="modifier-key-filter"
          checked={keycodeFilter?.id === "modifier-key-filter"}
          onCheckedChange={(checked) =>
            checked
              ? setKeycodeFilter({
                  id: "modifier-key-filter",
                  filter: (keycode) =>
                    IS_HID_KEYCODE(keycode) || IS_LAYER_MO_KEYCODE(keycode),
                })
              : setKeycodeFilter(null)
          }
          disabled={index === null}
        />
        <Label htmlFor="modifier-key-filter">Filter only compatible keys</Label>
      </div>
      {keycode !== null && isValidKeycode(keycode) ? (
        <ModifierSelector
          modifier={getModifier(keycode)}
          onModifierChange={(modifier) => {
            if (IS_MODS_KEYCODE(keycode) || IS_HID_KEYCODE(keycode)) {
              const hidKeycode = IS_HID_KEYCODE(keycode)
                ? keycode
                : SP_MODS_GET_KEY(keycode)
              setKeymapQuery.mutate({
                index,
                keycode:
                  modifier === 0 ? hidKeycode : hidKeycode | (modifier << 8),
              })
            } else {
              const layerNum = IS_LAYER_MOD_KEYCODE(keycode)
                ? SP_LAYER_MOD_GET_LAYER(keycode)
                : SP_LAYER_MO_GET_LAYER(keycode)
              setKeymapQuery.mutate({
                index,
                keycode:
                  modifier === 0
                    ? MO(layerNum)
                    : layerNum | (modifier << 4) | Keycode.SP_LAYER_MOD,
              })
            }
          }}
        />
      ) : (
        <ModifierSelectorPlaceholder />
      )}
    </div>
  )
}

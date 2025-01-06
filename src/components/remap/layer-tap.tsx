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
import { useKeycode } from "@/hooks/use-keycode"
import { useSetKeymap } from "@/hooks/use-set-keymap"
import {
  IS_HID_KEYCODE,
  IS_LAYER_TAP_KEYCODE,
  LT,
  SP_LAYER_TAP_GET_KEY,
  SP_LAYER_TAP_GET_LAYER,
} from "@/lib/keycodes"
import { useConfiguratorState } from "../configurator-state-provider"
import { LayerSelector, LayerSelectorPlaceholder } from "../layer-selector"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

const isValidKeycode = (keycode: number) =>
  IS_LAYER_TAP_KEYCODE(keycode) || IS_HID_KEYCODE(keycode)

const getLayerNum = (keycode: number) => {
  if (IS_LAYER_TAP_KEYCODE(keycode)) {
    return SP_LAYER_TAP_GET_LAYER(keycode)
  }
  return null
}

export function RemapLayerTap() {
  const device = useKeyboardDevice()

  const {
    remap: { layerNum, index, keycodeFilter, setKeycodeFilter },
  } = useConfiguratorState()

  const keycode = useKeycode(layerNum, index)
  const setKeymapQuery = useSetKeymap(layerNum)

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="flex items-center gap-4">
        <Switch
          id="layer-tap-filter"
          checked={keycodeFilter?.id === "layer-tap-filter"}
          onCheckedChange={(checked) =>
            checked
              ? setKeycodeFilter({
                  id: "layer-tap-filter",
                  filter: (keycode) => IS_HID_KEYCODE(keycode),
                })
              : setKeycodeFilter(null)
          }
          disabled={index === null}
        />
        <Label htmlFor="layer-tap-filter">Filter only compatible keys</Label>
      </div>
      {keycode !== null && isValidKeycode(keycode) ? (
        <LayerSelector
          layerNum={getLayerNum(keycode)}
          onLayerNumChange={(layerNum) => {
            console.log(layerNum)
            const hidKeycode = IS_LAYER_TAP_KEYCODE(keycode)
              ? SP_LAYER_TAP_GET_KEY(keycode)
              : keycode
            setKeymapQuery.mutate({
              index,
              keycode:
                layerNum === null ? hidKeycode : LT(layerNum, hidKeycode),
            })
          }}
        />
      ) : (
        <LayerSelectorPlaceholder device={device} />
      )}
    </div>
  )
}

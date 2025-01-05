"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
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
import { cn } from "@/lib/utils"
import { KeyboardDevice } from "@/types/keyboard-device"
import { Keycode } from "@/types/keycodes"
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

interface IRemapModifierKey {
  device: KeyboardDevice
}

export function RemapModifierKey({ device }: IRemapModifierKey) {
  const {
    remap: { layerNum, index, keycodeFilter, setKeycodeFilter },
  } = useConfiguratorState()

  const keycode = useKeycode(device, layerNum, index)
  const setKeymapQuery = useSetKeymap(device, layerNum)

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
        <Label
          htmlFor="modifier-key-filter"
          className={cn(index === null && "opacity-50")}
        >
          Filter only compatible keys
        </Label>
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

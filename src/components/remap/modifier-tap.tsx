"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { useKeycode } from "@/hooks/use-keycode"
import { useSetKeymap } from "@/hooks/use-set-keymap"
import {
  IS_HID_KEYCODE,
  IS_MOD_TAP_KEYCODE,
  SP_MOD_TAP_GET_KEY,
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
  IS_MOD_TAP_KEYCODE(keycode) || IS_HID_KEYCODE(keycode)

const getModifier = (keycode: number) => {
  if (IS_MOD_TAP_KEYCODE(keycode)) {
    return (keycode >> 8) & 0x1f
  }
  return 0
}

interface IRemapModifierTap {
  device: KeyboardDevice
}

export function RemapModifierTap({ device }: IRemapModifierTap) {
  const {
    remap: { layerNum, index, keycodeFilter, setKeycodeFilter },
  } = useConfiguratorState()

  const keycode = useKeycode(device, layerNum, index)
  const setKeymapQuery = useSetKeymap(device, layerNum)

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex items-center gap-4">
        <Switch
          id="modifier-tap-filter"
          checked={keycodeFilter?.id === "modifier-tap-filter"}
          onCheckedChange={(checked) =>
            checked
              ? setKeycodeFilter({
                  id: "modifier-tap-filter",
                  filter: (keycode) => IS_HID_KEYCODE(keycode),
                })
              : setKeycodeFilter(null)
          }
          disabled={index === null}
        />
        <Label
          htmlFor="modifier-tap-filter"
          className={cn(index === null && "opacity-50")}
        >
          Filter only compatible keys
        </Label>
      </div>
      {keycode !== null && isValidKeycode(keycode) ? (
        <ModifierSelector
          modifier={getModifier(keycode)}
          onModifierChange={(modifier) => {
            const hidKeycode = IS_HID_KEYCODE(keycode)
              ? keycode
              : SP_MOD_TAP_GET_KEY(keycode)
            setKeymapQuery.mutate({
              index,
              keycode:
                modifier === 0
                  ? hidKeycode
                  : hidKeycode | (modifier << 8) | Keycode.SP_MOD_TAP,
            })
          }}
        />
      ) : (
        <ModifierSelectorPlaceholder />
      )}
    </div>
  )
}

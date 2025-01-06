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

import { KEYCODE_METADATA_MAP } from "@/constants/keycode-metadata"
import { Keycode } from "@/types/keycodes"
import { Toggle } from "@radix-ui/react-toggle"

const MODIFIERS = [
  Keycode.KC_LEFT_CTRL,
  Keycode.KC_LEFT_SHIFT,
  Keycode.KC_LEFT_ALT,
  Keycode.KC_LEFT_GUI,
  Keycode.KC_RIGHT_CTRL,
  Keycode.KC_RIGHT_SHIFT,
  Keycode.KC_RIGHT_ALT,
  Keycode.KC_RIGHT_GUI,
].map((keycode) => KEYCODE_METADATA_MAP[keycode])

export function ModifierSelectorPlaceholder() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,min-content))]">
      {MODIFIERS.map((mod, i) => (
        <div key={i} className="size-16 p-0.5">
          <div className="card keycode size-full p-1 opacity-50">
            {mod.render ? (
              <>
                {mod.render}
                <span className="sr-only">{mod.name}</span>
              </>
            ) : (
              mod.name
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

interface IModifierSelectorProps {
  modifier: number
  onModifierChange: (modifier: number) => void
}

export function ModifierSelector({
  modifier,
  onModifierChange,
}: IModifierSelectorProps) {
  const hasModifier = (index: number) => {
    return index < 4
      ? ((modifier >> 4) & 1) === 0 && ((modifier >> index) & 1) === 1
      : ((modifier >> 4) & 1) === 1 && ((modifier >> (index - 4)) & 1) === 1
  }

  const onPressedChange = (pressed: boolean, index: number) => {
    if (index < 4 !== (((modifier >> 4) & 1) === 0)) {
      modifier = Number(index >= 4) << 4
    }
    modifier = pressed
      ? modifier | (1 << (index < 4 ? index : index - 4))
      : modifier & ~(1 << (index < 4 ? index : index - 4))
    onModifierChange((modifier & 0x0f) === 0 ? 0 : modifier)
  }

  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,min-content))]">
      {MODIFIERS.map((mod, i) => (
        <div key={i} className="size-16 p-0.5">
          <Toggle
            pressed={hasModifier(i)}
            onPressedChange={(pressed) => onPressedChange(pressed, i)}
            className="card keycode toggle-item size-full p-1"
          >
            {mod.render ? (
              <>
                {mod.render}
                <span className="sr-only">{mod.name}</span>
              </>
            ) : (
              mod.name
            )}
          </Toggle>
        </div>
      ))}
    </div>
  )
}

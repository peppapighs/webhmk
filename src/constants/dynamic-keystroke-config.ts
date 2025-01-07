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

import { DynamicKeystrokeConfig } from "@/types/keyboard-device"
import { Keycode } from "@/types/keycodes"

export const DEFAULT_DYNAMIC_KEYSTROKE_CONFIG: DynamicKeystrokeConfig = {
  keycode: Array(4).fill(Keycode.KC_NO),
  mask: Array.from({ length: 4 }, () => ({
    config0: 0,
    config1: 0,
    config2: 0,
    config3: 0,
  })),
}

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

import { KeyConfig, KeyMode } from "@/types/keyboard-device"

export const DEFAULT_TAPPING_TERM = 200
export const DEFAULT_ACTUATION_DISTANCE = 40
export const DEFAULT_BOTTOM_OUT_DISTANCE = 60

export const DEFAULT_RT_DOWN_DISTANCE = 6
export const DEFAULT_RT_UP_DISTANCE = 6

export const DEFAULT_KEY_CONFIG: KeyConfig = {
  tappingTerm: DEFAULT_TAPPING_TERM,
  config: {
    mode: KeyMode.KEY_MODE_NORMAL,
    actuationDistance: DEFAULT_ACTUATION_DISTANCE,
    bottomOutDistance: DEFAULT_BOTTOM_OUT_DISTANCE,
  },
}

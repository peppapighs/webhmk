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

import { SwitchId } from "@/types/keyboard-device"

export const SWITCH_DISTANCE: Record<SwitchId, number> = {
  [SwitchId.SW_GEON_RAW_HE]: 68,
  [SwitchId.SW_GATERON_MAGNETIC_JADE]: 70,
  [SwitchId.SW_GEON_RAPTOR_HE]: 80,
}

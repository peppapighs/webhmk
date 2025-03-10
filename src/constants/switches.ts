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
import { SwitchMetadata } from "@/types/switch-metadata"

export const SWITCH_METADATA: SwitchMetadata[] = [
  {
    id: SwitchId.SW_GEON_RAW_HE,
    name: "GEON Raw HE",
    distance: 68,
  },
  {
    id: SwitchId.SW_GATERON_MAGNETIC_JADE,
    name: "Gateron Magnetic Jade",
    distance: 70,
  },
  {
    id: SwitchId.SW_GEON_RAPTOR_HE,
    name: "GEON Raptor HE",
    distance: 80,
  },
]

export const SWITCH_DISTANCE_MAP = SWITCH_METADATA.reduce(
  (acc, { id, distance }) => {
    acc[id] = distance
    return acc
  },
  {} as Record<SwitchId, number>,
)

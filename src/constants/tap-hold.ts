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

import { TapHoldId } from "@/types/keyboard-device"
import { TapHoldMetadata } from "@/types/tap-hold-metadata"

export const TAP_HOLD_METADATA: TapHoldMetadata[] = [
  {
    id: TapHoldId.TAP_HOLD_DEFAULT,
    name: "Default",
  },
  {
    id: TapHoldId.TAP_HOLD_HOLD_ON_OTHER_KEY_PRESS,
    name: "Hold On Other Key Press",
  },
]

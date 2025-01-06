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

import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { RemapAdvancedFunctions } from "./advanced-functions"
import { RemapHeader } from "./header"
import { RemapKeyboard } from "./keyboard"
import { RemapKeycodes } from "./keycodes"

export function RemapTab() {
  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <RemapHeader />
          <div className="flex flex-col items-center p-6 pt-0">
            <RemapKeyboard />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <div className="flex justify-center gap-4">
          <RemapKeycodes />
          <RemapAdvancedFunctions />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

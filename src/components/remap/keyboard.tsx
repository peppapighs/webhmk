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
import { useKeymap } from "@/hooks/use-keymap"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeyboardLayout } from "../keyboard-layout"
import { Keycode } from "../keycode"
import { Skeleton } from "../ui/skeleton"

export function RemapKeyboard() {
  const device = useKeyboardDevice()

  const {
    remap: { layerNum, index, setIndex },
  } = useConfiguratorState()

  const { status, keymap } = useKeymap()

  if (status !== "success") {
    return (
      <KeyboardLayout
        metadata={device.metadata}
        size={4}
        elt={() => (
          <div className="absolute inset-0 p-0.5">
            <Skeleton className="size-full rounded-lg" />
          </div>
        )}
      />
    )
  }

  return (
    <ToggleGroup
      type="single"
      value={index === null ? "" : `${index}`}
      onValueChange={(value) => setIndex(value === "" ? null : Number(value))}
      asChild
    >
      <KeyboardLayout
        metadata={device.metadata}
        size={4}
        elt={(i) => (
          <div className="absolute inset-0 p-0.5">
            <ToggleGroupItem
              value={`${i}`}
              className="card toggle-item keycode group size-full p-1 text-sm"
            >
              <Keycode keycode={keymap[layerNum][i]} />
            </ToggleGroupItem>
          </div>
        )}
      />
    </ToggleGroup>
  )
}

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
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useConfiguratorState } from "./configurator-state-provider"

export function ProfileSelector() {
  const { metadata } = useKeyboardDevice()

  const { profileNum, setProfileNum } = useConfiguratorState()

  return (
    <RadioGroup
      defaultValue="0"
      value={`${profileNum}`}
      onValueChange={(value) => setProfileNum(Number(value))}
      className="flex w-full flex-col gap-2 text-sm"
    >
      {[...Array(metadata.numProfiles)].map((_, i) => (
        <RadioGroupItem
          key={i}
          value={`${i}`}
          className="card radio-item h-8 w-full px-2"
        >
          Profile {i}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

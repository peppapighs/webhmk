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

import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceTappingTerm() {
  const { disabled, userConfig, setUserConfig, commitUserConfig } =
    useKeyConfigContext()

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="tapping-term"
        className="whitespace-nowrap text-lg font-bold"
      >
        Tapping Term: {userConfig.tappingTerm}ms
      </Label>
      <p className="mt-2 text-muted-foreground">
        Set the duration the key must be held to register the hold action if the
        key is assigned to a Tap-Hold key.
      </p>
      <div className="flex flex-col py-4">
        <Slider
          id="tapping-term"
          disabled={disabled}
          min={10}
          max={1000}
          step={5}
          value={[userConfig.tappingTerm]}
          onValueChange={([value]) =>
            setUserConfig({ ...userConfig, tappingTerm: value })
          }
          onValueCommit={() => commitUserConfig(userConfig)}
        />
      </div>
    </div>
  )
}

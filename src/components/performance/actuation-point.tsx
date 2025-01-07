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

import { displayDistance } from "@/lib/display-integer"
import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceActuationPoint() {
  const {
    disabled,
    switchDistance,
    userConfig,
    setUserConfig,
    commitUserConfig,
  } = useKeyConfigContext()

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="actuation-point"
        className="whitespace-nowrap text-lg font-bold"
      >
        Actuation Point: {displayDistance(userConfig.config.actuationDistance)}
        mm
      </Label>
      <p className="mt-2 text-muted-foreground">
        Set the distance where the key is registered as pressed.
      </p>
      <div className="flex flex-col py-4">
        <Slider
          id="actuation-point"
          disabled={disabled}
          min={1}
          max={switchDistance}
          value={[userConfig.config.actuationDistance]}
          onValueChange={([value]) =>
            setUserConfig(
              produce((draft) => {
                draft.config.actuationDistance = value
                if (draft.config.mode === KeyMode.KEY_MODE_NORMAL) {
                  draft.config.bottomOutDistance = Math.max(
                    draft.config.bottomOutDistance,
                    value,
                  )
                } else if (draft.config.resetDistance !== 0) {
                  draft.config.resetDistance = value
                }
              }),
            )
          }
          onValueCommit={() => commitUserConfig(userConfig)}
        />
      </div>
    </div>
  )
}

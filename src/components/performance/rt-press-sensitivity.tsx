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

import { DEFAULT_RT_DOWN_DISTANCE } from "@/constants/key-config"
import { displayDistance } from "@/lib/display-integer"
import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceRapidTriggerPressSensitivity() {
  const {
    disabled,
    switchDistance,
    userConfig,
    setUserConfig,
    commitUserConfig,
  } = useKeyConfigContext()

  const rtPressSensitivity =
    userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER
      ? userConfig.config.rtDownDistance
      : DEFAULT_RT_DOWN_DISTANCE

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="rt-press-sensitivity"
        className="whitespace-nowrap text-lg font-bold"
      >
        Rapid Trigger Press Sensitivity: {displayDistance(rtPressSensitivity)}mm
      </Label>
      <p className="mt-2 text-muted-foreground">
        Set the press distance required to register a key press when Rapid
        Trigger is active.
      </p>
      <div className="flex flex-col py-4">
        <Slider
          id="rt-press-sensitivity"
          disabled={disabled}
          min={1}
          max={switchDistance}
          value={[rtPressSensitivity]}
          onValueChange={([value]) =>
            setUserConfig(
              produce((draft) => {
                if (draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER) {
                  draft.config.rtDownDistance = value
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

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

import { DEFAULT_RT_UP_DISTANCE } from "@/constants/key-config"
import { displayDistance } from "@/lib/display-integer"
import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceRapidTriggerReleaseSensitivity() {
  const {
    disabled,
    switchDistance,
    userConfig,
    setUserConfig,
    commitUserConfig,
  } = useKeyConfigContext()

  const rtReleaseSensitivity =
    userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER
      ? userConfig.config.rtUpDistance
      : DEFAULT_RT_UP_DISTANCE

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="rt-release-sensitivity"
        className="whitespace-nowrap text-lg font-bold"
      >
        Rapid Trigger Release Sensitivity:{" "}
        {displayDistance(rtReleaseSensitivity)}mm
      </Label>
      <p className="mt-2 text-muted-foreground">
        Set the release distance required to register a key release when Rapid
        Trigger is active.
      </p>
      <div className="flex flex-col py-4">
        <Slider
          id="rt-release-sensitivity"
          disabled={disabled}
          min={1}
          max={switchDistance}
          value={[rtReleaseSensitivity]}
          onValueChange={([value]) =>
            setUserConfig(
              produce((draft) => {
                if (draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER) {
                  draft.config.rtUpDistance = value
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

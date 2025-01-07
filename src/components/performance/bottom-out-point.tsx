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

import { DEFAULT_BOTTOM_OUT_DISTANCE } from "@/constants/key-config"
import { displayDistance } from "@/lib/display-integer"
import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceBottomOutPoint() {
  const {
    disabled,
    switchDistance,
    userConfig,
    setUserConfig,
    commitUserConfig,
  } = useKeyConfigContext()

  const bottomOutDistance =
    userConfig.config.mode === KeyMode.KEY_MODE_NORMAL
      ? userConfig.config.bottomOutDistance
      : DEFAULT_BOTTOM_OUT_DISTANCE

  return (
    <div className="flex flex-col">
      <Label
        htmlFor="bottom-out-point"
        className="whitespace-nowrap text-lg font-bold"
      >
        Bottom-Out Point: {displayDistance(bottomOutDistance)}mm
      </Label>
      <p className="mt-2 text-muted-foreground">
        Set the distance where the key is considered as &ldquo;bottomed
        out.&rdquo; Only used if the key is assigned to a Dynamic Keystroke
        config.
      </p>
      <div className="flex flex-col py-4">
        <Slider
          id="bottom-out-point"
          disabled={disabled}
          min={1}
          max={switchDistance}
          value={[bottomOutDistance]}
          onValueChange={([value]) =>
            setUserConfig(
              produce((draft) => {
                if (draft.config.mode !== KeyMode.KEY_MODE_NORMAL) {
                  return
                }
                draft.config.bottomOutDistance = value
                draft.config.actuationDistance = Math.min(
                  draft.config.actuationDistance,
                  value,
                )
              }),
            )
          }
          onValueCommit={() => commitUserConfig(userConfig)}
        />
      </div>
    </div>
  )
}

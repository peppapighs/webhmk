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

import {
  DEFAULT_BOTTOM_OUT_DISTANCE,
  DEFAULT_RT_DOWN_DISTANCE,
  DEFAULT_RT_UP_DISTANCE,
} from "@/constants/key-config"
import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceRapidTriggerToggle() {
  const { disabled, userConfig, commitUserConfig } = useKeyConfigContext()

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Switch
          id="rapid-trigger"
          disabled={disabled}
          checked={userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER}
          onCheckedChange={(checked) =>
            commitUserConfig(
              produce(userConfig, (draft) => {
                const actuationDistance = draft.config.actuationDistance
                if (checked) {
                  draft.config = {
                    mode: KeyMode.KEY_MODE_RAPID_TRIGGER,
                    actuationDistance,
                    resetDistance: actuationDistance,
                    rtDownDistance: DEFAULT_RT_DOWN_DISTANCE,
                    rtUpDistance: DEFAULT_RT_UP_DISTANCE,
                  }
                } else {
                  draft.config = {
                    mode: KeyMode.KEY_MODE_NORMAL,
                    actuationDistance,
                    bottomOutDistance: Math.max(
                      actuationDistance,
                      DEFAULT_BOTTOM_OUT_DISTANCE,
                    ),
                  }
                }
              }),
            )
          }
        />
        <Label
          htmlFor="rapid-trigger"
          className="whitespace-nowrap text-lg font-bold"
        >
          Rapid Trigger
        </Label>
      </div>
      <p className="mt-2 text-muted-foreground">
        Rapid Trigger registers a key press or release based on the change in
        key position and the direction of that change. It activates when the key
        is pressed past the actuation point and deactivates when the key is
        released past the actuation point.
      </p>
    </div>
  )
}

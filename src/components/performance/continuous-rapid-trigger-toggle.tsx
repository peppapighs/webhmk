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

import { KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { useKeyConfigContext } from "./key-config-provider"

export function PerformanceContinuousRapidTriggerToggle() {
  const { disabled, userConfig, commitUserConfig } = useKeyConfigContext()

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <Switch
          id="continuous-rapid-trigger"
          disabled={disabled}
          checked={
            userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER &&
            userConfig.config.resetDistance === 0
          }
          onCheckedChange={(checked) =>
            userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER &&
            commitUserConfig(
              produce(userConfig, (draft) => {
                if (draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER) {
                  draft.config.resetDistance = checked
                    ? 0
                    : draft.config.actuationDistance
                }
              }),
            )
          }
        />
        <Label
          htmlFor="continuous-rapid-trigger"
          className="whitespace-nowrap text-lg font-bold"
        >
          Continuous Rapid Trigger
        </Label>
      </div>
      <p className="mt-2 text-muted-foreground">
        Deactivate Rapid Trigger only when the key is fully released.
      </p>
    </div>
  )
}

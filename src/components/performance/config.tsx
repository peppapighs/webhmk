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

import { cn } from "@/lib/utils"
import { KeyMode } from "@/types/keyboard-device"
import { PerformanceActuationPoint } from "./actuation-point"
import { PerformanceBottomOutPoint } from "./bottom-out-point"
import { PerformanceContinuousRapidTriggerToggle } from "./continuous-rapid-trigger-toggle"
import { useKeyConfigContext } from "./key-config-provider"
import { PerformanceRapidTriggerToggle } from "./rapid-trigger-toggle"
import { PerformanceRapidTriggerPressSensitivity } from "./rt-press-sensitivity"
import { PerformanceRapidTriggerReleaseSensitivity } from "./rt-release-sensitivity"
import { PerformanceTappingTerm } from "./tapping-term"

export function PerformanceConfig() {
  const { disabled, userConfig } = useKeyConfigContext()

  return (
    <div
      className={cn(
        "flex w-full justify-center gap-4",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="flex w-full min-w-96 max-w-xl flex-col gap-6 p-6">
        <PerformanceActuationPoint />
        {userConfig.config.mode === KeyMode.KEY_MODE_NORMAL ? (
          <PerformanceBottomOutPoint />
        ) : (
          <>
            <PerformanceRapidTriggerPressSensitivity />
            <PerformanceRapidTriggerReleaseSensitivity />
          </>
        )}
      </div>
      <div className="flex w-full min-w-96 max-w-xl flex-col gap-6 p-6">
        <PerformanceTappingTerm />
        <PerformanceRapidTriggerToggle />
        {userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER && (
          <PerformanceContinuousRapidTriggerToggle />
        )}
      </div>
    </div>
  )
}

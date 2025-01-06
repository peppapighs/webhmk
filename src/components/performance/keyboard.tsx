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

import { useKeyConfig } from "@/hooks/use-key-config"
import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useKeymap } from "@/hooks/use-keymap"
import { displayDistance } from "@/lib/display-integer"
import { cn } from "@/lib/utils"
import { KeyConfig, KeyMode } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeyboardLayout } from "../keyboard-layout"
import { Keycode } from "../keycode"
import { Skeleton } from "../ui/skeleton"

interface IPerformanceKeyConfigProps {
  keyConfig: KeyConfig
}

const PerformanceKeyConfig = ({
  keyConfig: { config },
}: IPerformanceKeyConfigProps) => {
  switch (config.mode) {
    case KeyMode.KEY_MODE_NORMAL:
      return <>{displayDistance(config.actuationDistance)}</>

    case KeyMode.KEY_MODE_RAPID_TRIGGER:
      return (
        <>
          <p>
            {displayDistance(config.actuationDistance)}
            {config.resetDistance === 0 && "C"}
          </p>
          <p>{displayDistance(config.rtDownDistance)}</p>
          <p>{displayDistance(config.rtUpDistance)}</p>
        </>
      )

    default:
      return <></>
  }
}

export function PerformanceKeyboard() {
  const device = useKeyboardDevice()

  const {
    profileNum,
    performance: { indices, setIndices, showKeymap },
  } = useConfiguratorState()

  const { status: keyConfigStatus, keyConfig } = useKeyConfig()
  const { status: keymapStatus, keymap } = useKeymap()

  if (keyConfigStatus !== "success" || keymapStatus !== "success") {
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
      type="multiple"
      value={indices.map((i) => `${i}`)}
      onValueChange={(value) => setIndices(value.map((i) => Number(i)))}
      asChild
    >
      <KeyboardLayout
        metadata={device.metadata}
        size={4}
        elt={(i) => {
          return (
            <div className="absolute inset-0 p-0.5">
              <ToggleGroupItem
                value={`${i}`}
                className={cn(
                  "card toggle-item keycode size-full p-1",
                  showKeymap ? "group text-sm" : "text-xs",
                )}
              >
                {showKeymap ? (
                  <Keycode keycode={keymap[0][i]} />
                ) : (
                  <PerformanceKeyConfig keyConfig={keyConfig[profileNum][i]} />
                )}
              </ToggleGroupItem>
            </div>
          )
        }}
      />
    </ToggleGroup>
  )
}

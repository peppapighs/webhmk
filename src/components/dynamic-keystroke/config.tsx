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

import { DEFAULT_DYNAMIC_KEYSTROKE_CONFIG } from "@/constants/dynamic-keystroke-config"
import { useDynamicKeystrokeConfig } from "@/hooks/use-dynamic-keystroke-config"
import { useKeycode } from "@/hooks/use-keycode"
import {
  IS_DKS_KEYCODE,
  IS_HID_KEYCODE,
  SP_DKS_GET_CONFIG,
} from "@/lib/keycodes"
import { cn } from "@/lib/utils"
import { DynamicKeystrokeConfig as DynamicKeystrokeConfigType } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { produce } from "immer"
import { Info } from "lucide-react"
import { useEffect } from "react"
import { useConfiguratorState } from "../configurator-state-provider"
import { Keycode } from "../keycode"
import { KeycodeSelector } from "../keycode-selector"
import { Label } from "../ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip"
import {
  DynamicKeystrokeDraggable,
  DynamicKeystrokeDraggableHeader,
} from "./draggable"

const useSelectedDksConfig = () => {
  const {
    profileNum,
    dynamicKeystroke: { layerNum, index: keyIndex, setIndex },
  } = useConfiguratorState()

  const dksKeycode = useKeycode(layerNum, keyIndex)
  const {
    status: dksConfigStatus,
    dynamicKeystrokeConfig,
    setDynamicKeystrokeConfigQuery,
  } = useDynamicKeystrokeConfig()

  const setDynamicKeystrokeConfig = (config: DynamicKeystrokeConfigType) =>
    dksKeycode !== null &&
    setDynamicKeystrokeConfigQuery.mutate([
      {
        profile: profileNum,
        index: SP_DKS_GET_CONFIG(dksKeycode),
        config,
      },
    ])

  const disabled =
    keyIndex === null ||
    dksKeycode === null ||
    dksConfigStatus !== "success" ||
    !IS_DKS_KEYCODE(dksKeycode)

  useEffect(() => {
    if (disabled) {
      setIndex(null)
    }
  }, [disabled, setIndex])

  if (disabled) {
    return {
      disabled,
      setDynamicKeystrokeConfig,
    }
  }

  return {
    disabled,
    dksIndex: SP_DKS_GET_CONFIG(dksKeycode),
    dksConfig:
      dynamicKeystrokeConfig[profileNum][SP_DKS_GET_CONFIG(dksKeycode)],
    setDynamicKeystrokeConfig,
  }
}

export function DynamicKeystrokeConfig() {
  const {
    dynamicKeystroke: { dksKey, setDksKey },
  } = useConfiguratorState()

  const { disabled, dksConfig, setDynamicKeystrokeConfig } =
    useSelectedDksConfig()

  return (
    <div className="flex justify-center gap-4">
      <div
        className={cn(
          "flex flex-col p-6",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        <div className="flex items-center gap-2">
          <Label
            htmlFor=""
            className="ml-1 whitespace-nowrap text-lg font-bold"
          >
            Dynamic Keystroke
          </Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger disabled={disabled} asChild>
                <Info className="size-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-sm font-medium">
                Assign up to 4 keycodes and 4 actions to a single keystroke.
                Rapid Trigger must be disabled for this key to achieve the
                desired effect.
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ToggleGroup
          type="single"
          disabled={disabled}
          value={dksKey === null ? "" : `${dksKey}`}
          onValueChange={(value) =>
            value === "" ? setDksKey(null) : setDksKey(Number(value))
          }
          className="mt-3"
        >
          <div className="flex flex-col">
            <div className="flex w-full items-center pl-20">
              <DynamicKeystrokeDraggableHeader disabled={disabled} />
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex w-full items-center gap-4">
                <div className="size-16 p-0.5">
                  <ToggleGroupItem
                    value={`${i}`}
                    className="card keycode toggle-item size-full"
                  >
                    <Keycode keycode={disabled ? 0 : dksConfig.keycode[i]} />
                  </ToggleGroupItem>
                </div>
                <DynamicKeystrokeDraggable
                  disabled={disabled}
                  mask={
                    disabled
                      ? DEFAULT_DYNAMIC_KEYSTROKE_CONFIG.mask[i]
                      : dksConfig.mask[i]
                  }
                  onMaskChange={(mask) =>
                    !disabled &&
                    setDynamicKeystrokeConfig(
                      produce(dksConfig, (draft) => {
                        draft.mask[i] = mask
                      }),
                    )
                  }
                />
              </div>
            ))}
          </div>
        </ToggleGroup>
      </div>
      <div className="flex flex-col p-6">
        <KeycodeSelector
          disabled={disabled || dksKey === null}
          filter={IS_HID_KEYCODE}
          onKeycodeSelect={(keycode) => {
            if (disabled || dksKey === null) {
              return
            }
            setDynamicKeystrokeConfig(
              produce(dksConfig, (draft) => {
                draft.keycode[dksKey] = keycode
              }),
            )
          }}
        />
      </div>
    </div>
  )
}

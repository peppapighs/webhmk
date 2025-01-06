"use client"

import {
  DEFAULT_BOTTOM_OUT_DISTANCE,
  DEFAULT_KEY_CONFIG,
  DEFAULT_RT_DOWN_DISTANCE,
  DEFAULT_RT_UP_DISTANCE,
} from "@/constants/key-config"
import { SWITCH_DISTANCE } from "@/constants/switches"
import { useKeyConfig } from "@/hooks/use-key-config"
import { useSwitchId } from "@/hooks/use-switch-id"
import { displayDistance } from "@/lib/display-integer"
import { cn } from "@/lib/utils"
import { KeyConfig, KeyMode } from "@/types/keyboard-device"
import { produce } from "immer"
import { useEffect, useState } from "react"
import { useConfiguratorState } from "../configurator-state-provider"
import { Button } from "../ui/button"
import { PerformanceSlider } from "./slider"
import { PerformanceSwitch } from "./switch"

export function PerformanceConfig() {
  const {
    profileNum,
    performance: { indices },
  } = useConfiguratorState()

  const {
    status: keyConfigStatus,
    keyConfig,
    setKeyConfigQuery,
  } = useKeyConfig()
  const { status: switchIdStatus, switchId } = useSwitchId()

  const disabled =
    keyConfigStatus !== "success" ||
    switchIdStatus !== "success" ||
    indices.length === 0

  const [baseConfig, setBaseConfig] = useState<KeyConfig>(DEFAULT_KEY_CONFIG)
  const [userConfig, setUserConfig] = useState<KeyConfig>(DEFAULT_KEY_CONFIG)

  const hasConfigChanged =
    JSON.stringify(userConfig) !== JSON.stringify(baseConfig)

  useEffect(() => {
    if (disabled) {
      setBaseConfig(DEFAULT_KEY_CONFIG)
      setUserConfig(DEFAULT_KEY_CONFIG)
      return
    }

    const filteredConfigs = indices.map((index) => keyConfig[profileNum][index])
    const normalConfig = filteredConfigs.find(
      ({ config: { mode } }) => mode === KeyMode.KEY_MODE_NORMAL,
    )
    if (normalConfig !== undefined) {
      setBaseConfig(normalConfig)
      setUserConfig(normalConfig)
    } else {
      setBaseConfig(keyConfig[profileNum][indices[0]])
      setUserConfig(keyConfig[profileNum][indices[0]])
    }
  }, [disabled, indices, keyConfig, profileNum])

  return (
    <div
      className={cn(
        "flex w-full justify-center gap-4",
        disabled && "pointer-events-none opacity-50",
      )}
    >
      <div className="flex w-full min-w-96 max-w-xl flex-col gap-6 p-6">
        <PerformanceSlider
          id="tapping-term"
          label={`Tapping Term: ${disabled ? 0 : userConfig.tappingTerm}ms`}
          description="Set the duration the key must be held to register the hold action if the key is assigned to a Tap-Hold key."
          {...(!disabled && {
            config: {
              min: 10,
              max: 1000,
              value: userConfig.tappingTerm,
              onValueChange: (value) =>
                setUserConfig(
                  produce((draft) => {
                    draft.tappingTerm = value
                  }),
                ),
            },
          })}
        />
        <PerformanceSlider
          id="actuation-point"
          label={`Actuation Point: ${displayDistance(
            disabled ? 0 : userConfig.config.actuationDistance,
          )}mm`}
          description="Set the distance where the key is registered as pressed."
          {...(!disabled && {
            config: {
              min: 1,
              max: SWITCH_DISTANCE[switchId],
              value: userConfig.config.actuationDistance,
              onValueChange: (value) =>
                setUserConfig(
                  produce((draft) => {
                    draft.config.actuationDistance = value
                    if (draft.config.mode === KeyMode.KEY_MODE_NORMAL) {
                      draft.config.bottomOutDistance = Math.max(
                        draft.config.bottomOutDistance,
                        value,
                      )
                    }
                    if (
                      draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER &&
                      draft.config.resetDistance !== 0
                    ) {
                      draft.config.resetDistance = value
                    }
                  }),
                ),
            },
          })}
        />
        {userConfig.config.mode === KeyMode.KEY_MODE_NORMAL ? (
          <PerformanceSlider
            id="bottom-out-point"
            label={`Bottom-Out Point: ${displayDistance(
              disabled ? 0 : userConfig.config.bottomOutDistance,
            )}mm`}
            description="Set the distance where the key is considered as &ldquo;bottomed out.&rdquo; Only used if the key is assigned to a Dynamic Keystroke config."
            {...(!disabled && {
              config: {
                min: 1,
                max: SWITCH_DISTANCE[switchId],
                value: userConfig.config.bottomOutDistance,
                onValueChange: (value) =>
                  setUserConfig(
                    produce((draft) => {
                      if (draft.config.mode === KeyMode.KEY_MODE_NORMAL) {
                        draft.config.bottomOutDistance = value
                        draft.config.actuationDistance = Math.min(
                          draft.config.actuationDistance,
                          value,
                        )
                      }
                    }),
                  ),
              },
            })}
          />
        ) : (
          <>
            <PerformanceSlider
              id="rt-press-sensitivity"
              label={`Rapid Trigger Press Sensitivity: ${displayDistance(disabled ? 0 : userConfig.config.rtDownDistance)}mm`}
              description="Set the press distance required to register a key press when Rapid Trigger is active."
              {...(!disabled && {
                config: {
                  min: 1,
                  max: SWITCH_DISTANCE[switchId],
                  value: userConfig.config.rtDownDistance,
                  onValueChange: (value) =>
                    setUserConfig(
                      produce((draft) => {
                        if (
                          draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER
                        ) {
                          draft.config.rtDownDistance = value
                        }
                      }),
                    ),
                },
              })}
            />
            <PerformanceSlider
              id="rt-release-sensitivity"
              label={`Rapid Trigger Release Sensitivity: ${displayDistance(disabled ? 0 : userConfig.config.rtUpDistance)}mm`}
              description="Set the release distance required to register a key release when Rapid Trigger is active."
              {...(!disabled && {
                config: {
                  min: 1,
                  max: SWITCH_DISTANCE[switchId],
                  value: userConfig.config.rtUpDistance,
                  onValueChange: (value) =>
                    setUserConfig(
                      produce((draft) => {
                        if (
                          draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER
                        ) {
                          draft.config.rtUpDistance = value
                        }
                      }),
                    ),
                },
              })}
            />
          </>
        )}
      </div>
      <div className="flex w-full min-w-96 max-w-xl flex-col gap-6 p-6">
        <PerformanceSwitch
          id="rapid-trigger-mode"
          label="Rapid Trigger"
          description="Rapid Trigger registers a key press or release based on the change in key position and the direction of that change. It activates when the key is pressed past the actuation point and deactivates when the key is released past the actuation point."
          {...(!disabled && {
            config: {
              checked:
                userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER,
              onCheckedChange: (checked) =>
                setUserConfig(
                  produce((draft) => {
                    const { actuationDistance } = draft.config
                    if (checked) {
                      if (
                        baseConfig.config.mode ===
                        KeyMode.KEY_MODE_RAPID_TRIGGER
                      ) {
                        draft.config = {
                          mode: KeyMode.KEY_MODE_RAPID_TRIGGER,
                          actuationDistance,
                          resetDistance:
                            baseConfig.config.resetDistance === 0
                              ? 0
                              : actuationDistance,
                          rtDownDistance: baseConfig.config.rtDownDistance,
                          rtUpDistance: baseConfig.config.rtUpDistance,
                        }
                      } else {
                        draft.config = {
                          mode: KeyMode.KEY_MODE_RAPID_TRIGGER,
                          actuationDistance,
                          resetDistance: actuationDistance,
                          rtDownDistance: DEFAULT_RT_DOWN_DISTANCE,
                          rtUpDistance: DEFAULT_RT_UP_DISTANCE,
                        }
                      }
                    } else {
                      draft.config = {
                        mode: KeyMode.KEY_MODE_NORMAL,
                        actuationDistance,
                        bottomOutDistance: Math.max(
                          baseConfig.config.mode === KeyMode.KEY_MODE_NORMAL
                            ? baseConfig.config.bottomOutDistance
                            : DEFAULT_BOTTOM_OUT_DISTANCE,
                          actuationDistance,
                        ),
                      }
                    }
                  }),
                ),
            },
          })}
        />
        <PerformanceSwitch
          id="continuous-rapid-trigger-mode"
          label="Continuous Rapid Trigger"
          description="Deactivate Rapid Trigger only when the key is fully released."
          {...(!disabled &&
            userConfig.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER && {
              config: {
                checked: userConfig.config.resetDistance === 0,
                onCheckedChange: (checked) =>
                  setUserConfig(
                    produce((draft) => {
                      if (
                        draft.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER
                      ) {
                        draft.config.resetDistance = checked
                          ? 0
                          : draft.config.actuationDistance
                      }
                    }),
                  ),
              },
            })}
          className={cn(
            userConfig.config.mode !== KeyMode.KEY_MODE_RAPID_TRIGGER &&
              "pointer-events-none opacity-50",
          )}
        />
        <div className="flex items-center gap-3">
          <Button
            disabled={disabled || !hasConfigChanged}
            onClick={() =>
              setKeyConfigQuery.mutate(
                indices.map((index) => ({ index, config: userConfig })),
              )
            }
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

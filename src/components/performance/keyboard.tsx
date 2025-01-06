"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { displayDistance } from "@/lib/display-integer"
import { KeyConfig, KeyMode } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"
import { useQuery } from "@tanstack/react-query"
import { useConfiguratorState } from "../configurator-state-provider"
import { KeyboardLayout } from "../keyboard-layout"
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
          <p>{displayDistance(config.actuationDistance)}</p>
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
    performance: { indices, setIndices },
  } = useConfiguratorState()

  const { status: keyConfigStatus, data: keyConfig } = useQuery({
    queryKey: [device, "configurator", "keyConfig"],
    queryFn: device.getKeyConfig,
  })

  if (keyConfigStatus !== "success") {
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
                className="card toggle-item keycode size-full p-1 text-xs"
              >
                <PerformanceKeyConfig keyConfig={keyConfig[profileNum][i]} />
              </ToggleGroupItem>
            </div>
          )
        }}
      />
    </ToggleGroup>
  )
}

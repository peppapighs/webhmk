"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { useConfiguratorState } from "./configurator-state-provider"

export function ProfileSelector() {
  const { metadata } = useKeyboardDevice()

  const { profileNum, setProfileNum } = useConfiguratorState()

  return (
    <RadioGroup
      defaultValue="0"
      value={`${profileNum}`}
      onValueChange={(value) => setProfileNum(Number(value))}
      className="flex w-full flex-col gap-2 text-sm"
    >
      {[...Array(metadata.numProfiles)].map((_, i) => (
        <RadioGroupItem
          key={i}
          value={`${i}`}
          className="card radio-item h-8 w-full px-2"
        >
          Profile {i}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

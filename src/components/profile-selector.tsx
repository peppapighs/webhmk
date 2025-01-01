"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"

interface IProfileSelectorProps {
  device: KeyboardDevice
}

export function ProfileSelector({
  device: { metadata },
}: IProfileSelectorProps) {
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
          className="radio-item h-8 w-full px-2"
        >
          Profile {i}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

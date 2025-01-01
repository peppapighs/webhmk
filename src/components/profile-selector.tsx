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
  const { setProfileNum } = useConfiguratorState()

  return (
    <RadioGroup
      defaultValue="0"
      onValueChange={(value) => setProfileNum(Number(value))}
      className="flex w-full flex-col gap-2 text-sm"
    >
      {[...Array(metadata.numProfiles)].map((_, i) => (
        <RadioGroupItem
          key={i}
          value={`${i}`}
          className="h-8 w-full rounded-lg border bg-background px-2 font-normal text-foreground hover:bg-accent hover:text-accent-foreground data-[state=checked]:bg-accent data-[state=checked]:font-medium data-[state=checked]:text-accent-foreground"
        >
          Profile {i}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}

import { keycodeToMetadata, renderableKeycodes } from "@/lib/keycodes"
import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeMetadata } from "@/types/keycodes"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

interface IRemapKeycodes {
  device: KeyboardDevice
}

export function RemapKeycodes({ device }: IRemapKeycodes) {
  const groupedKeycodes = renderableKeycodes(device.metadata)
    .map((keycode) => keycodeToMetadata(keycode))
    .reduce(
      (acc, keycode) => {
        const category = keycode.category
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(keycode)
        return acc
      },
      {} as Record<string, KeycodeMetadata[]>,
    )

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {Object.entries(groupedKeycodes).map(([category, keycodes]) => (
        <div key={category} className="flex flex-col">
          <div className="flex items-center pl-1">
            <Label
              htmlFor={`category-${category}`}
              className="text-lg font-bold"
            >
              {category}
            </Label>
          </div>
          <div className="mt-2 grid min-w-max grid-cols-12">
            {keycodes.map((keycode, index) => (
              <div key={index} className="h-16 w-16 p-0.5">
                <Button
                  className="size-full overflow-hidden whitespace-normal p-1 text-center"
                  variant="outline"
                >
                  {keycode.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

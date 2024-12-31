import { IKeyboard } from '@/types/keyboard'
import { useApp } from '@/hooks/useApp'
import Keyboard from './Keyboard'
import { getKeycodeMetadata } from '@/constants/keycodes'
import { Toggle } from './ui/toggle'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

interface IRemapProps {
  keyboard: IKeyboard
}

export default function Remap({ keyboard }: IRemapProps) {
  const { keymap } = keyboard

  const { profile, layer, index, setLayer, setIndex } = useApp()

  return (
    <main className="flex h-full flex-col">
      <ScrollArea className="border-b">
        <div className="flex flex-col items-center p-4">
          <div className="flex min-w-max gap-4">
            <Keyboard
              keyboard={keyboard}
              elt={(i) => (
                <div className="size-full p-1">
                  <Toggle
                    className="size-full break-all"
                    variant="outline"
                    pressed={index === i}
                    onPressedChange={(pressed) => setIndex(pressed ? i : null)}
                  >
                    {getKeycodeMetadata(keymap[profile][layer][i]).name}
                  </Toggle>
                </div>
              )}
            />
            <div className="flex flex-col gap-4 py-1">
              {[...Array(keyboard.metadata.numLayers)].map((_, i) => (
                <Toggle
                  key={i}
                  variant="outline"
                  size="lg"
                  pressed={layer === i}
                  onPressedChange={(pressed) => pressed && setLayer(i)}
                >
                  Layer {i}
                </Toggle>
              ))}
            </div>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="flex-1">
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  )
}

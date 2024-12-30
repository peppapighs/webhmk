import { IKeyboard } from '@/types/keyboard'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from './ui/resizable'
import { useApp } from '@/hooks/useApp'
import Keyboard from './Keyboard'
import { getKeycodeMetadata } from '@/constants/keycodes'
import { useEffect } from 'react'
import { Toggle } from './ui/toggle'

interface IRemapProps {
  keyboard: IKeyboard
}

export default function Remap({ keyboard }: IRemapProps) {
  const { keymap } = keyboard

  const { profile, layer, index, setLayer, setIndex } = useApp()

  useEffect(() => {
    console.log(keyboard.metadata.numLayers)
  }, [keyboard])

  return (
    <main className="h-full">
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel
          minSize={25}
          defaultSize={60}
          style={{ overflow: 'auto' }}
        >
          <div className="flex flex-col">
            <div className="mx-auto flex flex-col gap-4 px-3 py-4">
              <Keyboard
                keyboard={keyboard}
                size="sm"
                elt={(i) => (
                  <div className="size-full p-1">
                    <Toggle
                      className="size-full break-all"
                      variant="outline"
                      pressed={index === i}
                      onPressedChange={(pressed) =>
                        setIndex(pressed ? i : null)
                      }
                    >
                      {getKeycodeMetadata(keymap[profile][layer][i]).name}
                    </Toggle>
                  </div>
                )}
              />
              <div className="flex items-center gap-4 pl-1">
                {[...Array(keyboard.metadata.numLayers)].map((_, i) => (
                  <Toggle
                    key={i}
                    variant="outline"
                    size="lg"
                    pressed={layer === i}
                    onPressedChange={(pressed) => pressed && setLayer(i)}
                  >
                    Layer {i + 1}
                  </Toggle>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          minSize={25}
          collapsible
          style={{ overflow: 'auto' }}
        ></ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}

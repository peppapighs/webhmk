import { KeyboardDevice } from "@/types/keyboard-device"
import { TabsContent } from "@radix-ui/react-tabs"
import { Remap } from "./remap"
import { Sidebar } from "./sidebar"

interface IConfiguratorProps {
  device: KeyboardDevice
}

export function Configurator({ device }: IConfiguratorProps) {
  return (
    <div className="grid w-full flex-1 grid-cols-[230px_minmax(0,1fr)] divide-x">
      <aside className="h-[calc(100vh-3.5rem-1px)] w-full">
        <Sidebar device={device} />
      </aside>
      <div className="flex h-[calc(100vh-3.5rem-1px)] w-full flex-col">
        <TabsContent value="remap" asChild>
          <Remap device={device} />
        </TabsContent>
      </div>
    </div>
  )
}

import { KeyboardDevice } from "@/types/keyboard-device"
import { TabsContent } from "@radix-ui/react-tabs"
import { Remap } from "./remap"
import { Sidebar } from "./sidebar"
import { SiteHeader } from "./site-header"
import { Tabs } from "./ui/tabs"

interface IConfiguratorProps {
  device: KeyboardDevice
}

export function Configurator({ device }: IConfiguratorProps) {
  return (
    <Tabs defaultValue="remap" asChild>
      <div className="flex flex-1 flex-col divide-y">
        <SiteHeader />
        <main className="mx-auto grid w-full max-w-[1800px] grid-cols-[230px_minmax(0,1fr)] divide-x min-[1800px]:border-x">
          <aside className="h-[calc(100vh-3.5rem-1px)] w-full">
            <Sidebar device={device} />
          </aside>
          <div className="flex h-[calc(100vh-3.5rem-1px)] w-full flex-col">
            <TabsContent value="remap" asChild>
              <Remap device={device} />
            </TabsContent>
          </div>
        </main>
      </div>
    </Tabs>
  )
}

import { IKeyboard } from '@/types/keyboard'
import Header from './Header'
import { Tabs, TabsContent } from './ui/tabs'
import Remap from './Remap'
import Sidebar from './Sidebar'

interface IConfiguratorProps {
  keyboard: IKeyboard
}

export default function Configurator({ keyboard }: IConfiguratorProps) {
  return (
    <div className="flex flex-1 flex-col">
      <Tabs defaultValue="remap">
        <Header />
        <div className="mx-auto grid w-full max-w-[1800px] flex-1 grid-cols-[240px_minmax(0,1fr)] min-[1800px]:border-x">
          <aside className="sticky top-14 z-30 h-[calc(100vh-3.5rem)] w-full shrink-0 border-r">
            <div className="h-full overflow-auto border-t p-4">
              <Sidebar keyboard={keyboard} />
            </div>
          </aside>
          <div className="flex flex-col border-t">
            <TabsContent className="mt-0 flex-1" value="remap">
              <Remap keyboard={keyboard} />
            </TabsContent>
            <TabsContent
              className="mt-0 flex-1"
              value="performance"
            ></TabsContent>
            <TabsContent className="mt-0 flex-1" value="advanced"></TabsContent>
            <TabsContent className="mt-0 flex-1" value="debug"></TabsContent>
            <TabsContent className="mt-0 flex-1" value="settings"></TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

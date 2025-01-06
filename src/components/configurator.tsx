import { TabsContent } from "@radix-ui/react-tabs"
import { DebugTab } from "./debug/debug-tab"
import { PerformanceTab } from "./performance/performance-tab"
import { RemapTab } from "./remap/remap-tab"
import { Sidebar } from "./sidebar"

export function Configurator() {
  return (
    <div className="grid w-full flex-1 grid-cols-[230px_minmax(0,1fr)] divide-x">
      <aside className="h-[calc(100vh-3.5rem-1px)] w-full">
        <Sidebar />
      </aside>
      <div className="flex h-[calc(100vh-3.5rem-1px)] w-full flex-col">
        <TabsContent value="remap" asChild>
          <RemapTab />
        </TabsContent>
        <TabsContent value="performance" asChild>
          <PerformanceTab />
        </TabsContent>
        <TabsContent value="debug" asChild>
          <DebugTab />
        </TabsContent>
      </div>
    </div>
  )
}

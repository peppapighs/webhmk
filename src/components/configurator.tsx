import { Sidebar } from "./sidebar"
import { SiteHeader } from "./site-header"

export function Configurator() {
  return (
    <div className="flex flex-1 flex-col divide-y">
      <SiteHeader />
      <main className="mx-auto grid w-full max-w-[1800px] grid-cols-[220px_minmax(0,1fr)] divide-x min-[1800px]:border-x">
        <aside className="h-[calc(100vh-3.5rem-1px)] w-full">
          <Sidebar />
        </aside>
        <div className="flex h-[calc(100vh-3.5rem-1px)] w-full flex-col"></div>
      </main>
    </div>
  )
}

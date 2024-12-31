import { SiteHeader } from "./site-header"

export function Configurator() {
  return (
    <div className="flex flex-1 flex-col divide-y">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-[1800px] flex-1 divide-x min-[1800px]:border-x"></div>
      </main>
    </div>
  )
}

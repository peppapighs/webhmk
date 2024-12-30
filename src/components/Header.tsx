import Link from 'next/link'
import ModeSwitcher from './ModeSwitcher'
import { TabsList, TabsTrigger } from './ui/tabs'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto max-w-[1800px] min-[1800px]:border-x">
        <div className="flex h-14 items-center justify-between gap-6 px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-6">
            <Link href="/">
              <h1 className="text-xl font-extrabold tracking-tight">WEBHMK</h1>
            </Link>
            <div className="flex flex-1 items-center justify-center">
              <TabsList>
                <TabsTrigger value="remap">Remap</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
                <TabsTrigger value="debug">Debug</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <ModeSwitcher />
        </div>
      </div>
    </header>
  )
}

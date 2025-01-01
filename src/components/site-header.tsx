import Link from "next/link"
import React from "react"
import { ThemeSwitcher } from "./theme-switcher"
import { TabsList, TabsTrigger } from "./ui/tabs"

export function SiteHeader() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-14 max-w-[1800px] items-center gap-6 px-6 min-[1800px]:border-x">
        <Link href="/" replace>
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
        <ThemeSwitcher />
      </div>
    </header>
  )
}

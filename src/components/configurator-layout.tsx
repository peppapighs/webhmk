/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use client"

import Link from "next/link"
import { useConfiguratorState } from "./configurator-state-provider"
import { ThemeSwitcher } from "./theme-switcher"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

interface IConfiguratorLayoutProps {
  hideTabs?: boolean
  children?: React.ReactNode
}

export function ConfiguratorLayout({
  hideTabs,
  children,
}: IConfiguratorLayoutProps) {
  const { tab, setTab } = useConfiguratorState()

  return (
    <Tabs value={tab} onValueChange={(tab) => setTab(tab)} asChild>
      <div className="flex flex-1 flex-col divide-y">
        <header className="w-full bg-background">
          <div className="mx-auto flex h-14 max-w-[1800px] items-center gap-6 px-6 min-[1800px]:border-x">
            <Link href="/" replace>
              <h1 className="text-xl font-extrabold tracking-tight">WEBHMK</h1>
            </Link>
            <div className="flex flex-1 items-center justify-center">
              {!hideTabs && (
                <TabsList>
                  <TabsTrigger value="remap">Remap</TabsTrigger>
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="dynamic-keystroke">
                    Dynamic Keystroke
                  </TabsTrigger>
                  <TabsTrigger value="debug">Debug</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              )}
            </div>
            <ThemeSwitcher />
          </div>
        </header>
        <div className="flex w-full flex-1 flex-col">
          <main className="mx-auto flex w-full max-w-[1800px] flex-1 flex-col min-[1800px]:border-x">
            {children}
          </main>
        </div>
      </div>
    </Tabs>
  )
}

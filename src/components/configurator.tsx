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

import { useResetDevice } from "@/hooks/use-reset-device"
import { TabsContent } from "@radix-ui/react-tabs"
import { useEffect } from "react"
import { useAppKeyboardDevice } from "./app-keyboard-provider"
import { DebugTab } from "./debug/debug-tab"
import { PerformanceTab } from "./performance/performance-tab"
import { RemapTab } from "./remap/remap-tab"
import { Sidebar } from "./sidebar"

export function Configurator() {
  const device = useAppKeyboardDevice()

  const resetDeviceQuery = useResetDevice()

  useEffect(() => {
    if (device.status === "connected") {
      const onDeviceDisconnect = async (e: USBConnectionEvent) => {
        if (e.device === device.usbDevice) {
          resetDeviceQuery.mutate()
        }
      }
      navigator.usb.addEventListener("disconnect", onDeviceDisconnect)
      return () =>
        navigator.usb.removeEventListener("disconnect", onDeviceDisconnect)
    }
  }, [device, resetDeviceQuery])

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

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

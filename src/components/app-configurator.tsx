"use client"

import { useAppKeyboard } from "@/hooks/use-app-keyboard"
import { useResetDevice } from "@/hooks/use-reset-device"
import { useEffect } from "react"
import { Configurator } from "./configurator"
import { ConfiguratorLayout } from "./configurator-layout"
import { Button } from "./ui/button"

export function AppConfigurator() {
  const device = useAppKeyboard()
  const resetDevice = useResetDevice(device.reset)

  useEffect(() => {
    const onDeviceDisconnect = async () => {
      if (device.status === "connected") {
        resetDevice.mutate()
      }
    }

    const cleanup = () =>
      navigator.usb.removeEventListener("disconnect", onDeviceDisconnect)

    if (device.status === "connected") {
      navigator.usb.addEventListener("disconnect", onDeviceDisconnect)
      return cleanup
    } else {
      cleanup()
    }
  }, [device, resetDevice])

  return (
    <ConfiguratorLayout hideTabs={device.status === "disconnected"}>
      {device.status === "connected" ? (
        <Configurator device={device} />
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center p-12">
          <div className="grid grid-flow-row gap-4">
            <Button size="lg" onClick={() => device.connect()}>
              Connect Device
            </Button>
            <Button variant="outline" size="lg">
              Upgrade Firmware
            </Button>
          </div>
        </div>
      )}
    </ConfiguratorLayout>
  )
}

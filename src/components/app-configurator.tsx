"use client"

import { KeyboardDeviceContext } from "@/hooks/use-keyboard-device"
import { useResetDevice } from "@/hooks/use-reset-device"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useEffect } from "react"
import { useAppKeyboardDevice } from "./app-keyboard-provider"
import { Configurator } from "./configurator"
import { ConfiguratorLayout } from "./configurator-layout"
import { Button } from "./ui/button"

interface IConfiguratorMainProps {
  device: KeyboardDevice
}

const ConfiguratorMain = ({ device }: IConfiguratorMainProps) => {
  const resetDeviceQuery = useResetDevice()

  useEffect(() => {
    const onDeviceDisconnect = async () => {
      resetDeviceQuery.mutate()
    }

    navigator.usb.addEventListener("disconnect", onDeviceDisconnect)
    return () =>
      navigator.usb.removeEventListener("disconnect", onDeviceDisconnect)
  }, [resetDeviceQuery])

  return (
    <KeyboardDeviceContext.Provider value={device}>
      <Configurator />
    </KeyboardDeviceContext.Provider>
  )
}

export function AppConfigurator() {
  const device = useAppKeyboardDevice()

  return (
    <ConfiguratorLayout hideTabs={device.status === "disconnected"}>
      {device.status === "connected" ? (
        <ConfiguratorMain device={device} />
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

"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useResetDevice } from "@/hooks/use-reset-device"
import { DeviceInfo } from "./device-info"
import { ProfileSelector } from "./profile-selector"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export function Sidebar() {
  const device = useKeyboardDevice()
  const resetDeviceQuery = useResetDevice(device)

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Device</CardTitle>
          </CardHeader>
          <CardContent>
            <DeviceInfo />
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              onClick={() => resetDeviceQuery.mutate()}
              className="w-full"
            >
              Exit Configurator
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardFooter>
            <ProfileSelector />
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  )
}

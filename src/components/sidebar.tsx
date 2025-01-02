"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { KeyboardDevice } from "@/types/keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeviceInfo } from "./device-info"
import { ProfileSelector } from "./profile-selector"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

interface ISidebarProps {
  device: KeyboardDevice
}

export function Sidebar({ device }: ISidebarProps) {
  const { reset } = useConfiguratorState()

  const queryClient = useQueryClient()

  const resetDevice = useMutation({
    mutationFn: () => device.reset(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configurator"] })
      reset()
    },
  })

  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Device</CardTitle>
          </CardHeader>
          <CardContent>
            <DeviceInfo device={device} />
          </CardContent>
          <CardFooter>
            <Button
              variant="destructive"
              onClick={() => resetDevice.mutate()}
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
            <ProfileSelector device={device} />
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  )
}

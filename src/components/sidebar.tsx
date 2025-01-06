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
import { DeviceInfo } from "./device-info"
import { ProfileSelector } from "./profile-selector"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export function Sidebar() {
  const resetDeviceQuery = useResetDevice()

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

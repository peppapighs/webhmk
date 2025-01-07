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

import { SWITCH_METADATA } from "@/constants/switches"
import { TAP_HOLD_METADATA } from "@/constants/tap-hold"
import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useSwitchId } from "@/hooks/use-switch-id"
import { useTapHold } from "@/hooks/use-tap-hold"
import { displayDistance } from "@/lib/display-integer"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Button, buttonVariants } from "../ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

export function SettingsTab() {
  const device = useKeyboardDevice()

  const { status: switchIdStatus, switchId, setSwitchIdQuery } = useSwitchId()
  const { status: tapHoldStatus, tapHold, setTapHoldQuery } = useTapHold()

  const queryClient = useQueryClient()

  const rebootQuery = useMutation({
    mutationFn: device.reboot,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device.id, "configurator"] })
    },
  })
  const bootloaderQuery = useMutation({
    mutationFn: device.bootloader,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device.id, "configurator"] })
    },
  })
  const factoryResetQuery = useMutation({
    mutationFn: device.factoryReset,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [device.id, "configurator"] })
    },
  })

  return (
    <ScrollArea className="size-full flex-1">
      <div className="mx-auto max-w-4xl p-6">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Switch Selection</CardTitle>
              <CardDescription>
                Select the magnetic switches that are installed in your
                keyboard.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-4">
              <Select
                disabled={switchIdStatus !== "success"}
                value={`${switchIdStatus === "success" ? switchId : ""}`}
                onValueChange={(value) =>
                  setSwitchIdQuery.mutate(Number(value))
                }
              >
                <SelectTrigger className="w-72">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SWITCH_METADATA.map(({ id, name, distance }) => (
                    <SelectItem key={id} value={`${id}`}>
                      {name} ({displayDistance(distance)}mm)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tap-Hold Behavior</CardTitle>
              <CardDescription>
                Select how the hold action of a Tap-Hold key behaves.
                &ldquo;Default&rdquo; will register the hold action after the
                tapping term expires. &ldquo;Hold On Other Key Press&rdquo; will
                register the hold action after the tapping term expires or when
                another key is pressed.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-4">
              <Select
                disabled={tapHoldStatus !== "success"}
                value={`${tapHoldStatus === "success" ? tapHold : ""}`}
                onValueChange={(value) => setTapHoldQuery.mutate(Number(value))}
              >
                <SelectTrigger className="w-72">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TAP_HOLD_METADATA.map(({ id, name }) => (
                    <SelectItem key={id} value={`${id}`}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Device Actions</CardTitle>
              <CardDescription>
                Perform a software reset or enter bootloader mode, if bootloader
                is enabled in the firmware. Bootloader mode allows you to flash
                new firmware to the device through the DFU interface.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-4">
              <Button onClick={() => rebootQuery.mutate()}>
                Software Reset
              </Button>
              <Button onClick={() => bootloaderQuery.mutate()}>
                Enter Bootloader
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Factory Reset</CardTitle>
              <CardDescription>
                Perform a factory reset to restore the device to its default
                defined in the firmware.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Factory Reset</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      All changes made to the device will be lost. This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => factoryResetQuery.mutate()}
                      className={buttonVariants({ variant: "destructive" })}
                    >
                      Proceed
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

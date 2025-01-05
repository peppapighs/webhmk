"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { KeyTesterDown, KeyTesterProvider, KeyTesterUp } from "../key-tester"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { DebugHeader } from "./header"
import { DebugKeyboard } from "./keyboard"

export function DebugTab() {
  const device = useKeyboardDevice()

  const queryClient = useQueryClient()

  const recalibrateQuery = useMutation({
    mutationFn: device.recalibrate,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [device, "configurator", "switchDebug"],
      })
    },
  })

  return (
    <div className="flex h-full max-h-full flex-1 flex-col divide-y">
      <ScrollArea className="max-h-[60%] w-full">
        <div className="flex w-full flex-col">
          <DebugHeader />
          <div className="flex flex-col items-center p-6 pt-0">
            <DebugKeyboard />
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <ScrollArea className="w-full flex-1">
        <div className="mx-auto flex w-full max-w-7xl gap-4">
          <div className="flex w-full min-w-96 flex-1 flex-col gap-6 p-6">
            <div className="flex w-full items-center gap-6">
              <div className="flex w-full flex-col">
                <Label
                  htmlFor="recalibrate"
                  className="whitespace-nowrap text-lg font-bold"
                >
                  Recalibrate
                </Label>
                <p className="mt-2 max-w-prose text-muted-foreground">
                  Recalibration will erase and resample the stored minimum and
                  maximum ADC values for each switch. Ensure that all keys are
                  fully released before recalibrating, and press each key down
                  completely once calibration is finished.
                </p>
              </div>
              <Button
                id="recalibrate"
                onClick={() => recalibrateQuery.mutate()}
              >
                Recalibrate
              </Button>
            </div>
          </div>
          <KeyTesterProvider>
            <div className="grid w-[400px] grid-rows-2 gap-4 p-6">
              <div className="flex flex-col">
                <Label htmlFor="key-tester-down" className="font-bold">
                  Pressed keys
                </Label>
                <KeyTesterDown id="key-tester-down" className="mt-2 h-32" />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="key-tester-up" className="font-bold">
                  Released keys
                </Label>
                <KeyTesterUp id="key-tester-up" className="mt-2 h-32" />
              </div>
            </div>
          </KeyTesterProvider>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

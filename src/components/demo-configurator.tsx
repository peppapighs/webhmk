"use client"

import { useDemoKeyboard } from "@/hooks/useDemoKeyboard"
import { Configurator } from "./configurator"

export function DemoConfigurator() {
  const device = useDemoKeyboard()

  return <Configurator device={device} />
}

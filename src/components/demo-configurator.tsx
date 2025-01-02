"use client"

import { useDemoKeyboard } from "@/hooks/use-demo-keyboard"
import { Configurator } from "./configurator"
import { ConfiguratorLayout } from "./configurator-layout"

export function DemoConfigurator() {
  const device = useDemoKeyboard()

  return (
    <ConfiguratorLayout>
      <Configurator device={device} />
    </ConfiguratorLayout>
  )
}

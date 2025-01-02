"use client"

import { useConfiguratorState } from "@/hooks/use-configurator-state"
import { useDemoKeyboard } from "@/hooks/use-demo-keyboard"
import { useLayoutEffect } from "react"
import { Configurator } from "./configurator"
import { ConfiguratorLayout } from "./configurator-layout"

export function DemoConfigurator() {
  const device = useDemoKeyboard()
  const { reset } = useConfiguratorState()

  useLayoutEffect(reset, [reset])

  return (
    <ConfiguratorLayout>
      <Configurator device={device} />
    </ConfiguratorLayout>
  )
}

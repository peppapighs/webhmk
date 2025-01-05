import { ConfiguratorStateProvider } from "@/components/configurator-state-provider"
import { DemoConfigurator } from "@/components/demo-configurator"
import { DemoKeyboardProvider } from "@/components/demo-keyboard-provider"

export default function Demo() {
  return (
    <ConfiguratorStateProvider>
      <DemoKeyboardProvider>
        <DemoConfigurator />
      </DemoKeyboardProvider>
    </ConfiguratorStateProvider>
  )
}

import { AppConfigurator } from "@/components/app-configurator"
import { AppKeyboardProvider } from "@/components/app-keyboard-provider"
import { ConfiguratorStateProvider } from "@/components/configurator-state-provider"

export default function App() {
  return (
    <ConfiguratorStateProvider>
      <AppKeyboardProvider>
        <AppConfigurator />
      </AppKeyboardProvider>
    </ConfiguratorStateProvider>
  )
}

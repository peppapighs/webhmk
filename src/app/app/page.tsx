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

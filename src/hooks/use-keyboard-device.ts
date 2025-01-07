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

import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice, KeyboardDeviceState } from "@/types/keyboard-device"
import { createContext, useContext } from "react"

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: KeyboardDeviceState = {
  id: "UNKNOWN",
  metadata: DEMO_KEYBOARD,
}

export const KeyboardDeviceContext = createContext<KeyboardDevice>({
  ...initialState,
  async reset() {},
  async firmwareVersion() {
    return 0
  },
  async bootloader() {},
  async reboot() {},
  async factoryReset() {},
  async recalibrate() {},
  async getSwitchDebug() {
    return { adcValues: [], distances: [] }
  },
  async getSwitchId() {
    return 0
  },
  async setSwitchId() {},
  async getTapHold() {
    return 0
  },
  async setTapHold() {},
  async getKeyConfig() {
    return []
  },
  async setKeyConfig() {},
  async getKeymap() {
    return []
  },
  async setKeymap() {},
  async getDynamicKeystrokeConfig() {
    return []
  },
  async setDynamicKeystrokeConfig() {},
})

export const useKeyboardDevice = () => useContext(KeyboardDeviceContext)

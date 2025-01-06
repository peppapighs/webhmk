import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice, KeyboardDeviceState } from "@/types/keyboard-device"
import { createContext, useContext } from "react"

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: KeyboardDeviceState = {
  metadata: DEMO_KEYBOARD,
}

export const KeyboardDeviceContext = createContext<KeyboardDevice>({
  ...initialState,
  async reset() {},
  async reboot() {},
  async recalibrate() {},
  async getSwitchDebug() {
    return { adcValues: [], distances: [] }
  },
  async getSwitchId() {
    return 0
  },
  async setSwitchId() {},
  async getKeyConfig() {
    return []
  },
  async setKeyConfig() {},
  async getKeymap() {
    return []
  },
  async setKeymap() {},
})

export const useKeyboardDevice = () => useContext(KeyboardDeviceContext)

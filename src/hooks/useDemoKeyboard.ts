import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice, KeyboardDeviceState } from "@/types/keyboard-device"
import { create } from "zustand"

const initialState: KeyboardDeviceState = {
  metadata: KEYBOARD_METADATA[0],
}

export const useDemoKeyboard = create<KeyboardDevice>((set) => ({
  ...initialState,

  async reset() {
    set(initialState)
  },
}))

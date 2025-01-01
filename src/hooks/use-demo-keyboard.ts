import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice, KeyboardDeviceState } from "@/types/keyboard-device"
import { create } from "zustand"

type DemoKeyboardDeviceState = {
  keymap: number[][][]
}

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: KeyboardDeviceState & DemoKeyboardDeviceState = {
  metadata: DEMO_KEYBOARD,
  keymap: Array(DEMO_KEYBOARD.numProfiles).fill(DEMO_KEYBOARD.defaultKeymap),
}

export const useDemoKeyboard = create<KeyboardDevice & DemoKeyboardDeviceState>(
  (set, get) => ({
    ...initialState,

    async reset() {
      set(initialState)
    },

    async getKeymap() {
      return get().keymap
    },

    async setKeymap(queries) {
      const keymap = structuredClone(get().keymap)
      for (const { profile, layer, index, keycode } of queries) {
        keymap[profile][layer][index] = keycode
      }
      set({ keymap })
    },
  }),
)

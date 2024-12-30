import { create } from 'zustand'

import { KEYBOARDS } from '@/constants/keyboards'
import {
  IDKSConfig,
  IKeyConfig,
  IKeyboard,
  KeyMode,
  SwitchId,
  TapHoldConfig,
} from '@/types/keyboard'
import { Keycode, LT, PTO } from '@/constants/keycodes'

const GAUSS64 = KEYBOARDS[0]

export const useDemoKeyboard = create<IKeyboard>((set, get) => ({
  metadata: GAUSS64,
  swId: SwitchId.SW_GATERON_MAGNETIC_JADE,
  tapHold: TapHoldConfig.TAP_HOLD_HOLD_ON_OTHER_KEY_PRESS,
  keyConfig: Array(GAUSS64.numProfiles).fill(
    Array(GAUSS64.numKeys).fill({
      tappingTerm: 200,
      config: {
        mode: KeyMode.KEY_MODE_NORMAL,
        actuationDistance: 40,
        bottomOutDistance: 68,
      },
    }),
  ),
  keymap: Array(GAUSS64.numProfiles).fill([
    [
      Keycode.KC_GRAVE,
      Keycode.KC_1,
      Keycode.KC_2,
      Keycode.KC_3,
      Keycode.KC_4,
      Keycode.KC_5,
      Keycode.KC_6,
      Keycode.KC_7,
      Keycode.KC_8,
      Keycode.KC_9,
      Keycode.KC_0,
      Keycode.KC_MINUS,
      Keycode.KC_EQUAL,
      Keycode.KC_BACKSPACE,
      Keycode.KC_TAB,
      Keycode.KC_Q,
      Keycode.KC_W,
      Keycode.KC_E,
      Keycode.KC_R,
      Keycode.KC_T,
      Keycode.KC_Y,
      Keycode.KC_U,
      Keycode.KC_I,
      Keycode.KC_O,
      Keycode.KC_P,
      Keycode.KC_LEFT_BRACKET,
      Keycode.KC_RIGHT_BRACKET,
      Keycode.KC_BACKSLASH,
      Keycode.KC_ESCAPE,
      Keycode.KC_A,
      Keycode.KC_S,
      Keycode.KC_D,
      Keycode.KC_F,
      Keycode.KC_G,
      Keycode.KC_H,
      Keycode.KC_J,
      Keycode.KC_K,
      Keycode.KC_L,
      Keycode.KC_SEMICOLON,
      Keycode.KC_QUOTE,
      Keycode.KC_ENTER,
      Keycode.KC_AUDIO_VOL_UP,
      Keycode.KC_LEFT_SHIFT,
      Keycode.KC_Z,
      Keycode.KC_X,
      Keycode.KC_C,
      Keycode.KC_V,
      Keycode.KC_B,
      Keycode.KC_N,
      Keycode.KC_M,
      Keycode.KC_COMMA,
      Keycode.KC_DOT,
      Keycode.KC_SLASH,
      Keycode.KC_RIGHT_SHIFT,
      Keycode.KC_UP,
      LT(1, Keycode.KC_AUDIO_VOL_DOWN),
      Keycode.KC_LEFT_CTRL,
      Keycode.KC_LEFT_GUI,
      Keycode.KC_LEFT_ALT,
      Keycode.KC_SPACE,
      Keycode.KC_RIGHT_ALT,
      Keycode.KC_LEFT,
      Keycode.KC_DOWN,
      Keycode.KC_RIGHT,
    ],
    [
      Keycode.KC_TRANSPARENT,
      Keycode.KC_F1,
      Keycode.KC_F2,
      Keycode.KC_F3,
      Keycode.KC_F4,
      Keycode.KC_F5,
      Keycode.KC_F6,
      Keycode.KC_F7,
      Keycode.KC_F8,
      Keycode.KC_F9,
      Keycode.KC_F10,
      Keycode.KC_F11,
      Keycode.KC_F12,
      Keycode.KC_DELETE,
      Keycode.KC_TRANSPARENT,
      PTO(0),
      PTO(1),
      PTO(2),
      PTO(3),
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.SP_MAGIC_BOOTLOADER,
      Keycode.SP_MAGIC_REBOOT,
      Keycode.SP_MAGIC_FACTORY_RESET,
      Keycode.SP_MAGIC_RECALIBRATE,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
      Keycode.KC_TRANSPARENT,
    ],
    Array(GAUSS64.numKeys).fill(Keycode.KC_TRANSPARENT),
    Array(GAUSS64.numKeys).fill(Keycode.KC_TRANSPARENT),
  ]),
  dksConfig: Array(GAUSS64.numProfiles).fill(
    Array(GAUSS64.numDksConfig).fill({
      keycode: Array(6).fill(Keycode.KC_NO),
      mask: Array(6).fill(0),
    }),
  ),

  async fetchSwitchId() {},

  async setSwitchId(swId: SwitchId) {
    set({ swId })
  },

  async fetchTapHoldConfig() {},

  async setTapHoldConfig(tapHold: TapHoldConfig) {
    set({ tapHold })
  },

  async fetchKeyConfig() {},

  async setKeyConfig(profile: number, index: number, config: IKeyConfig) {
    const keyConfig = get().keyConfig
    keyConfig[profile][index] = config

    set({ keyConfig })
  },

  async fetchKeymap() {},

  async setKeymap(
    profile: number,
    layer: number,
    index: number,
    keycode: number,
  ) {
    const keymap = get().keymap
    keymap[profile][layer][index] = keycode

    set({ keymap })
  },

  async fetchDksConfig() {},

  async setDksConfig(profile: number, index: number, config: IDKSConfig) {
    const dksConfig = get().dksConfig
    dksConfig[profile][index] = config

    set({ dksConfig })
  },

  async getSwitchDebug() {
    return Array(GAUSS64.numKeys).fill({
      adcValue: 0,
      distance: 0,
    })
  },
}))

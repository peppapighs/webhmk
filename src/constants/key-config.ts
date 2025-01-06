import { KeyConfig, KeyMode } from "@/types/keyboard-device"

export const DEFAULT_TAPPING_TERM = 200
export const DEFAULT_ACTUATION_DISTANCE = 40
export const DEFAULT_BOTTOM_OUT_DISTANCE = 60

export const DEFAULT_RT_DOWN_DISTANCE = 6
export const DEFAULT_RT_UP_DISTANCE = 6

export const DEFAULT_KEY_CONFIG: KeyConfig = {
  tappingTerm: DEFAULT_TAPPING_TERM,
  config: {
    mode: KeyMode.KEY_MODE_NORMAL,
    actuationDistance: DEFAULT_ACTUATION_DISTANCE,
    bottomOutDistance: DEFAULT_BOTTOM_OUT_DISTANCE,
  },
}

import { Keycode } from "@/types/keycodes"

// Modifier-Mask Macros
export const LCTL = (keycode: number) => keycode | Keycode.SP_MODS_CTRL
export const LSFT = (keycode: number) => keycode | Keycode.SP_MODS_SHIFT
export const LALT = (keycode: number) => keycode | Keycode.SP_MODS_ALT
export const LGUI = (keycode: number) => keycode | Keycode.SP_MODS_GUI
export const RCTL = (keycode: number) => LCTL(keycode) | 0x1000
export const RSFT = (keycode: number) => LSFT(keycode) | 0x1000
export const RALT = (keycode: number) => LALT(keycode) | 0x1000
export const RGUI = (keycode: number) => LGUI(keycode) | 0x1000

export const SP_MODS_GET_MODS = (keycode: number) =>
  ((keycode & 0x0f00) >> 8) << ((keycode & 0x1000) >> 10)
export const SP_MODS_GET_KEY = (keycode: number) => keycode & 0x00ff

// Modifier-Tap Macros
export const LCTL_T = (keycode: number) => keycode | Keycode.SP_MOD_TAP_CTRL
export const LSFT_T = (keycode: number) => keycode | Keycode.SP_MOD_TAP_SHIFT
export const LALT_T = (keycode: number) => keycode | Keycode.SP_MOD_TAP_ALT
export const LGUI_T = (keycode: number) => keycode | Keycode.SP_MOD_TAP_GUI
export const RCTL_T = (keycode: number) => LCTL_T(keycode) | 0x1000
export const RSFT_T = (keycode: number) => LSFT_T(keycode) | 0x1000
export const RALT_T = (keycode: number) => LALT_T(keycode) | 0x1000
export const RGUI_T = (keycode: number) => LGUI_T(keycode) | 0x1000

export const SP_MOD_TAP_GET_MODS = (keycode: number) =>
  ((keycode & 0x0f00) >> 8) << ((keycode & 0x1000) >> 10)
export const SP_MOD_TAP_GET_KEY = (keycode: number) => keycode & 0x00ff
export const SP_MOD_TAP_TO_MODS = (keycode: number) => keycode & 0x1f00

// Layer-Tap Macros
export const LT = (layer: number, keycode: number) =>
  keycode | Keycode.SP_LAYER_TAP | (layer << 8)

export const SP_LAYER_TAP_GET_LAYER = (keycode: number) =>
  (keycode & 0x0f00) >> 8
export const SP_LAYER_TAP_GET_KEY = (keycode: number) => keycode & 0x00ff
export const SP_LAYER_TAP_TO_MO = (keycode: number) =>
  ((keycode & 0x0f00) >> 8) | Keycode.SP_LAYER_MO

// Layer-Mod Macros
export const LCTL_LM = (layer: number) => layer | Keycode.SP_LAYER_MOD_CTRL
export const LSFT_LM = (layer: number) => layer | Keycode.SP_LAYER_MOD_SHIFT
export const LALT_LM = (layer: number) => layer | Keycode.SP_LAYER_MOD_ALT
export const LGUI_LM = (layer: number) => layer | Keycode.SP_LAYER_MOD_GUI
export const RCTL_LM = (layer: number) => LCTL_LM(layer) | 0x0100
export const RSFT_LM = (layer: number) => LSFT_LM(layer) | 0x0100
export const RALT_LM = (layer: number) => LALT_LM(layer) | 0x0100
export const RGUI_LM = (layer: number) => LGUI_LM(layer) | 0x0100

export const SP_LAYER_MOD_GET_LAYER = (keycode: number) => keycode & 0x000f
export const SP_LAYER_MOD_GET_MODS = (keycode: number) =>
  ((keycode & 0x00f0) >> 4) << ((keycode & 0x0100) >> 6)

// Layer Activation Macros
export const TO = (layer: number) => layer | Keycode.SP_LAYER_TO
export const SP_LAYER_TO_GET_LAYER = (keycode: number) => keycode & 0x000f

// Layer-Momentary Macros
export const MO = (layer: number) => layer | Keycode.SP_LAYER_MO
export const SP_LAYER_MO_GET_LAYER = (keycode: number) => keycode & 0x000f

// Layer-Default Macros
export const DF = (layer: number) => layer | Keycode.SP_LAYER_DEF
export const SP_LAYER_DEF_GET_LAYER = (keycode: number) => keycode & 0x000f

// Layer-Toggle Macros
export const TG = (layer: number) => layer | Keycode.SP_LAYER_TOGGLE
export const SP_LAYER_TOGGLE_GET_LAYER = (keycode: number) => keycode & 0x000f

// Profile Activation Macros
export const PTO = (profile: number) => profile | Keycode.SP_PROFILE_TO
export const SP_PROFILE_TO_GET_PROFILE = (keycode: number) => keycode & 0x000f

// Dynamic Keystroke Macros
export const DKS = (config: number) => config | Keycode.SP_DKS
export const SP_DKS_GET_CONFIG = (keycode: number) => keycode & 0x00ff

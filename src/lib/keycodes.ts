import {
  KEYCODE_METADATA,
  KEYCODE_METADATA_MAP,
} from "@/constants/keycode-metadata"
import { KeyboardMetadata } from "@/types/keyboard-metadata"
import { Keycode, KeycodeMetadata } from "@/types/keycodes"
import { displayUint16 } from "./display-integer"

export const IS_BASIC_KEYCODE = (keycode: number) =>
  keycode >= Keycode.KC_A && keycode <= Keycode.KC_EXSEL
export const IS_SYSTEM_KEYCODE = (keycode: number) =>
  keycode >= Keycode.KC_SYSTEM_POWER && keycode <= Keycode.KC_SYSTEM_WAKE
export const IS_CONSUMER_KEYCODE = (keycode: number) =>
  keycode >= Keycode.KC_AUDIO_MUTE && keycode <= Keycode.KC_LAUNCHPAD
export const IS_MODIFIER_KEYCODE = (keycode: number) =>
  keycode >= Keycode.KC_LEFT_CTRL && keycode <= Keycode.KC_RIGHT_GUI
export const IS_HID_KEYCODE = (keycode: number) =>
  keycode >= Keycode.KC_NO && keycode <= Keycode.KC_RIGHT_GUI

export const IS_MODS_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_MODS && keycode <= Keycode.SP_MODS_MAX
export const IS_MOD_TAP_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_MOD_TAP && keycode <= Keycode.SP_MOD_TAP_MAX
export const IS_LAYER_TAP_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_TAP && keycode <= Keycode.SP_LAYER_TAP_MAX
export const IS_LAYER_MOD_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_MOD && keycode <= Keycode.SP_LAYER_MOD_MAX
export const IS_LAYER_TO_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_TO && keycode <= Keycode.SP_LAYER_TO_MAX
export const IS_LAYER_MO_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_MO && keycode <= Keycode.SP_LAYER_MO_MAX
export const IS_LAYER_DEF_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_DEF && keycode <= Keycode.SP_LAYER_DEF_MAX
export const IS_LAYER_TOGGLE_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_LAYER_TOGGLE && keycode <= Keycode.SP_LAYER_TOGGLE_MAX

export const IS_PROFILE_TO_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_PROFILE_TO && keycode <= Keycode.SP_PROFILE_TO_MAX

export const IS_DKS_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_DKS && keycode <= Keycode.SP_DKS_MAX

export const IS_MAGIC_KEYCODE = (keycode: number) =>
  keycode >= Keycode.SP_MAGIC_BOOTLOADER &&
  keycode <= Keycode.SP_MAGIC_RECALIBRATE

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

export const keycodeToMetadata = (keycode: number): KeycodeMetadata => {
  if (keycode in KEYCODE_METADATA_MAP) {
    return KEYCODE_METADATA_MAP[keycode]
  } else if (IS_LAYER_TO_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_TO_GET_LAYER(keycode)
    return {
      name: `TO(${layerNum})`,
      description: `Activate layer ${layerNum} & deactivate all others`,
      keycode,
      keycodeNames: [`TO${layerNum}`],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_MO_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_MO_GET_LAYER(keycode)
    return {
      name: `MO(${layerNum})`,
      description: `Activate layer ${layerNum} until released`,
      keycode,
      keycodeNames: [`MO${layerNum}`],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_DEF_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_DEF_GET_LAYER(keycode)
    return {
      name: `DF(${layerNum})`,
      description: `Set default layer to ${layerNum}`,
      keycode,
      keycodeNames: [`DF${layerNum}`],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_TOGGLE_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_TOGGLE_GET_LAYER(keycode)
    return {
      name: `TG(${layerNum})`,
      description: `Toggle layer ${layerNum}`,
      keycode,
      keycodeNames: [`TG${layerNum}`],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_PROFILE_TO_KEYCODE(keycode)) {
    const profileNum = SP_PROFILE_TO_GET_PROFILE(keycode)
    return {
      name: `PTO(${profileNum})`,
      description: `Activate profile ${profileNum}`,
      keycode,
      keycodeNames: [`PTO${profileNum}`],
      uiCodes: [],
      category: "Profile",
    }
  } else if (IS_DKS_KEYCODE(keycode)) {
    const config = SP_DKS_GET_CONFIG(keycode)
    return {
      name: `DKS(${config})`,
      description: `Dynamic Keystroke ${config}`,
      keycode,
      keycodeNames: [`DKS${config}`],
      uiCodes: [],
      category: "Dynamic Keystroke",
    }
  } else {
    const hex = displayUint16(keycode)
    return {
      name: hex,
      description: `Unknown keycode: ${hex}`,
      keycode,
      keycodeNames: [],
      uiCodes: [],
      category: "Unknown",
    }
  }
}

export const renderableKeycodes = (keyboardMetadata: KeyboardMetadata) => {
  const keycodes = KEYCODE_METADATA.map((metadata) => metadata.keycode)

  for (let i = 0; i < keyboardMetadata.numLayers; i++) {
    keycodes.push(TO(i), MO(i), DF(i), TG(i))
  }
  for (let i = 0; i < keyboardMetadata.numProfiles; i++) {
    keycodes.push(PTO(i))
  }
  for (let i = 0; i < keyboardMetadata.numDksConfig; i++) {
    keycodes.push(DKS(i))
  }

  return keycodes
}

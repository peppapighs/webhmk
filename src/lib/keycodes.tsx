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
  } else if (IS_MODS_KEYCODE(keycode)) {
    const hidKeycode = SP_MODS_GET_KEY(keycode)
    return {
      ...keycodeToMetadata(hidKeycode),
      keycode,
      overlay: "MOD\nKEY",
    }
  } else if (IS_MOD_TAP_KEYCODE(keycode)) {
    const hidKeycode = SP_MOD_TAP_GET_KEY(keycode)
    return {
      ...keycodeToMetadata(hidKeycode),
      keycode,
      overlay: "MOD\nTAP",
    }
  } else if (IS_LAYER_TAP_KEYCODE(keycode)) {
    const hidKeycode = SP_LAYER_TAP_GET_KEY(keycode)
    return {
      ...keycodeToMetadata(hidKeycode),
      keycode,
      overlay: "LAYER\nTAP",
    }
  } else if (IS_LAYER_MOD_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_MOD_GET_LAYER(keycode)
    return {
      ...keycodeToMetadata(MO(layerNum)),
      keycode,
      overlay: "LAYER\nMOD",
    }
  } else if (IS_LAYER_TO_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_TO_GET_LAYER(keycode)
    const keycodeName = `TO(${layerNum})`
    return {
      name: keycodeName,
      description: `Activate layer ${layerNum} & deactivate all others`,
      keycode,
      keycodeNames: [keycodeName],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_MO_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_MO_GET_LAYER(keycode)
    const keycodeName = `MO(${layerNum})`
    return {
      name: keycodeName,
      description: `Activate layer ${layerNum} until released`,
      keycode,
      keycodeNames: [keycodeName],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_DEF_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_DEF_GET_LAYER(keycode)
    const keycodeName = `DF(${layerNum})`
    return {
      name: keycodeName,
      description: `Set default layer to ${layerNum}`,
      keycode,
      keycodeNames: [keycodeName],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_LAYER_TOGGLE_KEYCODE(keycode)) {
    const layerNum = SP_LAYER_TOGGLE_GET_LAYER(keycode)
    const keycodeName = `TG(${layerNum})`
    return {
      name: keycodeName,
      description: `Toggle layer ${layerNum}`,
      keycode,
      keycodeNames: [keycodeName],
      uiCodes: [],
      category: "Layer",
    }
  } else if (IS_PROFILE_TO_KEYCODE(keycode)) {
    const profileNum = SP_PROFILE_TO_GET_PROFILE(keycode)
    const keycodeName = `PTO(${profileNum})`
    return {
      name: keycodeName,
      description: `Activate profile ${profileNum}`,
      keycode,
      keycodeNames: [keycodeName],
      uiCodes: [],
      category: "Profile",
    }
  } else if (IS_DKS_KEYCODE(keycode)) {
    const config = SP_DKS_GET_CONFIG(keycode)
    const keycodeName = `DKS(${config})`
    return {
      name: keycodeName,
      description: `Dynamic Keystroke ${config}`,
      keycode,
      keycodeNames: [keycodeName],
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
    keycodes.push(TO(i))
  }
  for (let i = 0; i < keyboardMetadata.numLayers; i++) {
    keycodes.push(MO(i))
  }
  for (let i = 0; i < keyboardMetadata.numLayers; i++) {
    keycodes.push(DF(i))
  }
  for (let i = 0; i < keyboardMetadata.numLayers; i++) {
    keycodes.push(TG(i))
  }
  for (let i = 0; i < keyboardMetadata.numProfiles; i++) {
    keycodes.push(PTO(i))
  }
  for (let i = 0; i < keyboardMetadata.numDksConfig; i++) {
    keycodes.push(DKS(i))
  }

  return keycodes
}

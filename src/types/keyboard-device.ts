import { KeyboardMetadata } from "./keyboard-metadata"
import { ClassRequestSwitchDebugResponse } from "./protocols"

export type KeyboardDeviceState = {
  metadata: KeyboardMetadata
}

export enum KeyMode {
  KEY_MODE_NORMAL = 0,
  KEY_MODE_RAPID_TRIGGER,
}

export type KeyModeNormalConfig = {
  mode: KeyMode.KEY_MODE_NORMAL
  actuationDistance: number
  bottomOutDistance: number
}

export type KeyModeRapidTriggerConfig = {
  mode: KeyMode.KEY_MODE_RAPID_TRIGGER
  actuationDistance: number
  resetDistance: number
  rtDownDistance: number
  rtUpDistance: number
}

export type KeyConfig = {
  tappingTerm: number
  config: KeyModeNormalConfig | KeyModeRapidTriggerConfig
}

export type SetKeyConfigQuery = {
  profile: number
  index: number
  config: KeyConfig
}

export type SetKeymapQuery = {
  profile: number
  layer: number
  index: number
  keycode: number
}

export type KeyboardDeviceAction = {
  reset(): Promise<void>
  reboot(): Promise<void>
  recalibrate(): Promise<void>
  getSwitchDebug(): Promise<ClassRequestSwitchDebugResponse>
  getKeyConfig(): Promise<KeyConfig[][]>
  setKeyConfig(queries: SetKeyConfigQuery[]): Promise<void>
  getKeymap(): Promise<number[][][]>
  setKeymap(queries: SetKeymapQuery[]): Promise<void>
}

export type KeyboardDevice = KeyboardDeviceState & KeyboardDeviceAction

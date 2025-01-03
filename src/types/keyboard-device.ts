import { KeyboardMetadata } from "./keyboard-metadata"
import { ClassRequestSwitchDebugResponse } from "./protocols"

export type KeyboardDeviceState = {
  metadata: KeyboardMetadata
}

type SetKeymapQuery = {
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
  getKeymap(): Promise<number[][][]>
  setKeymap(queries: SetKeymapQuery[]): Promise<void>
}

export type KeyboardDevice = KeyboardDeviceState & KeyboardDeviceAction

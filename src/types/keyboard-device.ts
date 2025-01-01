import { KeyboardMetadata } from "./keyboard-metadata"

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
  getKeymap(): Promise<number[][][]>
  setKeymap(queries: SetKeymapQuery[]): Promise<void>
}

export type KeyboardDevice = KeyboardDeviceState & KeyboardDeviceAction

import { KeyboardMetadata } from "./keyboard-metadata"

export type KeyboardDeviceState = {
  metadata: KeyboardMetadata
}

export type KeyboardDeviceAction = {
  reset(): Promise<void>
}

export type KeyboardDevice = KeyboardDeviceState & KeyboardDeviceAction

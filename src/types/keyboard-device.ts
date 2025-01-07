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

import { KeyboardMetadata } from "./keyboard-metadata"
import { ClassRequestSwitchDebugResponse } from "./protocols"

export type KeyboardDeviceState = {
  id: string
  metadata: KeyboardMetadata
}

export enum SwitchId {
  SW_GEON_RAW_HE = 0,
  SW_GATERON_MAGNETIC_JADE,
  SW_GEON_RAPTOR_HE,
}

export enum TapHoldId {
  TAP_HOLD_DEFAULT = 0,
  TAP_HOLD_HOLD_ON_OTHER_KEY_PRESS,
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

export type DynamicKeystrokeMask = {
  config0: number
  config1: number
  config2: number
  config3: number
}

export type DynamicKeystrokeConfig = {
  keycode: number[]
  mask: DynamicKeystrokeMask[]
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

export type SetDynamicKeystrokeQuery = {
  profile: number
  index: number
  config: DynamicKeystrokeConfig
}

export type KeyboardDeviceAction = {
  reset(): Promise<void>
  firmwareVersion(): Promise<number>
  bootloader(): Promise<void>
  reboot(): Promise<void>
  factoryReset(): Promise<void>
  recalibrate(): Promise<void>
  getSwitchDebug(): Promise<ClassRequestSwitchDebugResponse>
  getSwitchId(): Promise<SwitchId>
  setSwitchId(swId: SwitchId): Promise<void>
  getTapHold(): Promise<TapHoldId>
  setTapHold(tapHoldId: TapHoldId): Promise<void>
  getKeyConfig(): Promise<KeyConfig[][]>
  setKeyConfig(queries: SetKeyConfigQuery[]): Promise<void>
  getKeymap(): Promise<number[][][]>
  setKeymap(queries: SetKeymapQuery[]): Promise<void>
  getDynamicKeystrokeConfig(): Promise<DynamicKeystrokeConfig[][]>
  setDynamicKeystrokeConfig(queries: SetDynamicKeystrokeQuery[]): Promise<void>
}

export type KeyboardDevice = KeyboardDeviceState & KeyboardDeviceAction

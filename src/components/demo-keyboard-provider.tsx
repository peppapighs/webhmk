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

"use client"

import { DEFAULT_DYNAMIC_KEYSTROKE_CONFIG } from "@/constants/dynamic-keystroke-config"
import { DEFAULT_KEY_CONFIG } from "@/constants/key-config"
import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDeviceContext } from "@/hooks/use-keyboard-device"
import {
  DynamicKeystrokeConfig,
  KeyboardDeviceState,
  KeyConfig,
  SetDynamicKeystrokeQuery,
  SetKeyConfigQuery,
  SetKeymapQuery,
  SwitchId,
  TapHoldId,
} from "@/types/keyboard-device"
import { produce } from "immer"
import { ReactNode, useState } from "react"

type DemoKeyboardDeviceState = KeyboardDeviceState & {
  swId: SwitchId
  tapHoldId: TapHoldId
  keyConfig: KeyConfig[][]
  keymap: number[][][]
  dksConfig: DynamicKeystrokeConfig[][]
}

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: DemoKeyboardDeviceState = {
  id: "DEMO_KEYBOARD",
  metadata: DEMO_KEYBOARD,
  swId: SwitchId.SW_GEON_RAW_HE,
  tapHoldId: TapHoldId.TAP_HOLD_DEFAULT,
  keyConfig: Array.from({ length: DEMO_KEYBOARD.numProfiles }, () =>
    Array.from({ length: DEMO_KEYBOARD.numKeys }, () =>
      structuredClone(DEFAULT_KEY_CONFIG),
    ),
  ),
  keymap: Array.from({ length: DEMO_KEYBOARD.numProfiles }, () =>
    structuredClone(DEMO_KEYBOARD.defaultKeymap),
  ),
  dksConfig: Array.from({ length: DEMO_KEYBOARD.numDksConfig }, () =>
    Array.from({ length: DEMO_KEYBOARD.numDksConfig }, () =>
      structuredClone(DEFAULT_DYNAMIC_KEYSTROKE_CONFIG),
    ),
  ),
}

export function DemoKeyboardProvider({
  children,
}: Readonly<{ children?: ReactNode }>) {
  const [state, setState] = useState<DemoKeyboardDeviceState>(initialState)

  const reset = async () => {
    setState(initialState)
  }

  const firmwareVersion = async () => {
    return 0
  }

  const bootloader = async () => {}

  const reboot = async () => {}

  const factoryReset = async () => {
    setState(initialState)
  }

  const recalibrate = async () => {}

  const getSwitchDebug = async () => {
    const numKeys = state.metadata.numKeys
    return {
      adcValues: Array(numKeys).fill(0),
      distances: Array(numKeys).fill(0),
    }
  }

  const getSwitchId = async () => {
    return state.swId
  }

  const setSwitchId = async (swId: SwitchId) => {
    setState(
      produce((draft) => {
        draft.swId = swId
      }),
    )
  }

  const getTapHold = async () => {
    return state.tapHoldId
  }

  const setTapHold = async (tapHoldId: TapHoldId) => {
    setState(
      produce((draft) => {
        draft.tapHoldId = tapHoldId
      }),
    )
  }

  const getKeyConfig = async () => {
    return state.keyConfig
  }

  const setKeyConfig = async (queries: SetKeyConfigQuery[]) => {
    setState(
      produce((draft) => {
        for (const { profile, index, config } of queries) {
          draft.keyConfig[profile][index] = config
        }
      }),
    )
  }

  const getKeymap = async () => {
    return state.keymap
  }

  const setKeymap = async (queries: SetKeymapQuery[]) => {
    setState(
      produce((draft) => {
        for (const { profile, layer, index, keycode } of queries) {
          draft.keymap[profile][layer][index] = keycode
        }
      }),
    )
  }

  const getDynamicKeystrokeConfig = async () => {
    return state.dksConfig
  }

  const setDynamicKeystrokeConfig = async (
    queries: SetDynamicKeystrokeQuery[],
  ) => {
    setState(
      produce((draft) => {
        for (const { profile, index, config } of queries) {
          draft.dksConfig[profile][index] = config
        }
      }),
    )
  }

  return (
    <KeyboardDeviceContext.Provider
      value={{
        ...state,
        reset,
        firmwareVersion,
        bootloader,
        reboot,
        factoryReset,
        recalibrate,
        getSwitchDebug,
        getSwitchId,
        setSwitchId,
        getTapHold,
        setTapHold,
        getKeyConfig,
        setKeyConfig,
        getKeymap,
        setKeymap,
        getDynamicKeystrokeConfig,
        setDynamicKeystrokeConfig,
      }}
    >
      {children}
    </KeyboardDeviceContext.Provider>
  )
}

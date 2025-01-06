"use client"

import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDeviceContext } from "@/hooks/use-keyboard-device"
import {
  KeyboardDeviceState,
  KeyConfig,
  SetKeyConfigQuery,
  SetKeymapQuery,
  SwitchId,
} from "@/types/keyboard-device"
import { produce } from "immer"
import { ReactNode, useState } from "react"

type DemoKeyboardDeviceState = KeyboardDeviceState & {
  swId: SwitchId
  keyConfig: KeyConfig[][]
  keymap: number[][][]
}

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: DemoKeyboardDeviceState = {
  id: "DEMO_KEYBOARD",
  metadata: DEMO_KEYBOARD,
  swId: SwitchId.SW_GEON_RAW_HE,
  keyConfig: Array.from({ length: DEMO_KEYBOARD.numProfiles }, () =>
    Array.from({ length: DEMO_KEYBOARD.numKeys }, () => ({
      tappingTerm: 200,
      config: {
        mode: 0,
        actuationDistance: 40,
        bottomOutDistance: 60,
      },
    })),
  ),
  keymap: Array.from({ length: DEMO_KEYBOARD.numProfiles }, () =>
    structuredClone(DEMO_KEYBOARD.defaultKeymap),
  ),
}

export function DemoKeyboardProvider({
  children,
}: Readonly<{ children?: ReactNode }>) {
  const [state, setState] = useState<DemoKeyboardDeviceState>(initialState)

  const reset = async () => {
    setState(initialState)
  }

  const reboot = async () => {}

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

  return (
    <KeyboardDeviceContext.Provider
      value={{
        ...state,
        reset,
        reboot,
        recalibrate,
        getSwitchDebug,
        getSwitchId,
        setSwitchId,
        getKeyConfig,
        setKeyConfig,
        getKeymap,
        setKeymap,
      }}
    >
      {children}
    </KeyboardDeviceContext.Provider>
  )
}

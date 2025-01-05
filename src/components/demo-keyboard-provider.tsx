"use client"

import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDeviceContext } from "@/hooks/use-keyboard-device"
import { KeyboardDeviceState, SetKeymapQuery } from "@/types/keyboard-device"
import { produce } from "immer"
import { ReactNode, useState } from "react"

type DemoKeyboardDeviceState = KeyboardDeviceState & {
  keymap: number[][][]
}

const DEMO_KEYBOARD = KEYBOARD_METADATA[0]

const initialState: DemoKeyboardDeviceState = {
  metadata: DEMO_KEYBOARD,
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
        getKeymap,
        setKeymap,
      }}
    >
      {children}
    </KeyboardDeviceContext.Provider>
  )
}

"use client"

import { KEYCODE_CATEGORIES } from "@/constants/keycode-metadata"
import { keycodeToMetadata, renderableKeycodes } from "@/lib/keycodes"
import { KeyboardDevice } from "@/types/keyboard-device"
import { KeycodeMetadata } from "@/types/keycodes"
import { createContext, useContext, useMemo, useState } from "react"

type KeycodeContextState = {
  groupedKeycodes: Record<string, KeycodeMetadata[]>
  setKeycodeFilter: (filter: (keycode: number) => boolean) => void
}

const KeycodeContext = createContext<KeycodeContextState>({
  groupedKeycodes: {},
  setKeycodeFilter: () => {},
})

export const useKeycodeContext = () => useContext(KeycodeContext)

interface IKeycodeProviderProps {
  device: KeyboardDevice
  children?: React.ReactNode
}

export function KeycodeProvider({
  device: { metadata },
  children,
}: IKeycodeProviderProps) {
  const [keycodeFilter, setKeycodeFilter] = useState<
    (keycode: number) => boolean
  >(() => () => true)
  const groupedKeycodes = useMemo(
    () =>
      renderableKeycodes(metadata)
        .filter(keycodeFilter)
        .map((keycode) => keycodeToMetadata(keycode))
        .reduce(
          (acc, keycode) => {
            const category = keycode.category
            if (!acc[category]) {
              acc[category] = []
            }
            acc[category].push(keycode)
            return acc
          },
          KEYCODE_CATEGORIES.reduce(
            (acc, category) => {
              acc[category] = []
              return acc
            },
            {} as Record<string, KeycodeMetadata[]>,
          ),
        ),
    [metadata, keycodeFilter],
  )

  return (
    <KeycodeContext.Provider
      value={{
        groupedKeycodes,
        setKeycodeFilter,
      }}
    >
      {children}
    </KeycodeContext.Provider>
  )
}

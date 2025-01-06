"use client"

import {
  ConfiguratorState,
  ConfiguratorStateState,
  KeycodeFilter,
} from "@/types/configurator-state"
import { produce } from "immer"
import { createContext, ReactNode, useContext, useState } from "react"

const initialState: ConfiguratorStateState = {
  tab: "remap",
  profileNum: 0,
  remap: {
    layerNum: 0,
    index: null,
    advancedFunction: "",
    keycodeFilter: null,
  },
  performance: {
    indices: [],
    showKeymap: false,
  },
  debug: {
    isDebugging: false,
  },
}

const ConfiguratorStateContext = createContext<ConfiguratorState>({
  ...initialState,
  reset: () => {},
  setTab: () => {},
  setProfileNum: () => {},
  remap: {
    ...initialState.remap,
    setLayerNum: () => {},
    setIndex: () => {},
    setAdvancedFunction: () => {},
    setKeycodeFilter: () => {},
  },
  performance: {
    ...initialState.performance,
    setIndices: () => {},
    setShowKeymap: () => {},
  },
  debug: {
    ...initialState.debug,
    toggleDebugging: () => {},
  },
})

export const useConfiguratorState = () => useContext(ConfiguratorStateContext)

export function ConfiguratorStateProvider({
  children,
}: Readonly<{ children?: ReactNode }>) {
  const [state, setState] = useState<ConfiguratorStateState>(initialState)

  const reset = () => {
    setState(initialState)
  }

  const setTab = (tab: string) => {
    setState(
      produce((draft) => {
        draft.tab = tab
      }),
    )
  }

  const setProfileNum = (profileNum: number) => {
    setState(
      produce((draft) => {
        draft.profileNum = profileNum
        draft.remap = initialState.remap
        draft.performance = initialState.performance
      }),
    )
  }

  const setLayerNum = (layerNum: number) => {
    setState(
      produce((draft) => {
        draft.remap.layerNum = layerNum
        draft.remap.index = null
      }),
    )
  }

  const setIndex = (index: number | null) => {
    setState(
      produce((draft) => {
        draft.remap.index = index
      }),
    )
  }

  const setAdvancedFunction = (advancedFunction: string) => {
    setState(
      produce((draft) => {
        draft.remap.advancedFunction = advancedFunction
      }),
    )
  }

  const setKeycodeFilter = (keycodeFilter: KeycodeFilter | null) => {
    setState(
      produce((draft) => {
        draft.remap.keycodeFilter = keycodeFilter
      }),
    )
  }

  const setIndices = (indices: number[]) => {
    setState(
      produce((draft) => {
        draft.performance.indices = indices
      }),
    )
  }

  const setShowKeymap = (showKeymap: boolean) => {
    setState(
      produce((draft) => {
        draft.performance.showKeymap = showKeymap
      }),
    )
  }

  const toggleDebugging = () => {
    setState(
      produce((draft) => {
        draft.debug.isDebugging = !draft.debug.isDebugging
      }),
    )
  }

  return (
    <ConfiguratorStateContext.Provider
      value={{
        ...state,
        reset,
        setTab,
        setProfileNum,
        remap: {
          ...state.remap,
          setLayerNum,
          setIndex,
          setAdvancedFunction,
          setKeycodeFilter,
        },
        performance: { ...state.performance, setIndices, setShowKeymap },
        debug: { ...state.debug, toggleDebugging },
      }}
    >
      {children}
    </ConfiguratorStateContext.Provider>
  )
}

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
  dynamicKeystroke: {
    layerNum: 0,
    index: null,
    dksKey: null,
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
  dynamicKeystroke: {
    ...initialState.dynamicKeystroke,
    setLayerNum: () => {},
    setIndex: () => {},
    setDksKey: () => {},
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
        draft.dynamicKeystroke = initialState.dynamicKeystroke
      }),
    )
  }

  const remapSetLayerNum = (layerNum: number) => {
    setState(
      produce((draft) => {
        draft.remap.layerNum = layerNum
        draft.remap.index = null
      }),
    )
  }

  const remapSetIndex = (index: number | null) => {
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

  const dynamicKeystrokeSetLayerNum = (layerNum: number) => {
    setState(
      produce((draft) => {
        draft.dynamicKeystroke.layerNum = layerNum
        draft.dynamicKeystroke.index = null
        draft.dynamicKeystroke.dksKey = null
      }),
    )
  }

  const dynamicKeystrokeSetIndex = (index: number | null) => {
    setState(
      produce((draft) => {
        draft.dynamicKeystroke.index = index
        draft.dynamicKeystroke.dksKey = null
      }),
    )
  }

  const setDksKey = (dksKey: number | null) => {
    setState(
      produce((draft) => {
        draft.dynamicKeystroke.dksKey = dksKey
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
          setLayerNum: remapSetLayerNum,
          setIndex: remapSetIndex,
          setAdvancedFunction,
          setKeycodeFilter,
        },
        performance: { ...state.performance, setIndices, setShowKeymap },
        dynamicKeystroke: {
          ...state.dynamicKeystroke,
          setLayerNum: dynamicKeystrokeSetLayerNum,
          setIndex: dynamicKeystrokeSetIndex,
          setDksKey,
        },
        debug: { ...state.debug, toggleDebugging },
      }}
    >
      {children}
    </ConfiguratorStateContext.Provider>
  )
}

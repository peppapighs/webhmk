import {
  ConfiguratorState,
  ConfiguratorStateState,
} from "@/types/configurator-state"
import { create } from "zustand"

const initialState: ConfiguratorStateState = {
  tab: "remap",
  profileNum: 0,
  remap: {
    layerNum: 0,
    index: null,
    advancedFunction: "",
    keycodeFilter: null,
  },
  debug: {
    isDebugging: false,
  },
}

export const useConfiguratorState = create<ConfiguratorState>((set) => ({
  ...initialState,

  reset() {
    set((state) => ({
      ...initialState,
      remap: {
        ...state.remap,
        ...initialState.remap,
      },
      debug: {
        ...state.debug,
        ...initialState.debug,
      },
    }))
  },

  setTab(tab) {
    set({ tab })
  },

  setProfileNum(profileNum) {
    set((state) => ({
      profileNum,
      remap: { ...state.remap, ...initialState.remap },
    }))
  },

  remap: {
    ...initialState.remap,

    setLayerNum(layerNum) {
      set((state) => ({
        remap: {
          ...state.remap,
          layerNum,
          index: null,
        },
      }))
    },

    setIndex(index) {
      set((state) => ({
        remap: {
          ...state.remap,
          index,
        },
      }))
    },

    setAdvancedFunction(advancedFunction) {
      set((state) => ({
        remap: {
          ...state.remap,
          advancedFunction,
        },
      }))
    },

    setKeycodeFilter(keycodeFilter) {
      set((state) => ({
        remap: {
          ...state.remap,
          keycodeFilter,
        },
      }))
    },
  },

  debug: {
    ...initialState.debug,

    toggleDebugging() {
      set((state) => ({
        debug: {
          ...state.debug,
          isDebugging: !state.debug.isDebugging,
        },
      }))
    },
  },
}))

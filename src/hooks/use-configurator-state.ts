import {
  ConfiguratorState,
  ConfiguratorStateState,
} from "@/types/configurator-state"
import { create } from "zustand"

const initialState: ConfiguratorStateState = {
  profileNum: 0,
  remap: {
    layerNum: 0,
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
    }))
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
        },
      }))
    },
  },
}))

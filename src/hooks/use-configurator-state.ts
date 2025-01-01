import {
  ConfiguratorState,
  ConfiguratorStateState,
} from "@/types/configurator-state"
import { create } from "zustand"

const initialState: ConfiguratorStateState = {
  profileNum: 0,
}

export const useConfiguratorState = create<ConfiguratorState>((set) => ({
  ...initialState,

  reset() {
    set(initialState)
  },

  setProfileNum(profileNum) {
    set({ profileNum })
  },
}))

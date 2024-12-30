import { create } from 'zustand'

interface IAppStateValue {
  profile: number
  layer: number
  index: number | null
}

type IAppState = IAppStateValue & {
  resetApp(): void
  setProfile(profile: number): void
  setLayer(layer: number): void
  setIndex(index: number | null): void
}

const DEFAULT_APP_STATE: IAppStateValue = {
  profile: 0,
  layer: 0,
  index: null,
}

export const useApp = create<IAppState>((set) => ({
  ...DEFAULT_APP_STATE,
  resetApp: () => set(DEFAULT_APP_STATE),
  setProfile: (profile) => set({ profile, index: null }),
  setLayer: (layer) => set({ layer, index: null }),
  setIndex: (index) => set({ index }),
}))

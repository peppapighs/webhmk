import { create } from 'zustand'

interface IAppState {
  profile: number
  resetApp(): void
  setProfile(profile: number): void
}

export const useApp = create<IAppState>((set) => ({
  profile: 0,
  resetApp: () => set({ profile: 0 }),
  setProfile: (profile) => set({ profile }),
}))

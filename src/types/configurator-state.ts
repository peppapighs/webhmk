export type KeycodeFilter = {
  id: string
  filter(keycode: number): boolean
}

export type ConfiguratorStateState = {
  tab: string
  profileNum: number
  remap: {
    layerNum: number
    index: number | null
    advancedFunction: string
    keycodeFilter: KeycodeFilter | null
  }
  performance: {
    indices: number[]
  }
  debug: {
    isDebugging: boolean
  }
}

export type ConfiguratorStateAction = {
  reset(): void
  setTab(tab: string): void
  setProfileNum(profileNum: number): void

  remap: {
    setLayerNum(layerNum: number): void
    setIndex(index: number | null): void
    setAdvancedFunction(advancedFunction: string): void
    setKeycodeFilter(keycodeFilter: KeycodeFilter | null): void
  }

  performance: {
    setIndices(indices: number[]): void
  }

  debug: {
    toggleDebugging(): void
  }
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

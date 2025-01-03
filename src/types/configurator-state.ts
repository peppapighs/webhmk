export type ConfiguratorStateState = {
  tab: string
  profileNum: number
  remap: {
    layerNum: number
    index: number | null
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
  }

  debug: {
    toggleDebugging(): void
  }
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

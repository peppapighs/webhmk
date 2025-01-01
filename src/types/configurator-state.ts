export type ConfiguratorStateState = {
  profileNum: number
  remap: {
    layerNum: number
    index: number | null
  }
}

export type ConfiguratorStateAction = {
  reset(): void
  setProfileNum(profileNum: number): void

  remap: {
    setLayerNum(layerNum: number): void
    setIndex(index: number | null): void
  }
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

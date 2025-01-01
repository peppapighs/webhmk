export type ConfiguratorStateState = {
  profileNum: number
  remap: {
    layerNum: number
  }
}

export type ConfiguratorStateAction = {
  reset(): void
  setProfileNum(profileNum: number): void

  remap: {
    setLayerNum(layerNum: number): void
  }
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

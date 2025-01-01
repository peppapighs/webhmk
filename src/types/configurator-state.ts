export type ConfiguratorStateState = {
  profileNum: number
}

export type ConfiguratorStateAction = {
  reset(): void
  setProfileNum(profileNum: number): void
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

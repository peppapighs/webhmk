export interface ILayoutSwitch {
  i: number
  w: number
  h: number
  ml: number
  mt: number
}

export interface IKeyboardMetadata {
  name: string
  vendorId: number
  appProductId: number
  bootloaderProductId?: number
  numProfiles: number
  numLayers: number
  numKeys: number
  numDksConfig: number
  layout: ILayoutSwitch[][]
}

export enum KeyMode {
  KEY_MODE_NORMAL = 0,
  KEY_MODE_RAPID_TRIGGER = 1,
}

export interface IKeyModeNormal {
  mode: KeyMode.KEY_MODE_NORMAL
  actuationDistance: number
  bottomOutDistance: number
}

export interface IKeyModeRapidTrigger {
  mode: KeyMode.KEY_MODE_RAPID_TRIGGER
  actuationDistance: number
  resetDistance: number
  rtDownDistance: number
  rtUpDistance: number
}

export interface IKeyConfig {
  tappingTerm: number
  config: IKeyModeNormal | IKeyModeRapidTrigger
}

export enum SwitchId {
  SW_GEON_RAW_HE = 0,
  SW_GATERON_MAGNETIC_JADE = 1,
  SW_GEON_RAPTOR_HE = 2,
}

export enum TapHoldConfig {
  TAP_HOLD_DEFAULT = 0,
  TAP_HOLD_HOLD_ON_OTHER_KEY_PRESS = 1,
}

export interface IDKSConfig {
  keycode: number[]
  mask: number[]
}

export interface ISwitchDebug {
  adcValue: number
  distance: number
}

export interface IKeyboard {
  metadata: IKeyboardMetadata
  swId: SwitchId
  tapHold: TapHoldConfig
  keyConfig: IKeyConfig[][]
  keymap: number[][][]
  dksConfig: IDKSConfig[][]

  fetchSwitchId(): Promise<void>
  setSwitchId(swId: SwitchId): Promise<void>

  fetchTapHoldConfig(): Promise<void>
  setTapHoldConfig(tapHold: TapHoldConfig): Promise<void>

  fetchKeyConfig(): Promise<void>
  setKeyConfig(
    profile: number,
    index: number,
    config: IKeyConfig,
  ): Promise<void>

  fetchKeymap(): Promise<void>
  setKeymap(
    profile: number,
    layer: number,
    index: number,
    keycode: number,
  ): Promise<void>

  fetchDksConfig(): Promise<void>
  setDksConfig(
    profile: number,
    index: number,
    config: IDKSConfig,
  ): Promise<void>

  getSwitchDebug(): Promise<ISwitchDebug[]>
}

import {
  IDKSConfig,
  IKeyboard,
  IKeyConfig,
  ISwitchDebug,
  KeyMode,
  SwitchId,
  TapHoldConfig,
} from '@/types/keyboard'
import { useState } from 'react'
import { useDevice } from './useDevice'
import { ClassRequest, ClassRequestIndex } from '@/constants/protocols'
import { KEYBOARDS } from '@/constants/keyboards'

export const useKeyboard = (): IKeyboard | null => {
  const { device, send, receive } = useDevice()

  const [swId, setSwitchIdState] = useState<SwitchId>(SwitchId.SW_GEON_RAW_HE)
  const [tapHold, setTapHoldState] = useState<TapHoldConfig>(
    TapHoldConfig.TAP_HOLD_DEFAULT,
  )
  const [keyConfig, setKeyConfigState] = useState<IKeyConfig[][]>([])
  const [keymap, setKeymapState] = useState<number[][][]>([])
  const [dksConfig, setDksConfigState] = useState<IDKSConfig[][]>([])

  if (device.status === 'disconnected') {
    return null
  }

  const metadata =
    KEYBOARDS.find(
      (k) =>
        k.vendorId === device.device.vendorId &&
        k.appProductId === device.device.productId,
    ) || KEYBOARDS[0]

  const fetchSwitchId = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_SW_ID,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      1,
    )
    setSwitchIdState(data.getUint8(0))
  }

  const setSwitchId = async (swId: SwitchId) => {
    const payload = new Uint8Array([swId])

    await send(
      ClassRequest.CLASS_REQUEST_SW_ID,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      payload,
    )
    await fetchSwitchId()
  }

  const fetchTapHoldConfig = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_TAP_HOLD,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      1,
    )
    setTapHoldState(data.getUint8(0))
  }

  const setTapHoldConfig = async (tapHold: TapHoldConfig) => {
    const payload = new Uint8Array([tapHold])

    await send(
      ClassRequest.CLASS_REQUEST_TAP_HOLD,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      payload,
    )
    await fetchTapHoldConfig()
  }

  const fetchKeyConfig = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_KEY_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      7 * metadata.numProfiles * metadata.numKeys,
    )

    const keyConfig: IKeyConfig[][] = []
    for (let i = 0; i < metadata.numProfiles; i++) {
      const profile: IKeyConfig[] = []
      for (let j = 0; j < metadata.numKeys; j++) {
        const offset = (i * metadata.numKeys + j) * 7
        const tappingTerm = data.getUint16(offset + 0, true)
        const mode = data.getUint8(offset + 2)

        if (mode === KeyMode.KEY_MODE_NORMAL) {
          const actuationDistance = data.getUint8(offset + 3)
          const bottomOutDistance = data.getUint8(offset + 4)
          profile.push({
            tappingTerm,
            config: {
              mode,
              actuationDistance,
              bottomOutDistance,
            },
          })
        } else if (mode === KeyMode.KEY_MODE_RAPID_TRIGGER) {
          const actuationDistance = data.getUint8(offset + 3)
          const resetDistance = data.getUint8(offset + 4)
          const rtDownDistance = data.getUint8(offset + 5)
          const rtUpDistance = data.getUint8(offset + 6)
          profile.push({
            tappingTerm,
            config: {
              mode,
              actuationDistance,
              resetDistance,
              rtDownDistance,
              rtUpDistance,
            },
          })
        }
      }
      keyConfig.push(profile)
    }
    setKeyConfigState(keyConfig)
  }

  const setKeyConfig = async (
    profile: number,
    key: number,
    config: IKeyConfig,
  ) => {
    const payload = new DataView(new ArrayBuffer(7))

    payload.setUint8(0, profile)
    payload.setUint16(1, key, true)
    payload.setUint16(3, config.tappingTerm, true)
    payload.setUint8(5, config.config.mode)

    if (config.config.mode === KeyMode.KEY_MODE_NORMAL) {
      payload.setUint8(6, config.config.actuationDistance)
      payload.setUint8(7, config.config.bottomOutDistance)
    } else if (config.config.mode === KeyMode.KEY_MODE_RAPID_TRIGGER) {
      payload.setUint8(6, config.config.actuationDistance)
      payload.setUint8(7, config.config.resetDistance)
      payload.setUint8(8, config.config.rtDownDistance)
      payload.setUint8(9, config.config.rtUpDistance)
    }

    await send(
      ClassRequest.CLASS_REQUEST_KEY_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      payload,
    )
    await fetchKeyConfig()
  }

  const fetchKeymap = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_KEYMAP,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      metadata.numProfiles * metadata.numKeys * metadata.numLayers * 2,
    )

    const keymap: number[][][] = []
    for (let i = 0; i < metadata.numProfiles; i++) {
      const profile: number[][] = []
      for (let j = 0; j < metadata.numLayers; j++) {
        const row: number[] = []
        for (let k = 0; k < metadata.numKeys; k++) {
          const offset =
            (i * metadata.numKeys * metadata.numLayers +
              j * metadata.numKeys +
              k) *
            2
          row.push(data.getUint16(offset, true))
        }
        profile.push(row)
      }
      keymap.push(profile)
    }
    console.log(keymap)
    setKeymapState(keymap)
  }

  const setKeymap = async (
    profile: number,
    layer: number,
    index: number,
    keycode: number,
  ) => {
    const payload = new DataView(new ArrayBuffer(6))

    payload.setUint8(0, profile)
    payload.setUint8(1, layer)
    payload.setUint16(2, index, true)
    payload.setUint16(4, keycode, true)

    await send(
      ClassRequest.CLASS_REQUEST_KEYMAP,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      payload,
    )
    await fetchKeymap()
  }

  const fetchDksConfig = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_DKS_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      8 * metadata.numProfiles * metadata.numDksConfig,
    )

    const dksConfig: IDKSConfig[][] = []
    for (let i = 0; i < metadata.numProfiles; i++) {
      const profile: IDKSConfig[] = []
      for (let j = 0; j < metadata.numDksConfig; j++) {
        const offset = (i * metadata.numDksConfig + j) * 8

        const keycode = []
        const mask = []
        for (let k = 0; k < 4; k++) {
          keycode.push(data.getUint8(offset + k))
          mask.push(data.getUint8(offset + 4 + k))
        }

        profile.push({ keycode, mask })
      }
      dksConfig.push(profile)
    }
    setDksConfigState(dksConfig)
  }

  const setDksConfig = async (
    profile: number,
    index: number,
    config: IDKSConfig,
  ) => {
    const payload = new DataView(new ArrayBuffer(10))

    payload.setUint8(0, profile)
    payload.setUint8(1, index)
    for (let i = 0; i < 4; i++) {
      payload.setUint8(2 + i, config.keycode[i])
      payload.setUint8(6 + i, config.mask[i])
    }

    await send(
      ClassRequest.CLASS_REQUEST_DKS_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      payload,
    )
    await fetchDksConfig()
  }

  const getSwitchDebug = async () => {
    const data = await receive(
      ClassRequest.CLASS_REQUEST_SWITCH_DEBUG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      3 * metadata.numKeys,
    )

    const switchDebug: ISwitchDebug[] = []
    for (let i = 0; i < metadata.numKeys; i++) {
      const adcValue = data.getUint16(i * 2, true)
      const distance = data.getUint8(2 * metadata.numKeys + i)
      switchDebug.push({ adcValue, distance })
    }
    return switchDebug
  }

  return {
    metadata,
    swId,
    tapHold,
    keyConfig,
    keymap,
    dksConfig,

    fetchSwitchId,
    setSwitchId,

    fetchTapHoldConfig,
    setTapHoldConfig,

    fetchKeyConfig,
    setKeyConfig,

    fetchKeymap,
    setKeymap,

    fetchDksConfig,
    setDksConfig,

    getSwitchDebug,
  }
}

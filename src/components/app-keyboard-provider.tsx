/*
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <https://www.gnu.org/licenses/>.
 */

"use client"

import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import {
  KeyboardDeviceAction,
  KeyboardDeviceState,
  KeyConfig,
  KeyMode,
  SetDynamicKeystrokeQuery,
  SetKeyConfigQuery,
  SetKeymapQuery,
  SwitchId,
  TapHoldId,
} from "@/types/keyboard-device"
import { ClassRequest, ClassRequestIndex } from "@/types/protocols"
import { createContext, ReactNode, useContext, useState } from "react"

type AppKeyboardDeviceState =
  | {
      status: "disconnected"
    }
  | ({
      status: "connected"
      usbDevice: USBDevice
      interfaceNum: number
    } & KeyboardDeviceState)

type AppKeyboardDeviceAction = {
  connect(): Promise<void>
} & KeyboardDeviceAction

type AppKeyboardDevice = AppKeyboardDeviceState & AppKeyboardDeviceAction

const initialState: AppKeyboardDeviceState = {
  status: "disconnected",
}

const AppKeyboardDeviceContext = createContext<AppKeyboardDevice>({
  ...initialState,
  async connect() {},
  async reset() {},
  async firmwareVersion() {
    return 0
  },
  async bootloader() {},
  async reboot() {},
  async factoryReset() {},
  async recalibrate() {},
  async getSwitchDebug() {
    return { adcValues: [], distances: [] }
  },
  async getSwitchId() {
    return 0
  },
  async setSwitchId() {},
  async getTapHold() {
    return 0
  },
  async setTapHold() {},
  async getKeyConfig() {
    return []
  },
  async setKeyConfig() {},
  async getKeymap() {
    return []
  },
  async setKeymap() {},
  async getDynamicKeystrokeConfig() {
    return []
  },
  async setDynamicKeystrokeConfig() {},
})

export const useAppKeyboardDevice = () => useContext(AppKeyboardDeviceContext)

const KEYBOARD_USB_DEVICE_FILTERS = KEYBOARD_METADATA.map((keyboard) => ({
  vendorId: keyboard.vendorId,
  productId: keyboard.appProductId,
}))

const findVendorSpecificInterface = (usbDevice: USBDevice): number => {
  for (const usbInterface of usbDevice.configuration?.interfaces || []) {
    for (const alternate of usbInterface.alternates) {
      if (alternate.interfaceClass === 0xff) {
        return usbInterface.interfaceNumber
      }
    }
  }

  throw new Error("No vendor specific interface found")
}

const send = async (
  device: AppKeyboardDeviceState,
  request: ClassRequest,
  value: ClassRequestIndex,
  data?: BufferSource,
) => {
  if (device.status === "disconnected") {
    throw new Error("Device is disconnected")
  }

  const { usbDevice, interfaceNum } = device
  return usbDevice.controlTransferOut(
    {
      requestType: "class",
      recipient: "interface",
      request,
      value,
      index: interfaceNum,
    },
    data,
  )
}

const receive = async (
  device: AppKeyboardDeviceState,
  request: ClassRequest,
  value: ClassRequestIndex,
  length: number,
) => {
  if (device.status === "disconnected") {
    throw new Error("Device is disconnected")
  }

  const { usbDevice, interfaceNum } = device
  return usbDevice.controlTransferIn(
    {
      requestType: "class",
      recipient: "interface",
      request,
      value,
      index: interfaceNum,
    },
    length,
  )
}

export function AppKeyboardProvider({
  children,
}: Readonly<{ children?: ReactNode }>) {
  const [state, setState] = useState<AppKeyboardDeviceState>({
    status: "disconnected",
  })

  const connect = async () => {
    if (state.status === "connected") {
      return
    }

    const usbDevice = await navigator.usb.requestDevice({
      filters: KEYBOARD_USB_DEVICE_FILTERS,
    })

    const metadata = KEYBOARD_METADATA.find(
      (keyboard) =>
        keyboard.vendorId === usbDevice.vendorId &&
        keyboard.appProductId === usbDevice.productId,
    )

    if (!metadata) {
      // Should be unreachable
      throw new Error("Unsupported keyboard")
    }

    if (!usbDevice.opened) {
      await usbDevice.open()
    }

    try {
      if (usbDevice.configuration === null) {
        await usbDevice.selectConfiguration(1)
      }

      const interfaceNum = findVendorSpecificInterface(usbDevice)
      await usbDevice.claimInterface(interfaceNum)
      await usbDevice.selectAlternateInterface(interfaceNum, 0)

      setState({
        status: "connected",
        usbDevice,
        interfaceNum,
        id: `USB:${usbDevice.vendorId}:${usbDevice.productId}:${usbDevice.serialNumber}:${Date.now()}`,
        metadata,
      })
    } catch (error) {
      console.error(error)
      await usbDevice.close()
    }
  }

  const reset = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { usbDevice } = state
    if (usbDevice.opened) {
      await usbDevice.close()
    }
    setState({ status: "disconnected" })
  }

  const firmwareVersion = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_FIRMWARE_VERSION,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      2,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get firmware version")
    }

    return data.getUint16(0, true)
  }

  const bootloader = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_BOOTLOADER,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
    )

    if (status !== "ok") {
      throw new Error("Failed to enter bootloader")
    }
  }

  const reboot = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_REBOOT,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
    )

    if (status !== "ok") {
      throw new Error("Failed to reboot")
    }
  }

  const factoryReset = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_FACTORY_RESET,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
    )

    if (status !== "ok") {
      throw new Error("Failed to factory reset")
    }
  }

  const recalibrate = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_RECALIBRATE,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
    )

    if (status !== "ok") {
      throw new Error("Failed to recalibrate")
    }
  }

  const getSwitchDebug = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { metadata } = state
    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_SWITCH_DEBUG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      3 * metadata.numKeys,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get switch debug")
    }

    return {
      adcValues: Array.from({ length: metadata.numKeys }, (_, i) =>
        data.getUint16(2 * i, true),
      ),
      distances: Array.from({ length: metadata.numKeys }, (_, i) =>
        data.getUint8(2 * metadata.numKeys + i),
      ),
    }
  }

  const getSwitchId = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_SW_ID,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      1,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get switch ID")
    }

    return data.getUint8(0)
  }

  const setSwitchId = async (swId: SwitchId) => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_SW_ID,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      new Uint8Array([swId]).buffer,
    )

    if (status !== "ok") {
      throw new Error("Failed to set switch ID")
    }
  }

  const getTapHold = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_TAP_HOLD,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      1,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get tap hold")
    }

    return data.getUint8(0)
  }

  const setTapHold = async (tapHoldId: TapHoldId) => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_TAP_HOLD,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      new Uint8Array([tapHoldId]).buffer,
    )

    if (status !== "ok") {
      throw new Error("Failed to set tap hold")
    }
  }

  const getKeyConfig = async (): Promise<KeyConfig[][]> => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { metadata } = state
    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_KEY_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      7 * metadata.numProfiles * metadata.numKeys,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get key config")
    }

    return Array.from({ length: metadata.numProfiles }, (_, i) =>
      Array.from({ length: metadata.numKeys }, (_, j) => {
        const offset = 7 * (i * metadata.numKeys + j)
        const tappingTerm = data.getUint16(offset, true)
        const mode = data.getUint8(offset + 2)

        switch (mode) {
          case KeyMode.KEY_MODE_NORMAL:
            return {
              tappingTerm,
              config: {
                mode: KeyMode.KEY_MODE_NORMAL,
                actuationDistance: data.getUint8(offset + 3),
                bottomOutDistance: data.getUint8(offset + 4),
              },
            }

          case KeyMode.KEY_MODE_RAPID_TRIGGER:
            return {
              tappingTerm,
              config: {
                mode: KeyMode.KEY_MODE_RAPID_TRIGGER,
                actuationDistance: data.getUint8(offset + 3),
                resetDistance: data.getUint8(offset + 4),
                rtDownDistance: data.getUint8(offset + 5),
                rtUpDistance: data.getUint8(offset + 6),
              },
            }

          default:
            throw new Error("Unsupported key mode")
        }
      }),
    )
  }

  const setKeyConfig = async (queries: SetKeyConfigQuery[]) => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const data = new Uint8Array(
      queries
        .map(({ profile, index, config }) => {
          const payload = [
            profile,
            index & 0xff,
            index >> 8,
            config.tappingTerm & 0xff,
            config.tappingTerm >> 8,
            config.config.mode,
          ]
          switch (config.config.mode) {
            case KeyMode.KEY_MODE_NORMAL:
              payload.push(
                config.config.actuationDistance,
                config.config.bottomOutDistance,
                0,
                0,
              )
              break

            case KeyMode.KEY_MODE_RAPID_TRIGGER:
              payload.push(
                config.config.actuationDistance,
                config.config.resetDistance,
                config.config.rtDownDistance,
                config.config.rtUpDistance,
              )
              break

            default:
              throw new Error("Unsupported key mode")
          }
          return payload
        })
        .flat(),
    )

    if (data.length !== 10 * queries.length) {
      throw new Error("Invalid key config queries")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_KEY_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      data.buffer,
    )

    if (status !== "ok") {
      throw new Error("Failed to set key config")
    }
  }

  const getKeymap = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { metadata } = state
    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_KEYMAP,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      2 * metadata.numProfiles * metadata.numLayers * metadata.numKeys,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get keymap")
    }

    return Array.from({ length: metadata.numProfiles }, (_, i) =>
      Array.from({ length: metadata.numLayers }, (_, j) =>
        Array.from({ length: metadata.numKeys }, (_, k) =>
          data.getUint16(
            2 *
              (i * metadata.numLayers * metadata.numKeys +
                j * metadata.numKeys +
                k),
            true,
          ),
        ),
      ),
    )
  }

  const setKeymap = async (queries: SetKeymapQuery[]) => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const data = new Uint8Array(
      queries
        .map((query) => [
          query.profile,
          query.layer,
          query.index & 0xff,
          query.index >> 8,
          query.keycode & 0xff,
          query.keycode >> 8,
        ])
        .flat(),
    )

    if (data.length !== 6 * queries.length) {
      throw new Error("Invalid keymap queries")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_KEYMAP,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      data.buffer,
    )

    if (status !== "ok") {
      throw new Error("Failed to set keymap")
    }
  }

  const getDynamicKeystrokeConfig = async () => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const { metadata } = state
    const { status, data } = await receive(
      state,
      ClassRequest.CLASS_REQUEST_DKS_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_GET,
      8 * metadata.numProfiles * metadata.numDksConfig,
    )

    if (status !== "ok" || data === undefined) {
      throw new Error("Failed to get dynamic keystroke config")
    }

    return Array.from({ length: metadata.numProfiles }, (_, i) =>
      Array.from({ length: metadata.numDksConfig }, (_, j) => {
        const offset = 2 * (i * metadata.numDksConfig + j)
        return {
          keycode: Array.from({ length: 4 }, (_, k) =>
            data.getUint8(offset + k),
          ),
          mask: Array.from({ length: 4 }, (_, k) => {
            const allMask = data.getUint8(offset + 4 + k)
            return {
              config0: (allMask >> 0) & 0x07,
              config1: (allMask >> 3) & 0x03,
              config2: (allMask >> 5) & 0x03,
              config3: (allMask >> 7) & 0x01,
            }
          }),
        }
      }),
    )
  }

  const setDynamicKeystrokeConfig = async (
    queries: SetDynamicKeystrokeQuery[],
  ) => {
    if (state.status === "disconnected") {
      throw new Error("Device is disconnected")
    }

    const data = new Uint8Array(
      queries
        .map((query) => {
          const payload = [query.profile, query.index]
          for (const keycode of query.config.keycode) {
            payload.push(keycode)
          }
          for (const mask of query.config.mask) {
            payload.push(
              (mask.config0 & 0x07) |
                ((mask.config1 & 0x03) << 3) |
                ((mask.config2 & 0x03) << 5) |
                ((mask.config3 & 0x01) << 7),
            )
          }
          return payload
        })
        .flat(),
    )

    if (data.length !== 10 * queries.length) {
      throw new Error("Invalid dynamic keystroke config queries")
    }

    const { status } = await send(
      state,
      ClassRequest.CLASS_REQUEST_DKS_CONFIG,
      ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      data.buffer,
    )

    if (status !== "ok") {
      throw new Error("Failed to set dynamic keystroke config")
    }
  }

  return (
    <AppKeyboardDeviceContext.Provider
      value={{
        ...state,
        connect,
        reset,
        firmwareVersion,
        bootloader,
        reboot,
        factoryReset,
        recalibrate,
        getSwitchDebug,
        getSwitchId,
        setSwitchId,
        getTapHold,
        setTapHold,
        getKeyConfig,
        setKeyConfig,
        getKeymap,
        setKeymap,
        getDynamicKeystrokeConfig,
        setDynamicKeystrokeConfig,
      }}
    >
      {children}
    </AppKeyboardDeviceContext.Provider>
  )
}

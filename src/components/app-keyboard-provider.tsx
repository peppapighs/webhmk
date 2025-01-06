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
  SetKeyConfigQuery,
  SetKeymapQuery,
  SwitchId,
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
  async reboot() {},
  async recalibrate() {},
  async getSwitchDebug() {
    return { adcValues: [], distances: [] }
  },
  async getSwitchId() {
    return 0
  },
  async setSwitchId() {},
  async getKeyConfig() {
    return []
  },
  async setKeyConfig() {},
  async getKeymap() {
    return []
  },
  async setKeymap() {},
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

  return (
    <AppKeyboardDeviceContext.Provider
      value={{
        ...state,
        connect,
        reset,
        reboot,
        recalibrate,
        getSwitchDebug,
        getSwitchId,
        setSwitchId,
        getKeyConfig,
        setKeyConfig,
        getKeymap,
        setKeymap,
      }}
    >
      {children}
    </AppKeyboardDeviceContext.Provider>
  )
}

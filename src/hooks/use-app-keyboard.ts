import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice, KeyboardDeviceAction } from "@/types/keyboard-device"
import { ClassRequest, ClassRequestIndex } from "@/types/protocols"
import { create } from "zustand"

type AppKeyboardDeviceState =
  | {
      status: "disconnected"
    }
  | ({
      status: "connected"
      usbDevice: USBDevice
      interfaceNum: number
    } & KeyboardDevice)

type AppKeyboardDeviceAction = {
  connect(): Promise<void>
}

type AppKeyboardDevice = AppKeyboardDeviceState & AppKeyboardDeviceAction

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
  device: AppKeyboardDevice,
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
  device: AppKeyboardDevice,
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

export const useAppKeyboard = create<AppKeyboardDevice & KeyboardDeviceAction>(
  (set, get) => ({
    status: "disconnected",

    async connect() {
      if (get().status === "connected") {
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

        set({ status: "connected", usbDevice, interfaceNum, metadata })
      } catch (error) {
        console.error(error)
        await usbDevice.close()
      }
    },

    async reset() {
      const device = get()
      if (device.status === "disconnected") {
        throw new Error("Device is disconnected")
      }

      const { usbDevice } = device
      if (usbDevice.opened) {
        await usbDevice.close()
      }
      set({ status: "disconnected" })
    },

    async reboot() {
      const device = get()
      if (device.status === "disconnected") {
        throw new Error("Device is disconnected")
      }

      const { status } = await send(
        device,
        ClassRequest.CLASS_REQUEST_REBOOT,
        ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      )

      if (status !== "ok") {
        throw new Error("Failed to reboot")
      }
    },

    async recalibrate() {
      const device = get()
      if (device.status === "disconnected") {
        throw new Error("Device is disconnected")
      }

      const { status } = await send(
        device,
        ClassRequest.CLASS_REQUEST_RECALIBRATE,
        ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
      )

      if (status !== "ok") {
        throw new Error("Failed to recalibrate")
      }
    },

    async getSwitchDebug() {
      const device = get()
      if (device.status === "disconnected") {
        throw new Error("Device is disconnected")
      }

      const { metadata } = device
      const { status, data } = await receive(
        device,
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
    },

    async getKeymap() {
      const device = get()
      if (device.status === "disconnected") {
        throw new Error("Device is disconnected")
      }

      const { metadata } = device
      const { status, data } = await receive(
        device,
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
    },

    async setKeymap(queries) {
      const device = get()
      if (device.status === "disconnected") {
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
        device,
        ClassRequest.CLASS_REQUEST_KEYMAP,
        ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
        data.buffer,
      )

      if (status !== "ok") {
        throw new Error("Failed to set keymap")
      }
    },
  }),
)

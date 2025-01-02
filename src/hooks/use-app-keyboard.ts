import { KEYBOARD_METADATA } from "@/constants/keyboard-metadata"
import { KeyboardDevice } from "@/types/keyboard-device"
import { ClassRequest, ClassRequestIndex } from "@/types/protocols"
import { create } from "zustand"

type AppKeyboardDevice =
  | {
      status: "disconnected"
      connect(): Promise<KeyboardDevice>
    }
  | ({
      status: "connected"
      usbDevice: USBDevice
      interfaceNum: number
    } & KeyboardDevice)

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

export const useAppKeyboard = create<AppKeyboardDevice>((set) => ({
  status: "disconnected",

  async connect() {
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

      const send = async (
        request: ClassRequest,
        value: ClassRequestIndex,
        data?: BufferSource,
      ) =>
        usbDevice.controlTransferOut(
          {
            requestType: "class",
            recipient: "interface",
            request,
            value,
            index: interfaceNum,
          },
          data,
        )

      const receive = async (
        request: ClassRequest,
        value: ClassRequestIndex,
        length: number,
      ) =>
        usbDevice.controlTransferIn(
          {
            requestType: "class",
            recipient: "interface",
            request,
            value,
            index: interfaceNum,
          },
          length,
        )

      const device: AppKeyboardDevice = {
        status: "connected",
        usbDevice,
        interfaceNum,
        metadata,

        async reset() {
          await usbDevice.close()
          set({ status: "disconnected" })
        },

        async getKeymap() {
          const { status, data } = await receive(
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
            ClassRequest.CLASS_REQUEST_KEYMAP,
            ClassRequestIndex.CLASS_REQUEST_INDEX_SET,
            data.buffer,
          )

          if (status !== "ok") {
            throw new Error("Failed to set keymap")
          }
        },
      }

      set(device)
      return device
    } catch (error) {
      console.error(error)
      await usbDevice.close()
      throw error
    }
  },
}))

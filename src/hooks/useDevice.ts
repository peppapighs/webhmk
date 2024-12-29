import { create } from 'zustand'

type IDevice =
  | {
      status: 'disconnected'
    }
  | {
      status: 'connected'
      device: USBDevice
      interfaceNumber: number
    }

interface IDeviceState {
  device: IDevice
  connect(filter: USBDeviceFilter[]): Promise<void>
  disconnect(): Promise<void>
  send(request: number, value: number, data?: BufferSource): Promise<void>
  receive(request: number, value: number, length: number): Promise<DataView>
}

const findVendorSpecificInterface = (device: USBDevice): number => {
  for (const usbInterface of device.configuration?.interfaces || []) {
    for (const alternate of usbInterface.alternates) {
      if (alternate.interfaceClass === 0xff) {
        // Found a vendor specific interface
        return usbInterface.interfaceNumber
      }
    }
  }

  throw new Error('No vendor specific interface found')
}

export const useDevice = create<IDeviceState>((set, get) => ({
  device: { status: 'disconnected' },

  async connect(filter) {
    if (get().device.status === 'connected') {
      throw new Error('Device already connected')
    }

    const device = await navigator.usb.requestDevice({ filters: filter })
    const deviceTry = async <T>(f: () => Promise<T>): Promise<T> => {
      try {
        return await f()
      } catch (error) {
        await device.close()
        await device.forget()
        throw error
      }
    }

    if (!device.opened) {
      await deviceTry(() => device.open())
    }

    if (device.configuration === null) {
      await deviceTry(() => device.selectConfiguration(1))
    }

    const interfaceNumber = await deviceTry(async () => {
      const interfaceNumber = findVendorSpecificInterface(device)

      await device.claimInterface(interfaceNumber)
      await device.selectAlternateInterface(interfaceNumber, 0)

      return interfaceNumber
    })

    set({ device: { status: 'connected', device, interfaceNumber } })
  },

  async disconnect() {
    const { device } = get()

    if (device.status !== 'connected') {
      throw new Error('Device not connected')
    }

    await device.device.releaseInterface(device.interfaceNumber)

    if (device.device.opened) {
      await device.device.close()
    }

    set({ device: { status: 'disconnected' } })
  },

  async send(request, value = 0, data?) {
    const { device } = get()

    if (device.status !== 'connected') {
      throw new Error('Device not connected')
    }

    const result = await device.device.controlTransferOut(
      {
        requestType: 'class',
        recipient: 'interface',
        request,
        value,
        index: device.interfaceNumber,
      },
      data,
    )

    if (result.status !== 'ok') {
      throw new Error(`Control transfer failed: ${result.status}`)
    }
  },

  async receive(request, value, length) {
    const { device } = get()

    if (device.status !== 'connected') {
      throw new Error('Device not connected')
    }

    const result = await device.device.controlTransferIn(
      {
        requestType: 'class',
        recipient: 'interface',
        request,
        value,
        index: device.interfaceNumber,
      },
      length,
    )

    if (result.status !== 'ok') {
      throw new Error(`Control transfer failed: ${result.status}`)
    }

    return result.data || new DataView(new ArrayBuffer(0))
  },
}))

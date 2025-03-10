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

/* eslint-disable @typescript-eslint/no-explicit-any */
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/w3c-web-usb/index.d.ts
type USBDirection = "in" | "out"
type USBEndpointType = "bulk" | "interrupt" | "isochronous"
type USBRequestType = "standard" | "class" | "vendor"
type USBRecipient = "device" | "interface" | "endpoint" | "other"
type USBTransferStatus = "ok" | "stall" | "babble"

interface USBEndpoint {
  readonly endpointNumber: number
  readonly direction: USBDirection
  readonly type: USBEndpointType
  readonly packetSize: number
}

interface USBControlTransferParameters {
  requestType: USBRequestType
  recipient: USBRecipient
  request: number
  value: number
  index: number
}

interface USBDeviceFilter {
  vendorId?: number | undefined
  productId?: number | undefined
  classCode?: number | undefined
  subclassCode?: number | undefined
  protocolCode?: number | undefined
  serialNumber?: string | undefined
}

interface USBDeviceRequestOptions {
  filters: USBDeviceFilter[]
  exclusionFilters?: USBDeviceFilter[] | undefined
}

interface USBConnectionEventInit extends EventInit {
  device: USBDevice
}

declare class USBConfiguration {
  readonly configurationValue: number
  readonly configurationName?: string | undefined
  readonly interfaces: USBInterface[]
}

declare class USBInterface {
  constructor(configuration: USBConfiguration, interfaceNumber: number)
  readonly interfaceNumber: number
  readonly alternate: USBAlternateInterface
  readonly alternates: USBAlternateInterface[]
  readonly claimed: boolean
}

declare class USBAlternateInterface {
  constructor(deviceInterface: USBInterface, alternateSetting: number)
  readonly alternateSetting: number
  readonly interfaceClass: number
  readonly interfaceSubclass: number
  readonly interfaceProtocol: number
  readonly interfaceName?: string | undefined
  readonly endpoints: USBEndpoint[]
}

declare class USBInTransferResult {
  constructor(status: USBTransferStatus, data?: DataView)
  readonly data?: DataView | undefined
  readonly status?: USBTransferStatus | undefined
}

declare class USBOutTransferResult {
  constructor(status: USBTransferStatus, bytesWriten?: number)
  readonly bytesWritten: number
  readonly status: USBTransferStatus
}

declare class USBIsochronousInTransferPacket {
  constructor(status: USBTransferStatus, data?: DataView)
  readonly data?: DataView | undefined
  readonly status?: USBTransferStatus | undefined
}

declare class USBIsochronousInTransferResult {
  constructor(packets: USBIsochronousInTransferPacket[], data?: DataView)
  readonly data?: DataView | undefined
  readonly packets: USBIsochronousInTransferPacket[]
}

declare class USBIsochronousOutTransferPacket {
  constructor(status: USBTransferStatus, bytesWritten?: number)
  readonly bytesWritten: number
  readonly status: USBTransferStatus
}

declare class USBConnectionEvent extends Event {
  constructor(type: string, eventInitDict: USBConnectionEventInit)
  readonly device: USBDevice
}

declare class USBIsochronousOutTransferResult {
  constructor(packets: USBIsochronousOutTransferPacket[])
  readonly packets: USBIsochronousOutTransferPacket[]
}

declare class USB extends EventTarget {
  onconnect: ((this: this, ev: USBConnectionEvent) => any) | null
  ondisconnect: ((this: this, ev: USBConnectionEvent) => any) | null
  getDevices(): Promise<USBDevice[]>
  requestDevice(options?: USBDeviceRequestOptions): Promise<USBDevice>
  addEventListener(
    type: "connect" | "disconnect",
    listener: (this: this, ev: USBConnectionEvent) => any,
    useCapture?: boolean,
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void
  removeEventListener(
    type: "connect" | "disconnect",
    callback: (this: this, ev: USBConnectionEvent) => any,
    useCapture?: boolean,
  ): void
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void
}

declare class USBDevice {
  readonly usbVersionMajor: number
  readonly usbVersionMinor: number
  readonly usbVersionSubminor: number
  readonly deviceClass: number
  readonly deviceSubclass: number
  readonly deviceProtocol: number
  readonly vendorId: number
  readonly productId: number
  readonly deviceVersionMajor: number
  readonly deviceVersionMinor: number
  readonly deviceVersionSubminor: number
  readonly manufacturerName?: string | undefined
  readonly productName?: string | undefined
  readonly serialNumber?: string | undefined
  readonly configuration?: USBConfiguration | undefined
  readonly configurations: USBConfiguration[]
  readonly opened: boolean
  open(): Promise<void>
  close(): Promise<void>
  forget(): Promise<void>
  selectConfiguration(configurationValue: number): Promise<void>
  claimInterface(interfaceNumber: number): Promise<void>
  releaseInterface(interfaceNumber: number): Promise<void>
  selectAlternateInterface(
    interfaceNumber: number,
    alternateSetting: number,
  ): Promise<void>
  controlTransferIn(
    setup: USBControlTransferParameters,
    length: number,
  ): Promise<USBInTransferResult>
  controlTransferOut(
    setup: USBControlTransferParameters,
    data?: BufferSource,
  ): Promise<USBOutTransferResult>
  clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>
  transferIn(
    endpointNumber: number,
    length: number,
  ): Promise<USBInTransferResult>
  transferOut(
    endpointNumber: number,
    data: BufferSource,
  ): Promise<USBOutTransferResult>
  isochronousTransferIn(
    endpointNumber: number,
    packetLengths: number[],
  ): Promise<USBIsochronousInTransferResult>
  isochronousTransferOut(
    endpointNumber: number,
    data: BufferSource,
    packetLengths: number[],
  ): Promise<USBIsochronousOutTransferResult>
  reset(): Promise<void>
}

interface Navigator {
  readonly usb: USB
}

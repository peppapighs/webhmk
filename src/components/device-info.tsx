"use client"

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { displayUint16 } from "@/lib/display-integer"

export function DeviceInfo() {
  const { metadata } = useKeyboardDevice()

  return (
    <ul className="text-sm text-muted-foreground">
      <li className="truncate">
        <span className="font-semibold">Name:</span> {metadata.name}
      </li>
      <li className="truncate">
        <span className="font-semibold">Vendor ID:</span>{" "}
        {displayUint16(metadata.vendorId)}
      </li>
      <li className="truncate">
        <span className="font-semibold">Product ID:</span>{" "}
        {displayUint16(metadata.appProductId)}
      </li>
    </ul>
  )
}

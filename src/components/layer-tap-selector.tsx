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

import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { KeyboardDevice } from "@/types/keyboard-device"
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group"

interface ILayerSelectorPlaceholderProps {
  device: KeyboardDevice
}

export function LayerTapSelectorPlaceholder({
  device: { metadata },
}: ILayerSelectorPlaceholderProps) {
  return (
    <div className="grid grid-cols-[repeat(8,minmax(0,min-content))] gap-2">
      {[...Array(metadata.numLayers)].map((_, i) => (
        <div
          key={i}
          className="card flex size-8 flex-col items-center justify-center text-center text-sm opacity-50"
        >
          {i}
        </div>
      ))}
    </div>
  )
}

interface ILayerSelectorProps {
  layerNum: number | null
  onLayerNumChange: (layerNum: number | null) => void
}

export function LayerTapSelector({
  layerNum,
  onLayerNumChange,
}: ILayerSelectorProps) {
  const { metadata } = useKeyboardDevice()

  return (
    <ToggleGroup
      type="single"
      value={layerNum === null ? "" : `${layerNum}`}
      onValueChange={(value) =>
        onLayerNumChange(value === "" ? null : Number(value))
      }
      className="grid grid-cols-[repeat(8,minmax(0,min-content))] gap-2"
    >
      {[...Array(metadata.numLayers)].map((_, i) => (
        <ToggleGroupItem
          key={i}
          value={`${i}`}
          className="card toggle-item size-8 text-sm"
        >
          {i}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

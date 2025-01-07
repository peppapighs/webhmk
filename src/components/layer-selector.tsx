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
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"
import { Label } from "./ui/label"

interface ILayerSelectorProps {
  layerNum: number
  setLayerNum(value: number): void
}

export function LayerSelector({ layerNum, setLayerNum }: ILayerSelectorProps) {
  const { metadata } = useKeyboardDevice()

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="layer" className="ml-2 text-lg font-bold">
        Layer
      </Label>
      <RadioGroup
        defaultValue="0"
        id="layer"
        value={`${layerNum}`}
        onValueChange={(value) => setLayerNum(Number(value))}
        className="grid grid-flow-col items-center gap-2"
      >
        {[...Array(metadata.numLayers)].map((_, i) => (
          <RadioGroupItem
            key={i}
            value={`${i}`}
            className="card radio-item size-8 text-sm"
          >
            {i}
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  )
}

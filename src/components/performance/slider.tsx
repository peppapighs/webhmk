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

import { cn } from "@/lib/utils"
import { Label } from "../ui/label"
import { Slider } from "../ui/slider"

interface IPerformanceSliderProps extends React.HTMLProps<HTMLDivElement> {
  id: string
  label: string
  description: string
  config?: {
    min: number
    max: number
    value: number
    onValueChange(value: number): void
  }
}

export function PerformanceSlider({
  id,
  label,
  description,
  config,
  className,
  ...props
}: IPerformanceSliderProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <Label htmlFor={id} className="whitespace-nowrap text-lg font-bold">
        {label}
      </Label>
      <p className="mt-2 text-muted-foreground">{description}</p>
      <div className="flex flex-col py-4">
        {config === undefined ? (
          <Slider id={id} disabled value={[0]} />
        ) : (
          <Slider
            id={id}
            min={config.min}
            max={config.max}
            value={[config.value]}
            onValueChange={([value]) => config.onValueChange(value)}
          />
        )}
      </div>
    </div>
  )
}

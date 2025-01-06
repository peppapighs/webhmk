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
import { Switch } from "../ui/switch"

interface IPerformanceSwitchProps extends React.HTMLProps<HTMLDivElement> {
  id: string
  label: string
  description: string
  config?: {
    checked: boolean
    onCheckedChange(checked: boolean): void
  }
}

export function PerformanceSwitch({
  id,
  label,
  description,
  config,
  className,
  ...props
}: IPerformanceSwitchProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="flex items-center gap-4">
        {config === undefined ? (
          <Switch id={id} disabled checked={false} />
        ) : (
          <Switch
            id={id}
            checked={config.checked}
            onCheckedChange={config.onCheckedChange}
          />
        )}
        <Label htmlFor={id} className="whitespace-nowrap text-lg font-bold">
          {label}
        </Label>
      </div>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  )
}

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
import { KeyboardMetadata } from "@/types/keyboard-metadata"

interface IKeyboardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  metadata: KeyboardMetadata
  size: number
  elt(i: number): React.ReactNode
}

export function KeyboardLayout({
  metadata,
  size,
  className,
  elt,
  ...props
}: IKeyboardLayoutProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {metadata.layout.map((row, i) => (
        <div key={i} className="flex">
          {row.map((key, j) => (
            <div
              key={j}
              className="relative"
              style={{
                width: `${key.w * size}rem`,
                height: `${key.h * size}rem`,
                marginLeft: `${key.ml * size}rem`,
                marginTop: `${key.mt * size}rem`,
              }}
            >
              {elt(key.i)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

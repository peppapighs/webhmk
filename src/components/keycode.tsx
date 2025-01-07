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

import { keycodeToMetadata } from "@/lib/keycodes"
import { cn } from "@/lib/utils"

interface IKeycodeProps {
  keycode: number
}

export function Keycode({ keycode: keycodeNumber }: IKeycodeProps) {
  const keycode = keycodeToMetadata(keycodeNumber)

  return (
    <>
      <span
        className={cn(
          keycode.overlay &&
            "opacity-0 transition-opacity group-hover:opacity-100",
        )}
      >
        {keycode.render ? (
          <>
            {keycode.render}
            <span className="sr-only">{keycode.name}</span>
          </>
        ) : (
          keycode.name
        )}
      </span>
      {keycode.overlay && (
        <div className="keycode absolute inset-0 transition-opacity group-hover:opacity-0">
          {keycode.overlay}
        </div>
      )}
    </>
  )
}

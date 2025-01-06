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

import { DEFAULT_KEY_CONFIG } from "@/constants/key-config"
import { useKeyConfig } from "@/hooks/use-key-config"
import { useKeyboardDevice } from "@/hooks/use-keyboard-device"
import { useConfiguratorState } from "../configurator-state-provider"
import { Button } from "../ui/button"

export function PerformanceHeader() {
  const { metadata } = useKeyboardDevice()

  const {
    performance: { indices, setIndices, showKeymap, setShowKeymap },
  } = useConfiguratorState()

  const { setKeyConfigQuery } = useKeyConfig()

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          onClick={() =>
            setIndices([...Array(metadata.numKeys)].map((_, i) => i))
          }
        >
          Select All
        </Button>
        <Button
          variant="outline"
          disabled={indices.length === 0}
          onClick={() => {
            const allIndices = [...Array(metadata.numKeys)].map((_, i) => i)
            setIndices(allIndices.filter((i) => !indices.includes(i)))
          }}
        >
          Invert Selection
        </Button>
        <Button
          variant="outline"
          disabled={indices.length === 0}
          onClick={() => setIndices([])}
        >
          Deselect All
        </Button>
        <Button variant="outline" onClick={() => setShowKeymap(!showKeymap)}>
          {showKeymap ? "Hide Keymap" : "Show Keymap"}
        </Button>
      </div>
      <Button
        variant="destructive"
        disabled={indices.length === 0}
        onClick={() =>
          setKeyConfigQuery.mutate(
            indices.map((index) => ({
              index,
              config: DEFAULT_KEY_CONFIG,
            })),
          )
        }
      >
        Reset
      </Button>
    </header>
  )
}

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

import { DEFAULT_DYNAMIC_KEYSTROKE_CONFIG } from "@/constants/dynamic-keystroke-config"
import { useDynamicKeystrokeConfig } from "@/hooks/use-dynamic-keystroke-config"
import { useKeycode } from "@/hooks/use-keycode"
import { SP_DKS_GET_CONFIG } from "@/lib/keycodes"
import { useConfiguratorState } from "../configurator-state-provider"
import { LayerSelector } from "../layer-selector"
import { Button } from "../ui/button"

export function DynamicKeystrokeHeader() {
  const {
    profileNum,
    dynamicKeystroke: { layerNum, setLayerNum, index },
  } = useConfiguratorState()

  const keycode = useKeycode(layerNum, index)
  const { setDynamicKeystrokeConfigQuery } = useDynamicKeystrokeConfig()

  const disabled = index === null || keycode === null

  return (
    <header className="flex w-full items-center justify-between gap-6 p-3">
      <LayerSelector layerNum={layerNum} setLayerNum={setLayerNum} />
      <Button
        disabled={disabled}
        variant="destructive"
        onClick={() =>
          !disabled &&
          setDynamicKeystrokeConfigQuery.mutate([
            {
              profile: profileNum,
              index: SP_DKS_GET_CONFIG(keycode),
              config: DEFAULT_DYNAMIC_KEYSTROKE_CONFIG,
            },
          ])
        }
      >
        Reset
      </Button>
    </header>
  )
}

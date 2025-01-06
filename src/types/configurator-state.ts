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

export type KeycodeFilter = {
  id: string
  filter(keycode: number): boolean
}

export type ConfiguratorStateState = {
  tab: string
  profileNum: number
  remap: {
    layerNum: number
    index: number | null
    advancedFunction: string
    keycodeFilter: KeycodeFilter | null
  }
  performance: {
    indices: number[]
    showKeymap: boolean
  }
  debug: {
    isDebugging: boolean
  }
}

export type ConfiguratorStateAction = {
  reset(): void
  setTab(tab: string): void
  setProfileNum(profileNum: number): void

  remap: {
    setLayerNum(layerNum: number): void
    setIndex(index: number | null): void
    setAdvancedFunction(advancedFunction: string): void
    setKeycodeFilter(keycodeFilter: KeycodeFilter | null): void
  }

  performance: {
    setIndices(indices: number[]): void
    setShowKeymap(showKeymap: boolean): void
  }

  debug: {
    toggleDebugging(): void
  }
}

export type ConfiguratorState = ConfiguratorStateState & ConfiguratorStateAction

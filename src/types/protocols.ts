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

export enum ClassRequest {
  CLASS_REQUEST_PROTOCOL_VERSION = 0,
  CLASS_REQUEST_FIRMWARE_VERSION,
  CLASS_REQUEST_BOOTLOADER,
  CLASS_REQUEST_REBOOT,
  CLASS_REQUEST_FACTORY_RESET,
  CLASS_REQUEST_RECALIBRATE,
  CLASS_REQUEST_SWITCH_DEBUG,
  CLASS_REQUEST_SW_ID,
  CLASS_REQUEST_TAP_HOLD,
  CLASS_REQUEST_KEY_CONFIG,
  CLASS_REQUEST_KEYMAP,
  CLASS_REQUEST_DKS_CONFIG,
}

export enum ClassRequestIndex {
  CLASS_REQUEST_INDEX_GET = 0,
  CLASS_REQUEST_INDEX_SET,
}

export type ClassRequestSwitchDebugResponse = {
  adcValues: number[]
  distances: number[]
}

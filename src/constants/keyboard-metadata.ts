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

import { LT, PTO } from "@/lib/keycodes"
import { keyboardMetadataSchema } from "@/types/keyboard-metadata"
import { Keycode } from "@/types/keycodes"
import { z } from "zod"

const schema = z.array(keyboardMetadataSchema)

export const KEYBOARD_METADATA = schema.parse([
  {
    name: "GAUSS64",
    vendorId: 0xab50,
    appProductId: 0xab01,

    numProfiles: 4,
    numLayers: 4,
    numKeys: 64,
    numDksConfig: 16,

    layout: [
      [
        { i: 0, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 1, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 2, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 3, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 4, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 5, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 6, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 7, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 8, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 9, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 10, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 11, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 12, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 13, w: 1.5, h: 1, ml: 0, mt: 0 },
      ],
      [
        { i: 14, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 15, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 16, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 17, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 18, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 19, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 20, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 21, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 22, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 23, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 24, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 25, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 26, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 27, w: 1.5, h: 1, ml: 0, mt: 0 },
      ],
      [
        { i: 28, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 29, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 30, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 31, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 32, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 33, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 34, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 35, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 36, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 37, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 38, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 39, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 40, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 41, w: 1, h: 1, ml: 0, mt: 0 },
      ],
      [
        { i: 42, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 43, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 44, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 45, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 46, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 47, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 48, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 49, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 50, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 51, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 52, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 53, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 54, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 55, w: 1, h: 1, ml: 0, mt: 0 },
      ],
      [
        { i: 56, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 57, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 58, w: 1.5, h: 1, ml: 0, mt: 0 },
        { i: 59, w: 7, h: 1, ml: 0, mt: 0 },
        { i: 60, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 61, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 62, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 63, w: 1, h: 1, ml: 0, mt: 0 },
      ],
    ],
    defaultKeymap: [
      [
        Keycode.KC_ESC,
        Keycode.KC_1,
        Keycode.KC_2,
        Keycode.KC_3,
        Keycode.KC_4,
        Keycode.KC_5,
        Keycode.KC_6,
        Keycode.KC_7,
        Keycode.KC_8,
        Keycode.KC_9,
        Keycode.KC_0,
        Keycode.KC_MINS,
        Keycode.KC_EQL,
        Keycode.KC_BSPC, // R1
        Keycode.KC_TAB,
        Keycode.KC_Q,
        Keycode.KC_W,
        Keycode.KC_E,
        Keycode.KC_R,
        Keycode.KC_T,
        Keycode.KC_Y,
        Keycode.KC_U,
        Keycode.KC_I,
        Keycode.KC_O,
        Keycode.KC_P,
        Keycode.KC_LBRC,
        Keycode.KC_RBRC,
        Keycode.KC_BSLS, // R2
        Keycode.KC_CAPS,
        Keycode.KC_A,
        Keycode.KC_S,
        Keycode.KC_D,
        Keycode.KC_F,
        Keycode.KC_G,
        Keycode.KC_H,
        Keycode.KC_J,
        Keycode.KC_K,
        Keycode.KC_L,
        Keycode.KC_SCLN,
        Keycode.KC_QUOT,
        Keycode.KC_ENT,
        Keycode.KC_VOLU, // R3
        Keycode.KC_LSFT,
        Keycode.KC_Z,
        Keycode.KC_X,
        Keycode.KC_C,
        Keycode.KC_V,
        Keycode.KC_B,
        Keycode.KC_N,
        Keycode.KC_M,
        Keycode.KC_COMM,
        Keycode.KC_DOT,
        Keycode.KC_SLSH,
        Keycode.KC_RSFT,
        Keycode.KC_UP,
        LT(1, Keycode.KC_VOLD), // R4
        Keycode.KC_LCTL,
        Keycode.KC_LGUI,
        Keycode.KC_LALT,
        Keycode.KC_SPC,
        Keycode.KC_RALT,
        Keycode.KC_LEFT,
        Keycode.KC_DOWN,
        Keycode.KC_RGHT, // R5
      ],
      [
        Keycode.KC_GRV,
        Keycode.KC_F1,
        Keycode.KC_F2,
        Keycode.KC_F3,
        Keycode.KC_F4,
        Keycode.KC_F5,
        Keycode.KC_F6,
        Keycode.KC_F7,
        Keycode.KC_F8,
        Keycode.KC_F9,
        Keycode.KC_F10,
        Keycode.KC_F11,
        Keycode.KC_F12,
        Keycode.KC_DEL, // R1
        Keycode.KC_TRNS,
        PTO(0),
        PTO(1),
        PTO(2),
        PTO(3),
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS, // R2
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS, // R3
        Keycode.KC_TRNS,
        Keycode.SP_MAGIC_BOOTLOADER,
        Keycode.SP_MAGIC_REBOOT,
        Keycode.SP_MAGIC_FACTORY_RESET,
        Keycode.SP_MAGIC_RECALIBRATE,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS, // R4
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS,
        Keycode.KC_TRNS, // R5
      ],
      [...Array(64).fill(Keycode.KC_TRNS)],
      [...Array(64).fill(Keycode.KC_TRNS)],
    ],
  },
  {
    name: "HE8",
    vendorId: 0xab50,
    appProductId: 0xab02,

    numProfiles: 4,
    numLayers: 4,
    numKeys: 8,
    numDksConfig: 16,

    layout: [
      [
        { i: 0, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 1, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 2, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 3, w: 1, h: 1, ml: 0, mt: 0 },
      ],
      [
        { i: 4, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 5, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 6, w: 1, h: 1, ml: 0, mt: 0 },
        { i: 7, w: 1, h: 1, ml: 0, mt: 0 },
      ],
    ],
    defaultKeymap: [
      [
        Keycode.KC_MPLY,
        Keycode.KC_UP,
        Keycode.KC_PSCR,
        Keycode.KC_VOLU, // R1
        Keycode.KC_LEFT,
        Keycode.KC_DOWN,
        Keycode.KC_RGHT,
        LT(1, Keycode.KC_VOLD), // R2
      ],
      [
        PTO(0),
        PTO(1),
        PTO(2),
        PTO(3), // R1
        Keycode.SP_MAGIC_BOOTLOADER,
        Keycode.SP_MAGIC_REBOOT,
        Keycode.SP_MAGIC_FACTORY_RESET,
        Keycode.SP_MAGIC_RECALIBRATE, // R2
      ],
      [...Array(8).fill(Keycode.KC_TRNS)],
      [...Array(8).fill(Keycode.KC_TRNS)],
    ],
  },
])

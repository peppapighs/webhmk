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

import { z } from "zod"

const keyboardLayoutSchema = z.array(
  z.array(
    z.object({
      i: z.number().min(0).max(255),
      w: z.number().min(1),
      h: z.number().min(1),
      ml: z.number().min(0),
      mt: z.number().min(0),
    }),
  ),
)

const keymapSchema = z.array(z.array(z.number().min(0).max(65535)))

export const keyboardMetadataSchema = z
  .object({
    name: z.string(),
    vendorId: z.number().min(0x0000).max(0xffff),
    appProductId: z.number().min(0x0000).max(0xffff),
    bootProductId: z.number().min(0x0000).max(0xffff).optional(),

    numProfiles: z.number().min(1).max(16),
    numLayers: z.number().min(1).max(16),
    numKeys: z.number().min(1).max(256),
    numDksConfig: z.number().min(1).max(256),

    layout: keyboardLayoutSchema,
    defaultKeymap: keymapSchema,
  })
  .refine(
    (data) =>
      data.layout.reduce((acc, row) => acc + row.length, 0) === data.numKeys &&
      data.defaultKeymap.length === data.numLayers &&
      data.defaultKeymap.every((layer) => layer.length === data.numKeys),
    "Invalid size of the layout or default keymap",
  )

export type KeyboardMetadata = z.infer<typeof keyboardMetadataSchema>

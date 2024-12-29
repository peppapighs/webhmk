interface ILayoutSwitch {
  i: number
  w: number
  h: number
  ml: number
  mt: number
}

interface IKeyboard {
  name: string
  vendorId: number
  appProductId: number
  bootloaderProductId?: number
  numProfiles: number
  numLayers: number
  numKeys: number
  layout: ILayoutSwitch[][]
}

export const KEYBOARDS: IKeyboard[] = [
  {
    name: 'GAUSS64',
    vendorId: 0xab50,
    appProductId: 0xab01,
    numProfiles: 4,
    numLayers: 4,
    numKeys: 64,
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
  },
]

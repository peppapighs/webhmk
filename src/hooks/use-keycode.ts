import { useKeymap } from "./use-keymap"

export const useKeycode = (layerNum: number, index: number | null) => {
  const { status, keymap } = useKeymap()

  if (index === null || status !== "success") {
    return null
  }

  return keymap[layerNum][index]
}

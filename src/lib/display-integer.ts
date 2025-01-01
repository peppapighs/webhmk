export const displayUint16 = (value: number) => {
  return `0x${value.toString(16).toUpperCase().padStart(4, "0")}`
}

export const displayUint16 = (value: number) => {
  return `0x${value.toString(16).toUpperCase().padStart(4, "0")}`
}

export const displayDistance = (value: number) => {
  return `${(value / 20).toFixed(2)}`
}

export const displayUInt16 = (value: number) => {
  return '0x' + value.toString(16).padStart(4, '0').toUpperCase()
}

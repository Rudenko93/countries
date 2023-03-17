export const sliceString = (str) => {
  if (str.length < 30) return str
  if (str[30] !== " ") return str.slice(0, 30) + "..."
  else return str.slice(0, 24) + "..."
}

export function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function shortenNumber (number, decimals) {
  decimals = (decimals === undefined) ? 0 : decimals
  if (number >= 1000000000) {
    return `${Number((number / 1000000000).toFixed(decimals))} B`
  } else if (number >= 1000000) {
    return `${Number((number / 1000000).toFixed(decimals))} M`
  } else if (number >= 1000) {
    return `${Number((number / 1000).toFixed(decimals))} K`
  } else {
    return number
  }
}

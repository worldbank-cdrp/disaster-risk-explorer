import { t } from './i18n'

export function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function shortenNumber (number, decimals, abbreviate) {
  decimals = (decimals === undefined) ? 0 : decimals
  abbreviate = (abbreviate === undefined) ? true : abbreviate
  let k = t('K')
  let m = t('M')
  let b = t('B')
  if (!abbreviate) {
    k = t('Thousand')
    m = t('Million')
    b = t('Billion')
  }
  if (Math.abs(number) >= 1000000000) {
    return `${Number((number / 1000000000).toFixed(decimals))} ${b}`
  } else if (Math.abs(number) >= 1000000) {
    return `${Number((number / 1000000).toFixed(decimals))} ${m}`
  } else if (Math.abs(number) >= 1000) {
    return `${Number((number / 1000).toFixed(decimals))} ${k}`
  } else {
    return number
  }
}

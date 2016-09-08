'use strict'

let currentLang = 'en'

export function setLanguage (lang) {
  currentLang = lang
}

export function getAvailableLanguages () {
  return ['en', 'es']
}

export function isValidLanguage (l) {
  return getAvailableLanguages().indexOf(l) !== -1
}

export function t (string) {
  // TEMP!
  // Use something like transifex.
  let l = {
    'hello': {
      en: 'Hello',
      es: 'Hola'
    }
  }
  return l[string][currentLang]
}

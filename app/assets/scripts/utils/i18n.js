'use strict'

let currentLang = 'en'

export function setLanguage (lang) {
  currentLang = lang
}

export function getLanguage () {
  return currentLang
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
  // Transifex provides 1 file per language which we can require.
  let l = {
    en: { // require('./langfiles/en')
      'hello': 'Hello'
    },
    es: {
      'hello': 'Hola'
    }
  }
  if (!l[currentLang][string]) {
    if (process.env.DS_ENV === 'testing') {
      throw new Error(`Missing (${currentLang}) translation for (${string})`)
    }
    if (process.env.DS_ENV !== 'production') {
      console.error(`Missing (${currentLang}) translation for (${string})`)
    }
  }
  return l[currentLang][string] || ''
}

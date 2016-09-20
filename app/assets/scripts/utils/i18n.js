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

export function t (string, replace = {}) {
  // TEMP!
  // Use something like transifex.
  // Transifex provides 1 file per language which we can require.
  let l = {
    en: { // require('./langfiles/en')
      'screen small': 'Screen is too small',
      'Average Annual Loss from': 'Average Annual Loss from',
      'hurricane': 'Hurricane',
      'flood': 'Flood',
      'earthquake': 'Earthquake',
      'legend description': 'The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.',
      'Download Profile': 'Download Profile',
      'risk': 'Risk',
      'year': 'Year',
      'building': 'Building exposure',
      'data by': 'Select data by',
      'basemap': 'Change Basemap',
      '2000': '2000',
      '2001': '2001',
      'retrofitted': 'Retrofitted',
      'opt2': 'Normal',
      'admin0': 'Admin Level 0',
      'admin1': 'Admin Level 1',
      'km10': '0km Grids',
      'basic': 'Basic',
      'special': 'Special',
      'Show/hide parameter options': 'Show/hide parameter options'
    },
    es: {
      'screen small': 'screen small ES',
      'Average Annual Loss from': 'Average Annual Loss from ES',
      'hurricane': 'Hurricane ES',
      'flood': 'Flood ES',
      'earthquake': 'Earthquake ES',
      'legend description': 'The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes. ES',
      'Download Profile': 'Download Profile ES',
      'risk': 'Risk ES',
      'year': 'Year ES',
      'building': 'Building exposure ES',
      'data by': 'Select data by ES',
      'basemap': 'Change Basemap ES',
      '2000': '2000 ES',
      '2001': '2001 ES',
      'retrofitted': 'Retrofitted ES',
      'opt2': 'Normal ES',
      'admin0': 'Admin Level 0 ES',
      'admin1': 'Admin Level 1 ES',
      'km10': '0km Grids ES',
      'basic': 'Basic ES',
      'special': 'Special ES',
      'Show/hide parameter options': 'Show/hide parameter options ES'
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

  let res = l[currentLang][string] || ''
  Object.keys(replace).forEach(o => {
    let regex = new RegExp(`{${o}}`, 'g')
    res = res.replace(regex, replace[o])
  })

  return res
}

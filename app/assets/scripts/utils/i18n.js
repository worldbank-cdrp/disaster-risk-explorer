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
      'windstorm': 'Windstorm',
      'legend description': 'The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.',
      'Download Profile': 'Download Profile',
      'risk': 'Risk',

      'metric': 'Metric',
      'loss': 'Loss',
      'exposure': 'Exposure',
      'return': 'Return Period',

      'year': 'Year',
      'building': 'Building exposure',
      'data by': 'Select data by',
      'basemap': 'Change Basemap',
      '10 Years': '10 Years',
      '50 Years': '50 Years',
      '100 Years': '100 Years',
      '250 Years': '250 Years',
      '500 Years': '500 Years',
      '1000 Years': '1000 Years',
      'opacity': 'Data Visibility',
      'full': 'Full',
      'medium': 'Medium',
      'low': 'None',
      'retrofitted': 'Retrofitted',
      'opt2': 'Normal',
      'admin0': 'Admin Level 0',
      'admin1': 'Admin Level 1',
      'km10': '10km Grids',
      'basic': 'Light',
      'special': 'Satellite Imagery',
      'Show/hide parameter options': 'Show/hide parameter options',

      'default-title': 'World Bank Risk Tool',
      'default-text': 'Welcome to World Bank Risk Tool. Here you can search countries in Central America and discover details of the total risk, exposure, and potential loss from Earthquakes or Hurricanes.',

      'legend-caption': 'Possible explanatory text can go here for the given selection'
    },
    es: {
      'screen small': 'screen small ES',
      'Average Annual Loss from': 'Average Annual Loss from ES',
      'hurricane': 'Hurricane ES',
      'flood': 'Flood ES',
      'earthquake': 'Earthquake ES',
      'windstorm': 'Windstorm ES',
      'legend description': 'The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes. ES',
      'Download Profile': 'Download Profile ES',
      'risk': 'Risk ES',

      'metric': 'Metric ES',
      'loss': 'Average Anuall Loss ES',
      'exposure': 'Exposure',
      'return': 'Return ES',

      'building': 'Building exposure ES',
      'data by': 'Select data by ES',
      'basemap': 'Change Basemap ES',
      '10 Years': '10 Years ES',
      '50 Years': '50 Years ES',
      '100 Years': '100 Years ES',
      '250 Years': '250 Years ES',
      '500 Years': '500 Years ES',
      '1000 Years': '1000 Years ES',
      'opacity': 'Data Visibility ES',
      'full': 'Full ES',
      'medium': 'Medium ES',
      'low': 'None ES',
      'retrofitted': 'Retrofitted ES',
      'opt2': 'Normal ES',
      'admin0': 'Admin Level 0 ES',
      'admin1': 'Admin Level 1 ES',
      'km10': '10km Grids ES',
      'basic': 'Light ES',
      'special': 'Satellite Imagery ES',
      'Show/hide parameter options': 'Show/hide parameter options ES',

      'default-title': 'World Bank Risk Tool ES',
      'default-text': 'Welcome to World Bank Risk Tool. Here you can search countries in Central America and discover details of the total risk, exposure, and potential loss from Earthquakes or Hurricanes. ES',

      'legend-caption': 'Possible explanatory text can go here for the given selection ES'
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

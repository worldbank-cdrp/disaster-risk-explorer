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
      'Download Profile': 'Download Country Profile PDF',
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
      'AAL': 'AAL',
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

      'legend-caption': 'Possible explanatory text can go here for the given selection',
      'BZ': 'Belize',
      'CR': 'Costa Rica',
      'SV': 'El Salvadaor',
      'GD': 'Grenada',
      'GT': 'Guatemala',
      'HN': 'Hondouras',
      'JM': 'Jamacia',
      'NI': 'Nicaragua',
      'PA': 'Panama',
      'LC': 'Saint Lucia',
      '-': '-',
      'BZ-BZ': 'Belize',
      'BZ-CY': 'Cayo',
      'BZ-CZL': 'Corozal',
      'BZ-OW': 'Orange Walk',
      'BZ-SC': 'Stann Creek',
      'BZ-TOL': 'Toledo',
      'CR-A': 'Alajuela',
      'CR-C': 'Cartago',
      'CR-G': 'Guanacaste',
      'CR-H': 'Heredia',
      'CR-L': 'Limón',
      'CR-P': 'Puntarenas',
      'CR-SJ': 'San José',
      'GD-01': 'Saint Andrew',
      'GD-02': 'Saint David',
      'GD-03': 'Saint George',
      'GD-04': 'Saint John',
      'GD-05': 'Saint Mark',
      'GD-06': 'Saint Patrick',
      'GD-10': 'Southern Grenadine Islands',
      'GT-AV': 'Alta Verapaz',
      'GT-BV': 'Baja Verapaz',
      'GT-CM': 'Chimaltenango',
      'GT-CQ': 'Chiquimula',
      'GT-ES': 'Escuintla',
      'GT-GU': 'Guatemala',
      'GT-HU': 'Huehuetenango',
      'GT-IZ': 'Izabal',
      'GT-JA': 'Jalapa',
      'GT-JU': 'Jutiapa',
      'GT-PE': 'Petén',
      'GT-PR': 'El Progreso',
      'GT-QC': 'Quiché',
      'GT-QZ': 'Quetzaltenango',
      'GT-RE': 'Retalhuleu',
      'GT-SA': 'Sacatepéquez',
      'GT-SM': 'San Marcos',
      'GT-SO': 'Sololá',
      'GT-SR': 'Santa Rosa',
      'GT-SU': 'Suchitepéquez',
      'GT-TO': 'Totonicapán',
      'GT-ZA': 'Zacapa',
      'HN-AT': 'Atlántida',
      'HN-CH': 'Choluteca',
      'HN-CL': 'Colón',
      'HN-CM': 'Comayagua',
      'HN-CP': 'Copán',
      'HN-CR': 'Cortés',
      'HN-EP': 'El Paraíso',
      'HN-FM': 'Francisco Morazán',
      'HN-GD': 'Gracias a Dios',
      'HN-IB': 'Islas de la Bahía',
      'HN-IN': 'Intibucá',
      'HN-LE': 'Lempira',
      'HN-LP': 'La Paz',
      'HN-OC': 'Ocotepeque',
      'HN-OL': 'Olancho',
      'HN-SB': 'Santa Bárbara',
      'HN-VA': 'Valle',
      'HN-YO': 'Yoro',
      'JM-01': 'Kingston',
      'JM-02': 'Saint Andrew',
      'JM-03': 'Saint Thomas',
      'JM-04': 'Portland',
      'JM-05': 'Saint Mary',
      'JM-06': 'Saint Ann',
      'JM-07': 'Trelawny',
      'JM-08': 'Saint James',
      'JM-09': 'Hanover',
      'JM-10': 'Westmoreland',
      'JM-11': 'Saint Elizabeth',
      'JM-12': 'Manchester',
      'JM-13': 'Clarendon',
      'JM-14': 'Saint Catherine',
      'LC-01': 'Anse la Raye',
      'LC-02': 'Castries',
      'LC-03': 'Choiseul',
      'LC-05': 'Dennery',
      'LC-06': 'Gros Islet',
      'LC-07': 'Laborie',
      'LC-08': 'Micoud',
      'LC-10': 'Soufrière',
      'LC-11': 'Vieux Fort',
      'LC-12': 'Canaries',
      'NI-AN': 'Atlántico Norte',
      'NI-AS': 'Atlántico Sur',
      'NI-BO': 'Boaco',
      'NI-CA': 'Carazo',
      'NI-CI': 'Chinandega',
      'NI-CO': 'Chontales',
      'NI-ES': 'Estelí',
      'NI-GR': 'Granada',
      'NI-JI': 'Jinotega',
      'NI-LE': 'León',
      'NI-MD': 'Madriz',
      'NI-MN': 'Managua',
      'NI-MS': 'Masaya',
      'NI-MT': 'Matagalpa',
      'NI-NS': 'Nueva Segovia',
      'NI-RI': 'Rivas',
      'NI-SJ': 'Río San Juan',
      'PA-1': 'Bocas del Toro',
      'PA-10': 'Panamá Oeste',
      'PA-2': 'Coclé',
      'PA-3': 'Colón',
      'PA-4': 'Chiriquí',
      'PA-5': 'Darién',
      'PA-6': 'Herrera',
      'PA-7': 'Los Santos',
      'PA-8': 'Panamá',
      'PA-9': 'Veraguas',
      'PA-EM': 'Emberá',
      'PA-KY': 'Kuna Yala',
      'PA-NB': 'Ngöbe-Buglé',
      'SV-AH': 'Ahuachapán',
      'SV-CA': 'Cabañas',
      'SV-CH': 'Chalatenango',
      'SV-CU': 'Cuscatlán',
      'SV-LI': 'La Libertad',
      'SV-MO': 'Morazán',
      'SV-PA': 'La Paz',
      'SV-SA': 'Santa Ana',
      'SV-SM': 'San Miguel',
      'SV-SO': 'Sonsonate',
      'SV-SS': 'San Salvador',
      'SV-SV': 'San Vicente',
      'SV-UN': 'La Unión',
      'SV-US': 'Usulután'
    },
    es: {
      'screen small': 'screen small ES',
      'Average Annual Loss from': 'Average Annual Loss from ES',
      'hurricane': 'Hurricane ES',
      'flood': 'Flood ES',
      'earthquake': 'Earthquake ES',
      'windstorm': 'Windstorm ES',
      'legend description': 'The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes. ES',
      'Download Profile': 'Download Country Profile PDF ES',
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
      'AAL': 'AAL ES',
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

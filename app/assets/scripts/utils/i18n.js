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

      // Site Info
      'Disaster Risk Explorer for Central America': 'Disaster Risk Explorer for Central America',
      'About the project': 'About the project',
      'Screen is too small': 'Screen is too small',
      'Show/hide parameter options': 'Show/hide parameter options',

      // Selection Panel
      'Selection Options': 'Selection Options',

      'metric': 'Metric',
      'loss': 'Loss',
      'hazard': 'Hazard',
      'exposure': 'Exposure',

      'risk': 'Risk',
      'flood': 'Flood',
      'earthquake': 'Earthquake',
      'windstorm': 'Windstorm',

      'return': 'Return Period',
      '10 Years': '10 Years',
      '50 Years': '50 Years',
      '100 Years': '100 Years',
      '250 Years': '250 Years',
      '500 Years': '500 Years',
      '1000 Years': '1000 Years',
      'data by': 'Select data by',
      'admin0': 'Admin Level 0',
      'admin1': 'Admin Level 1',
      'km10': '10km Grids',
      'AAL': 'AAL',

      'opacity': 'Data Visibility',
      'full': 'Full',
      'medium': 'Medium',
      'low': 'None',

      'basemap': 'Change Basemap',
      'basic': 'Light',
      'special': 'Satellite Imagery',

      // Legend
      'View': 'View',
      'by:': 'by:',
      'Absolute': 'Absolute',
      'Relative': 'Relative',

      // Results Panel
      'Exposure': 'Exposure',
      'Building Stock Exposure': 'Building Stock Exposure',
      'Average Annual Loss': 'Average Annual Loss',
      'Probable Maximum Loss': 'Probable Maximum Loss',
      'Download Country Profile PDF': 'Download Country Profile PDF',
      'Launch cost and benefit calculator': 'Launch cost and benefit calculator',

      // Calculator
      'Risk mitigation cost and benefit calculator': 'Risk mitigation cost and benefit calculator',
      'Conversion Settings': 'Conversion Settings',
      'Country Selected': 'Country Selected',
      'Subregion Selected': 'Subregion Selected',
      'Type of Conversion': 'Type of Conversion',
      'Retrofit': 'Retrofit',
      'Replace': 'Replace',
      'retrofit': 'retrofit',
      'replace': 'replace',
      'Replaced': 'Replaced',
      'replaced': 'replaced',
      'Retrofitted': 'Retrofitted',
      'retrofitted': 'retrofitted',
      'Unit cost per': 'Unit cost per',
      'building': 'building',
      'Percent of buildings': 'Percent of buildings',

      'Building Stocks Converted': 'Building Stocks Converted',
      'are': 'are',
      'with': 'with',

      'Results': 'Results',
      'Reduction of overall AAL': 'Reduction of overall AAL',
      'Total': 'Total',
      'cost': 'cost',
      'Flat rate years to break even': 'Flat rate years to break even',
      'Percent Change in AAL for these housing units': 'Percent Change in AAL for these housing Units',
      'Change in overall AAL': 'Change in overall AAL',

      'Building Stock types most at risk': 'Building Stock types most at risk',
      '(AAL as % of value)': '(AAL as % of value)',

      // Countries
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

      // Site Info
      'Disaster Risk Explorer for Central America': 'Disaster Risk Explorer for Central America ES',
      'About the project': 'About the project ES',
      'Screen is too small': 'Screen is too small ES',
      'Show/hide parameter options': 'Show/hide parameter options ES',

      // Selection Panel
      'Selection Options': 'Selection Options ES',

      'metric': 'Metric ES',
      'loss': 'Loss ES',
      'hazard': 'Hazard ES',
      'exposure': 'Exposure ES',

      'risk': 'Risk ES',
      'flood': 'Flood ES',
      'earthquake': 'Earthquake ES',
      'windstorm': 'Windstorm ES',

      'return': 'Return Period ES',
      '10 Years': '10 Years ES',
      '50 Years': '50 Years ES',
      '100 Years': '100 Years ES',
      '250 Years': '250 Years ES',
      '500 Years': '500 Years ES',
      '1000 Years': '1000 Years ES',
      'data by': 'Select data by ES',
      'admin0': 'Admin Level 0 ES',
      'admin1': 'Admin Level 1 ES',
      'km10': '10km Grids ES',
      'AAL': 'AAL ES',
      'opacity': 'Data Visibility ES',
      'full': 'Full ES',
      'medium': 'Medium ES',
      'low': 'None ES',

      'basemap': 'Change Basemap ES',
      'basic': 'Light ES',
      'special': 'Satellite Imagery ES',

      // Legend
      'View': 'View',
      'by:': 'by ES:',
      'Absolute': 'Absolute',
      'Relative': 'Relative',

      // Results Panel
      'Exposure': 'Exposure ES',
      'Building Stock Exposure': 'Building Stock Exposure ES',
      'Average Annual Loss': 'Average Annual Loss ES',
      'Probable Maximum Loss': 'Probable Maximum Loss ES',
      'Download Country Profile PDF': 'Download Country Profile PDF ES',
      'Launch cost and benefit calculator': 'Launch cost and benefit calculator ES',

      // Calculator
      'Risk mitigation cost and benefit calculator': 'Risk mitigation cost and benefit calculator ES',
      'Conversion Settings': 'Conversion Settings ES',
      'Country Selected': 'Country Selected ES',
      'Subregion Selected': 'Subregion Selected ES',
      'Type of Conversion': 'Type of Conversion ES',
      'Retrofit': 'Retrofit',
      'Replace': 'Replace',
      'retrofit': 'retrofit',
      'replace': 'replace',
      'Replaced': 'Replaced',
      'replaced': 'replaced',
      'Retrofitted': 'Retrofitted',
      'retrofitted': 'retrofitted',
      'Unit cost per': 'Unit cost per',
      'building': 'building',
      'Percent of buildings': 'Percent of buildings',

      'Building Stocks Converted': 'Building Stocks Converted ES',
      'are': 'are',
      'with': 'with ES',

      'Results': 'Results ES',
      'Reduction of overall AAL': 'Reduction of overall AAL ES',
      'Total': 'Total',
      'cost': 'cost ES',
      'Flat rate years to break even': 'Flat rate years to break even ES',
      'Percent Change in AAL for these housing units': 'Percent Change in AAL for these housing Units ES',
      'Change in overall AAL': 'Change in overall AAL ES',

      'Building Stock types most at risk': 'Building Stock types most at risk ES',
      '(AAL as % of value)': '(AAL as % of value) ES',

      // Countries
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
      'PA-1': 'PA-1',
      'PA-2': 'PA-2',
      'GT-AV': 'GT-AV',
      'GT-BV': 'GT-BV',
      'GT-CM': 'GT-CM',
      'GT-CQ': 'GT-CQ',
      'GT-ES': 'GT-ES',
      'GT-GU': 'GT-GU',
      'HN-AT': 'HN-AT',
      'SV-SV': 'SV-SV'
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

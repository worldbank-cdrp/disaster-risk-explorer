import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'admin0-99f3zb',
    idProp: 'id',
    url: 'mapbox://wbg-cdrp.6atr85z8'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'admin1-2q7pcm',
    idProp: 'id',
    url: 'mapbox://wbg-cdrp.c5i9nddp'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'km10-86jo9v',
    idProp: 'code',
    url: 'mapbox://wbg-cdrp.28e8z2bw'
  },
  km10Circles: {
    id: 'km10Circles',
    sourceLayer: 'km10Points',
    idProp: 'code',
    url: 'mapbox://wbg-cdrp.85jp7h9w'
  }
}

export const mapSettings = {
  basemap: {
    basic: {
      id: 'basic',
      url: 'mapbox://styles/wbg-cdrp/ciuh7zn1d00072is1f1utb1h8'},
    special: {
      id: 'satellite',
      url: 'mapbox://mapbox.satellite'}
  },
  centerpoint: [-110.157227, 13.984711],
  initialZoom: {
    admin0: 3,
    admin1: 3,
    km10: 3
  },
  selectedZoom: {
    admin0: 5.75,
    admin1: 5.75,
    km10: 5.75
  },
  maxBounds: [
    [-125, 0],
    [-40, 28]
  ],
  opacityLevels: {
    full: 0.8,
    medium: 0.4,
    low: 0.25
  }
}

export const availableRPs = {
  admin0: {
    loss: {
      windstorm: [
        'AAL',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ],
      earthquake: [
        'AAL',
        '10',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ],
      flood: [
        'AAL',
        '05',
        '10',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ]
    },
    risk: {
      windstorm: [],
      earthquake: [],
      flood: []
    }
  },
  admin1: {
    loss: {
      windstorm: [
        'AAL',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ],
      earthquake: [
        'AAL'
      ],
      flood: [
        '05',
        '10',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ]
    },
    risk: {
      windstorm: [],
      earthquake: [],
      flood: []
    }
  },
  'km10': {
    loss: {
      windstorm: [
        'AAL',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ],
      earthquake: [
        'AAL'
      ],
      flood: [
        '05',
        '10',
        '25',
        '50',
        '100',
        '250',
        '500',
        '1000'
      ]
    },
    risk: {
      windstorm: [
        '100',
        '250',
        '500',
        '1000'
      ],
      earthquake: [
        '100',
        '250',
        '500',
        '1000',
        '2500'
      ],
      flood: [
        '100',
        '250',
        '500',
        '1000'
      ]
    }
  }
}

export const graphCols = {
  'LS_EQ': [
    '10',
    '50',
    '100',
    '250',
    '500',
    '1000'
  ],
  'LS_FL': [
    '5',
    '10',
    '25',
    '50',
    '100',
    '250',
    '500',
    '1000'
  ],
  'LS_WS': [
    '25',
    '50',
    '100',
    '250',
    '500',
    '1000'
  ]
}

export const measurementStrings = {
  windstorm: 'Feet Per Second',
  earthquake: 'Feet Per Second',
  flood: 'Gallons'
}

// missing extents
// belize
// Jamaica//
// Saint Lucia
// Grenada

export const adminNames = {
  'BZ': 'Belize',
  'BZ-BZ': 'Belize',
  'BZ-CY': 'Cayo',
  'BZ-CZ': 'Corozal',
  'BZ-OW': 'Orange Walk',
  'BZ-SC': 'Stann Creek',
  'BZ-TO': 'Toledo',
  'CR': 'Costa Rica',
  'CR-AL': 'Alajuela',
  'CR-CA': 'Cartago',
  'CR-GU': 'Guanacaste',
  'CR-HE': 'Heredia',
  'CR-LI': 'Limón',
  'CR-PU': 'Puntarenas',
  'CR-SJ': 'San José',
  'GD': 'Grenada',
  'GD-AN': 'Saint Andrew',
  'GD-DA': 'Saint David',
  'GD-GE': 'Saint George',
  'GD-JO': 'Saint John',
  'GD-05': 'Saint Mark',
  'GD-PA': 'Saint Patrick',
  'GD-CA': 'Southern Grenadine Islands',
  'GT': 'Guatemala',
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
  'HN': 'Honduras',
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
  'JM': 'Jamaica',
  'JM-KI': 'Kingston', // 01
  'JM-SD': 'Saint Andrew',
  'JM-ST': 'Saint Thomas',
  'JM-PO': 'Portland',
  'JM-SM': 'Saint Mary',
  'JM-SN': 'Saint Ann',
  'JM-TR': 'Trelawny',
  'JM-SJ': 'Saint James',
  'JM-HA': 'Hanover',
  'JM-WE': 'Westmoreland',
  'JM-SE': 'Saint Elizabeth',
  'JM-MA': 'Manchester',
  'JM-CL': 'Clarendon',
  'JM-SC': 'Saint Catherine',
  'LC-AR': 'Anse la Raye',
  'LC-CN': 'Castries',
  'LC-CS': 'Choiseul',
  'LC-DE': 'Dennery',
  'LC-GI': 'Gros Islet',
  'LC-LB': 'Laborie',
  'LC-MI': 'Micoud',
  'LC-CO': 'Soufrière',
  'LC-VF': 'Vieux Fort',
  // 'LC-12': 'Canaries',
  'LC': 'Saint Lucia',
  'NI': 'Nicaragua',
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
  'PA': 'Panama',
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
  'SV': 'El Salvador',
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
}

const eqColors = chroma.scale(['#ffd671', '#7a1d0e']).colors(6)
const wsColors = chroma.scale(['#CAF2BA', '#34413F']).colors(6)
const flColors = chroma.scale(['#C2E8F1', '#2D3974']).colors(6)
const exColors = chroma.scale(['#ddd', '#111']).colors(6)
const emptyLegend = [[0, '#fff'], [1, '#fff'], [2, '#fff'], [3, '#fff'], [4, '#fff'], [5, '#fff']]

export const legends = {
  admin0: {
    LS_EQ: [
      [351733, eqColors[0]],
      [158507777, eqColors[1]],
      [4036633701, eqColors[2]],
      [11574824302, eqColors[3]],
      [21651967240, eqColors[4]],
      [62084892860, eqColors[5]]
    ],
    // does not exist in data
    LS_EQ_R: emptyLegend,
    LS_EQ_AAL: [
      [1752269, eqColors[0]],
      [2564578, eqColors[1]],
      [335926428, eqColors[2]],
      [527610320, eqColors[3]],
      [1348522516, eqColors[4]],
      [2637887479, eqColors[5]]
    ],
    // does not exist in data
    LS_EQ_AAL_R: emptyLegend,
    LS_FL: [
      [1558458, flColors[0]],
      [36168377, flColors[1]],
      [101195508, flColors[2]],
      [164380629, flColors[3]],
      [220058932, flColors[4]],
      [325581708, flColors[5]]
    ],
    // does not exist in data
    LS_FL_R: emptyLegend,
    LS_FL_AAL: [
      [48814136, flColors[0]],
      [74455954, flColors[1]],
      [121067492, flColors[2]],
      [136342933, flColors[3]],
      [375781981, flColors[4]],
      [461055796, flColors[5]]
    ],
    // does not exist in data
    LS_FL_AAL_R: emptyLegend,
    HZ_FL: [
      [6097, flColors[0]],
      [23232, flColors[1]],
      [39695, flColors[2]],
      [65073, flColors[3]],
      [112274, flColors[4]],
      [190032, flColors[5]]
    ],
    LS_WS: [
      [32236269, wsColors[0]],
      [386835228, wsColors[1]],
      [1107910757, wsColors[2]],
      [2820340967, wsColors[3]],
      [5980389237, wsColors[4]],
      [11368933343, wsColors[5]]
    ],
    // does not exist in data
    LS_WS_R: emptyLegend,
    LS_WS_AAL: [
      [8200000, wsColors[0]],
      [9500000, wsColors[1]],
      [417700000, wsColors[2]],
      [556930000, wsColors[3]],
      [1731530000, wsColors[4]],
      [2660390000, wsColors[5]]
    ],
    // does not exist in data
    LS_WS_AAL_R: emptyLegend,
    EX_BS: [
      [40001548704, exColors[0]],
      [70338592797, exColors[1]],
      [86627446369, exColors[2]],
      [90627446369, exColors[3]],
      [108627446369, exColors[4]],
      [199627446369, exColors[5]]
    ]
  },
  admin1: {
    // does not exist in data
    LS_EQ: emptyLegend,
    // does not exist in data
    LS_EQ_R: emptyLegend,
    LS_EQ_AAL: [
      [1950, eqColors[0]],
      [6317435, eqColors[1]],
      [20942344, eqColors[2]],
      [41999629, eqColors[3]],
      [75439284, eqColors[4]],
      [125255440, eqColors[5]]
    ],
    // does not exist in data
    LS_EQ_AAL_R: emptyLegend,
    LS_FL: [
      [28859, flColors[0]],
      [9539755, flColors[1]],
      [24298022, flColors[2]],
      [46824678, flColors[3]],
      [79036174, flColors[4]],
      [126559055, flColors[5]]],
    // does not exist in data
    LS_FL_R: emptyLegend,
    LS_WS: [
      [0.110604, wsColors[0]],
      [53327461, wsColors[1]],
      [162470640, wsColors[2]],
      [297403995, wsColors[3]],
      [462105082, wsColors[4]],
      [798351795, wsColors[5]]],
    // does not exist in data
    LS_WS_R: emptyLegend,
    LS_WS_AAL: [
      [1399, wsColors[0]],
      [862825, wsColors[1]],
      [2067265, wsColors[2]],
      [4394840, wsColors[3]],
      [6714980, wsColors[4]],
      [8706085, wsColors[5]]],
    // does not exist in data
    LS_WS_AAL_R: emptyLegend,
    EX_BS: [
      [9281400, exColors[0]],
      [1493131974, exColors[1]],
      [4437543229, exColors[2]],
      [7435766293, exColors[3]],
      [12657014964, exColors[4]],
      [18956392798, exColors[5]]
    ]
  },
  km10: {
    // does not exist in data
    LS_EQ: emptyLegend,
     // does not exist in data
    LS_EQ_R: [
      [0, eqColors[0]],
      [1, eqColors[1]],
      [2, eqColors[2]],
      [3, eqColors[3]],
      [4, eqColors[4]],
      [5, eqColors[5]]
    ],
    LS_EQ_AAL: [
      [0, eqColors[0]],
      [299, eqColors[1]],
      [900, eqColors[2]],
      [2121, eqColors[3]],
      [4800, eqColors[4]]
    ],
     // does not exist in data
    LS_EQ_AAL_R: emptyLegend,
    HZ_EQ: [
      [30, eqColors[0]],
      [123, eqColors[1]],
      [184, eqColors[2]],
      [256, eqColors[3]],
      [339, eqColors[4]],
      [469, eqColors[5]]
    ],
    LS_FL: [
      [179, flColors[0]],
      [38594, flColors[1]],
      [108662, flColors[2]],
      [209804, flColors[3]],
      [396146, flColors[4]],
      [916145, flColors[5]]
    ],
    // does not exist in data
    LS_FL_R: emptyLegend,
    // does not exist in data
    LS_FL_AAL: emptyLegend,
     // does not exist in data
    LS_FL_AAL_R: emptyLegend,
    HZ_FL: [
      [1, flColors[0]],
      [6, flColors[1]],
      [10, flColors[2]],
      [16, flColors[3]],
      [23, flColors[4]],
      [34, flColors[5]]
    ],
    LS_WS: [
      [0, wsColors[0]],
      [114, wsColors[1]],
      [925, wsColors[2]],
      [5394, wsColors[3]],
      [27135, wsColors[4]],
      [146333, wsColors[5]]
    ],
    // does not exist in data
    LS_WS_R: emptyLegend,
    LS_WS_AAL: [
      [0, wsColors[0]],
      [10, wsColors[1]],
      [79, wsColors[2]],
      [281, wsColors[3]],
      [852, wsColors[4]],
      [2964, wsColors[5]]
    ],
       // does not exist in data
    LS_WS_AAL_R: emptyLegend,
    HZ_WS: [
      [37, wsColors[0]],
      [75, wsColors[1]],
      [91, wsColors[2]],
      [104, wsColors[3]],
      [117, wsColors[4]],
      [137, wsColors[5]]
    ],
    EX_BS: [
      [1426, exColors[0]],
      [218596, exColors[1]],
      [409056, exColors[2]],
      [653782, exColors[3]],
      [1232555, exColors[4]],
      [2943369, exColors[5]]
    ]
  }
}

export const countryExtents = {
  'admin0': {
    'BZ': {
      'extent': [
        [
          -89.22417449951172,
          15.892658233642663
        ],
        [
          -87.48596954345689,
          18.497289657592944
        ]
      ]
    },
    'CR': {
      'extent': [
        [
          -87.09486389160142,
          5.499026775360178
        ],
        [
          -82.55322265625,
          11.216917991638311
        ]
      ]
    },
    'SV': {
      'extent': [
        [
          -90.12486267089838,
          13.152640342712488
        ],
        [
          -87.68374633789057,
          14.450551033020105
        ]
      ]
    },
    'GD': {
      'extent': [
        [
          -61.802082061767436,
          11.984305381774902
        ],
        [
          -61.3781929016113,
          12.54013824462892
        ]
      ]
    },
    'GT': {
      'extent': [
        [
          -92.2223587036132,
          13.73828220367443
        ],
        [
          -88.22566986083984,
          17.81871414184579
        ]
      ]
    },
    'HN': {
      'extent': [
        [
          -89.35079193115232,
          12.98453998565681
        ],
        [
          -82.40569305419922,
          17.418472290039347
        ]
      ]
    },
    'JM': {
      'extent': [
        [
          -78.36902618408197,
          17.020414352416964
        ],
        [
          -75.9698638916015,
          18.525140762329187
        ]
      ]
    },
    'NI': {
      'extent': [
        [
          -87.69097137451163,
          10.707542419433594
        ],
        [
          -81.9998626708983,
          15.02591037750254
        ]
      ]
    },
    'PA': {
      'extent': [
        [
          -83.05017852783203,
          7.20235919952394
        ],
        [
          -77.17324066162107,
          9.647360801696905
        ]
      ]
    },
    'LC': {
      'extent': [
        [
          -61.08013916015619,
          13.707082748413171
        ],
        [
          -60.869861602783146,
          14.110417366027875
        ]
      ]
    }
  },
  'admin1': {
    'BZ-BZ': {
      'parent': 'BZ',
      'extent': [
        [
          -87.89354407499994,
          18.175604559000178
        ],
        [
          -87.87413489499991,
          18.209173895
        ]
      ]
    },
    'BZ-CY': {
      'parent': 'BZ',
      'extent': [
        [
          -89.19313967145851,
          16.39262560286889
        ],
        [
          -88.54828467459805,
          17.48994049675653
        ]
      ]
    },
    'BZ-CZ': {
      'parent': 'BZ',
      'extent': [
        [
          -88.61405893083744,
          17.959945715112013
        ],
        [
          -88.08356686099995,
          18.490758769000053
        ]
      ]
    },
    'BZ-OW': {
      'parent': 'BZ',
      'extent': [
        [
          -89.1613746749999,
          17.321032079949276
        ],
        [
          -88.28434729679032,
          18.247028188999877
        ]
      ]
    },
    'BZ-SC': {
      'parent': 'BZ',
      'extent': [
        [
          -88.77762468093422,
          16.497658169315173
        ],
        [
          -88.21507727799991,
          17.135735157854185
        ]
      ]
    },
    'BZ-TO': {
      'parent': 'BZ',
      'extent': [
        [
          -89.23651220799991,
          15.879651999000089
        ],
        [
          -88.38638261599996,
          16.69184967722083
        ]
      ]
    },
    'GD-AN': {
      'parent': 'GD',
      'extent': [
        [
          -61.68802818425331,
          12.06903717731187
        ],
        [
          -61.60322183111188,
          12.179164864766719
        ]
      ]
    },
    'GD-CA': {
      'parent': 'GD',
      'extent': [
        [
          -61.4962458979999,
          12.440375067000133
        ],
        [
          -61.42162024599986,
          12.529730536000073
        ]
      ]
    },
    'GD-DA': {
      'parent': 'GD',
      'extent': [
        [
          -61.69625335041181,
          12.022040106000105
        ],
        [
          -61.62450110577075,
          12.08951054887271
        ]
      ]
    },
    'GD-GE': {
      'parent': 'GD',
      'extent': [
        [
          -61.79051673099988,
          12.002834377000056
        ],
        [
          -61.676512950911956,
          12.11089598196402
        ]
      ]
    },
    'GD-JO': {
      'parent': 'GD',
      'extent': [
        [
          -61.75104732973526,
          12.110073465617972
        ],
        [
          -61.66253016763309,
          12.18394723348446
        ]
      ]
    },
    'GD-MA': {
      'parent': 'GD',
      'extent': [
        [
          -61.715147775418416,
          12.158601948021456
        ],
        [
          -61.65595003416672,
          12.223333088514195
        ]
      ]
    },
    'GD-PA': {
      'parent': 'GD',
      'extent': [
        [
          -61.600616014999844,
          12.289740302000098
        ],
        [
          -61.580474412999905,
          12.315375067000076
        ]
      ]
    },
    'JM-CL': {
      'parent': 'JM',
      'extent': [
        [
          -77.49115597227029,
          17.703192450000046
        ],
        [
          -77.13060462099992,
          18.204057114844034
        ]
      ]
    },
    'JM-HA': {
      'parent': 'JM',
      'extent': [
        [
          -78.34604260691566,
          18.28978831637764
        ],
        [
          -77.9214139467962,
          18.455471096000053
        ]
      ]
    },
    'JM-KI': {
      'parent': 'JM',
      'extent': [
        [
          -76.8124558893266,
          17.953791304267497
        ],
        [
          -76.72143551313837,
          17.996602078123402
        ]
      ]
    },
    'JM-MA': {
      'parent': 'JM',
      'extent': [
        [
          -77.64029415615042,
          17.84194570500003
        ],
        [
          -77.35896765813084,
          18.237233384812868
        ]
      ]
    },
    'JM-PO': {
      'parent': 'JM',
      'extent': [
        [
          -76.75143368241845,
          17.98673187927281
        ],
        [
          -76.25678958585843,
          18.266780947177978
        ]
      ]
    },
    'JM-SC': {
      'parent': 'JM',
      'extent': [
        [
          -77.21086300302511,
          17.833441473000107
        ],
        [
          -76.84996738989153,
          18.24707774524174
        ]
      ]
    },
    'JM-SD': {
      'parent': 'JM',
      'extent': [
        [
          -76.8897714905618,
          17.92969099817094
        ],
        [
          -76.61624813474359,
          18.166927598729643
        ]
      ]
    },
    'JM-SE': {
      'parent': 'JM',
      'extent': [
        [
          -77.9646205480982,
          17.853583075000046
        ],
        [
          -77.56454864531256,
          18.234442856852354
        ]
      ]
    },
    'JM-SJ': {
      'parent': 'JM',
      'extent': [
        [
          -78.00745520669244,
          18.195556342451283
        ],
        [
          -77.73553931799339,
          18.525091864000046
        ]
      ]
    },
    'JM-SM': {
      'parent': 'JM',
      'extent': [
        [
          -77.07034710703195,
          18.13860891427001
        ],
        [
          -76.70144878209439,
          18.4163272160001
        ]
      ]
    },
    'JM-SN': {
      'parent': 'JM',
      'extent': [
        [
          -77.49115597227029,
          18.184549262038814
        ],
        [
          -76.99640580888098,
          18.47605407686342
        ]
      ]
    },
    'JM-ST': {
      'parent': 'JM',
      'extent': [
        [
          -76.65716059865292,
          17.860256252000084
        ],
        [
          -76.18797766799989,
          18.073625799890806
        ]
      ]
    },
    'JM-TR': {
      'parent': 'JM',
      'extent': [
        [
          -77.78139665383247,
          18.1960989448105
        ],
        [
          -77.45115841293043,
          18.506698879909493
        ]
      ]
    },
    'JM-WE': {
      'parent': 'JM',
      'extent': [
        [
          -78.37466386599993,
          18.050568931766264
        ],
        [
          -77.88591223775956,
          18.33859670737209
        ]
      ]
    },
    'LC-AR': {
      'parent': 'LC',
      'extent': [
        [
          -61.0668839180791,
          13.866477360841586
        ],
        [
          -60.98062707907647,
          13.987372137057278
        ]
      ]
    },
    'LC-CN': {
      'parent': 'LC',
      'extent': [
        [
          -61.026600715125284,
          13.87901010063564
        ],
        [
          -60.93558802196958,
          14.04352448098507
        ]
      ]
    },
    'LC-CO': {
      'parent': 'LC',
      'extent': [
        [
          -61.07852128799996,
          13.792181708109652
        ],
        [
          -60.96057469576556,
          13.909088675601922
        ]
      ]
    },
    'LC-CS': {
      'parent': 'LC',
      'extent': [
        [
          -61.06810462101561,
          13.756246266565157
        ],
        [
          -60.980942833744734,
          13.835766204546744
        ]
      ]
    },
    'LC-DE': {
      'parent': 'LC',
      'extent': [
        [
          -60.96057469576556,
          13.897809210326798
        ],
        [
          -60.88296464775016,
          13.983031839847555
        ]
      ]
    },
    'LC-GI': {
      'parent': 'LC',
      'extent': [
        [
          -60.9799698561618,
          14.017963356223902
        ],
        [
          -60.90103105416975,
          14.111883856000063
        ]
      ]
    },
    'LC-LB': {
      'parent': 'LC',
      'extent': [
        [
          -61.01892275972395,
          13.730640646362076
        ],
        [
          -60.96245009789365,
          13.830799669768908
        ]
      ]
    },
    'LC-MI': {
      'parent': 'LC',
      'extent': [
        [
          -60.975222833466944,
          13.774000741023158
        ],
        [
          -60.89220130097456,
          13.845171703011701
        ]
      ]
    },
    'LC-VF': {
      'parent': 'LC',
      'extent': [
        [
          -60.981577931376364,
          13.714667059000092
        ],
        [
          -60.91803911015725,
          13.839232621588238
        ]
      ]
    },
    'CR-AL': {
      'parent': 'CR',
      'extent': [
        [
          -85.4320220947265,
          9.830496788024874
        ],
        [
          -84.15571594238276,
          11.079315185546903
        ]
      ]
    },
    'CR-CA': {
      'parent': 'CR',
      'extent': [
        [
          -84.08480072021482,
          9.49981498718266
        ],
        [
          -83.311653137207,
          10.149781227111916
        ]
      ]
    },
    'CR-GU': {
      'parent': 'CR',
      'extent': [
        [
          -85.96069335937497,
          9.732638359069881
        ],
        [
          -84.77084350585932,
          11.216917991638311
        ]
      ]
    },
    'CR-HE': {
      'parent': 'CR',
      'extent': [
        [
          -84.19553375244138,
          9.962645530700811
        ],
        [
          -83.7065734863281,
          10.789644241333036
        ]
      ]
    },
    'CR-LI': {
      'parent': 'CR',
      'extent': [
        [
          -83.94243621826172,
          9.062000274658217
        ],
        [
          -82.55322265625,
          10.93890380859375
        ]
      ]
    },
    'CR-PU': {
      'parent': 'CR',
      'extent': [
        [
          -87.09486389160142,
          5.499026775360178
        ],
        [
          -82.71180725097653,
          10.336079597473116
        ]
      ]
    },
    'CR-SJ': {
      'parent': 'CR',
      'extent': [
        [
          -84.59282684326169,
          9.07995891571052
        ],
        [
          -83.4251708984375,
          10.191658020019574
        ]
      ]
    },
    'SV-AH': {
      'parent': 'SV',
      'extent': [
        [
          -90.12486267089838,
          13.660684585571417
        ],
        [
          -89.69065856933588,
          14.06437397003171
        ]
      ]
    },
    'SV-CA': {
      'parent': 'SV',
      'extent': [
        [
          -88.98835754394526,
          13.73831176757811
        ],
        [
          -88.48744201660153,
          14.01908588409431
        ]
      ]
    },
    'SV-CH': {
      'parent': 'SV',
      'extent': [
        [
          -89.42715454101557,
          13.901992797851577
        ],
        [
          -88.68115997314453,
          14.422704696655344
        ]
      ]
    },
    'SV-CU': {
      'parent': 'SV',
      'extent': [
        [
          -89.16763305664062,
          13.63346862792973
        ],
        [
          -88.85851287841794,
          14.057420730590948
        ]
      ]
    },
    'SV-LI': {
      'parent': 'SV',
      'extent': [
        [
          -89.62041473388669,
          13.417916297912598
        ],
        [
          -89.1323623657226,
          14.062418937683077
        ]
      ]
    },
    'SV-PA': {
      'parent': 'SV',
      'extent': [
        [
          -88.23260498046872,
          13.82276344299325
        ],
        [
          -87.60243225097653,
          14.415310859680304
        ]
      ]
    },
    'SV-UN': {
      'parent': 'SV',
      'extent': [
        [
          -88.09271240234372,
          13.152640342712488
        ],
        [
          -87.68374633789057,
          13.899357795715446
        ]
      ]
    },
    'SV-MO': {
      'parent': 'SV',
      'extent': [
        [
          -88.27196502685541,
          13.539755821228042
        ],
        [
          -87.93933868408197,
          13.986461639404382
        ]
      ]
    },
    'SV-SM': {
      'parent': 'SV',
      'extent': [
        [
          -88.52739715576169,
          13.16724681854258
        ],
        [
          -88.01883697509766,
          13.895735740661692
        ]
      ]
    },
    'SV-SS': {
      'parent': 'SV',
      'extent': [
        [
          -89.28889465332028,
          13.468975067138729
        ],
        [
          -88.98754882812497,
          14.05667114257814
        ]
      ]
    },
    'SV-SV': {
      'parent': 'SV',
      'extent': [
        [
          -88.89415740966791,
          13.235693931579576
        ],
        [
          -88.4848480224608,
          13.793494224548411
        ]
      ]
    },
    'SV-SA': {
      'parent': 'SV',
      'extent': [
        [
          -89.74167633056635,
          13.772410392761287
        ],
        [
          -89.2479629516601,
          14.450551033020105
        ]
      ]
    },
    'SV-SO': {
      'parent': 'SV',
      'extent': [
        [
          -89.95124816894531,
          13.518193244934125
        ],
        [
          -89.4387817382812,
          13.906028747558636
        ]
      ]
    },
    'SV-US': {
      'parent': 'SV',
      'extent': [
        [
          -88.80343627929679,
          13.15875053405773
        ],
        [
          -88.12069702148429,
          13.692082405090318
        ]
      ]
    },
    'GT-AV': {
      'parent': 'GT',
      'extent': [
        [
          -90.81743621826158,
          15.119660377502456
        ],
        [
          -89.40629577636716,
          16.074132919311637
        ]
      ]
    },
    'GT-BV': {
      'parent': 'GT',
      'extent': [
        [
          -90.8090438842772,
          14.873027801513786
        ],
        [
          -89.90198516845697,
          15.294076919555735
        ]
      ]
    },
    'GT-CM': {
      'parent': 'GT',
      'extent': [
        [
          -91.13054656982419,
          14.373419761657686
        ],
        [
          -90.61563110351557,
          14.93870258331296
        ]
      ]
    },
    'GT-CQ': {
      'parent': 'GT',
      'extent': [
        [
          -89.73220825195312,
          14.406201362609863
        ],
        [
          -89.12673950195307,
          14.952419281005831
        ]
      ]
    },
    'GT-PR': {
      'parent': 'GT',
      'extent': [
        [
          -90.40343475341791,
          14.648487091064524
        ],
        [
          -89.7806015014647,
          15.140331268310561
        ]
      ]
    },
    'GT-ES': {
      'parent': 'GT',
      'extent': [
        [
          -91.53889465332017,
          13.911251068115263
        ],
        [
          -90.50906372070312,
          14.476391792297363
        ]
      ]
    },
    'GT-GU': {
      'parent': 'GT',
      'extent': [
        [
          -90.75956726074216,
          14.256637573242273
        ],
        [
          -90.20348358154294,
          14.918847084045453
        ]
      ]
    },
    'GT-HU': {
      'parent': 'GT',
      'extent': [
        [
          -92.11925506591797,
          15.133956909179716
        ],
        [
          -90.9573974609375,
          16.081890106201257
        ]
      ]
    },
    'GT-IZ': {
      'parent': 'GT',
      'extent': [
        [
          -89.66154479980469,
          15.070316314697266
        ],
        [
          -88.22566986083984,
          15.966528892517147
        ]
      ]
    },
    'GT-JA': {
      'parent': 'GT',
      'extent': [
        [
          -90.27775573730455,
          14.429879188537711
        ],
        [
          -89.6483459472656,
          14.871861457824778
        ]
      ]
    },
    'GT-JU': {
      'parent': 'GT',
      'extent': [
        [
          -90.29877471923828,
          13.73828220367443
        ],
        [
          -89.49375152587888,
          14.563303947448716
        ]
      ]
    },
    'GT-PE': {
      'parent': 'GT',
      'extent': [
        [
          -91.43796539306635,
          15.850934028625574
        ],
        [
          -89.14615631103516,
          17.81871414184579
        ]
      ]
    },
    'GT-QZ': {
      'parent': 'GT',
      'extent': [
        [
          -92.14001464843747,
          14.494300842285242
        ],
        [
          -91.40355682373041,
          15.224425315857033
        ]
      ]
    },
    'GT-QC': {
      'parent': 'GT',
      'extent': [
        [
          -91.32616424560547,
          14.801934242248578
        ],
        [
          -90.41609191894531,
          16.073883056640625
        ]
      ]
    },
    'GT-RE': {
      'parent': 'GT',
      'extent': [
        [
          -92.16429138183588,
          14.125709533691406
        ],
        [
          -91.51741790771479,
          14.715660095214858
        ]
      ]
    },
    'GT-SA': {
      'parent': 'GT',
      'extent': [
        [
          -90.87999725341783,
          14.377620697021527
        ],
        [
          -90.60292816162104,
          14.72191238403326
        ]
      ]
    },
    'GT-SM': {
      'parent': 'GT',
      'extent': [
        [
          -92.2223587036132,
          14.486250877380442
        ],
        [
          -91.56922149658189,
          15.41991996765148
        ]
      ]
    },
    'GT-SR': {
      'parent': 'GT',
      'extent': [
        [
          -90.62419891357416,
          13.803266525268683
        ],
        [
          -90.04692077636719,
          14.521224975586051
        ]
      ]
    },
    'GT-SO': {
      'parent': 'GT',
      'extent': [
        [
          -91.50664520263666,
          14.515316963195815
        ],
        [
          -91.06850433349601,
          14.893421173095803
        ]
      ]
    },
    'GT-SU': {
      'parent': 'GT',
      'extent': [
        [
          -91.66778564453125,
          14.044810295105066
        ],
        [
          -91.09429168701158,
          14.710862159728961
        ]
      ]
    },
    'GT-TO': {
      'parent': 'GT',
      'extent': [
        [
          -91.55734252929688,
          14.821034431457505
        ],
        [
          -91.17531585693351,
          15.249397277832102
        ]
      ]
    },
    'GT-ZA': {
      'parent': 'GT',
      'extent': [
        [
          -89.89299774169922,
          14.73249626159678
        ],
        [
          -89.14773559570307,
          15.299084663391156
        ]
      ]
    },
    'HN-AT': {
      'parent': 'HN',
      'extent': [
        [
          -87.80868530273432,
          15.410251617431854
        ],
        [
          -86.39098358154294,
          15.927638053894043
        ]
      ]
    },
    'HN-CH': {
      'parent': 'HN',
      'extent': [
        [
          -87.51430511474607,
          12.98453998565681
        ],
        [
          -86.7025451660156,
          13.763493537902889
        ]
      ]
    },
    'PA-3': {
      'parent': 'PA',
      'extent': [
        [
          -80.87657165527344,
          8.632670402526912
        ],
        [
          -79.08027648925776,
          9.647360801696905
        ]
      ]
    },
    'HN-CM': {
      'parent': 'HN',
      'extent': [
        [
          -88.08045196533195,
          14.035907745361456
        ],
        [
          -87.23373413085935,
          15.049070358276424
        ]
      ]
    },
    'HN-CP': {
      'parent': 'HN',
      'extent': [
        [
          -89.22222137451166,
          14.481278419494643
        ],
        [
          -88.63047790527341,
          15.289088249206557
        ]
      ]
    },
    'HN-CR': {
      'parent': 'HN',
      'extent': [
        [
          -88.43440246582028,
          14.784558296203727
        ],
        [
          -87.7306518554687,
          16.000139236450224
        ]
      ]
    },
    'HN-EP': {
      'parent': 'HN',
      'extent': [
        [
          -87.22519683837882,
          13.497464179992775
        ],
        [
          -85.57481384277341,
          14.411850929260268
        ]
      ]
    },
    'HN-FM': {
      'parent': 'HN',
      'extent': [
        [
          -87.65587615966788,
          13.64780330657969
        ],
        [
          -86.72419738769528,
          15.020076751709084
        ]
      ]
    },
    'HN-GD': {
      'parent': 'HN',
      'extent': [
        [
          -84.99811553955064,
          14.614527702331628
        ],
        [
          -82.40569305419922,
          17.418472290039347
        ]
      ]
    },
    'HN-IN': {
      'parent': 'HN',
      'extent': [
        [
          -88.51215362548828,
          13.850329399108858
        ],
        [
          -87.83977508544916,
          14.647224426269574
        ]
      ]
    },
    'HN-IB': {
      'parent': 'HN',
      'extent': [
        [
          -87.00013732910148,
          15.952083587646484
        ],
        [
          -85.81569671630845,
          16.517084121704187
        ]
      ]
    },
    'HN-LE': {
      'parent': 'HN',
      'extent': [
        [
          -88.97695159912107,
          13.939386367797837
        ],
        [
          -88.30945587158197,
          14.929738998413214
        ]
      ]
    },
    'HN-OC': {
      'parent': 'HN',
      'extent': [
        [
          -89.35079193115232,
          14.210660934448356
        ],
        [
          -88.70933532714838,
          14.713985443115192
        ]
      ]
    },
    'HN-OL': {
      'parent': 'HN',
      'extent': [
        [
          -87.01361083984361,
          14.046360015869226
        ],
        [
          -84.99401855468736,
          15.579616546630888
        ]
      ]
    },
    'HN-SB': {
      'parent': 'HN',
      'extent': [
        [
          -88.7609252929687,
          14.629145622253432
        ],
        [
          -87.98922729492185,
          15.541818618774471
        ]
      ]
    },
    'HN-VA': {
      'parent': 'HN',
      'extent': [
        [
          -87.81185913085935,
          13.248194694519213
        ],
        [
          -87.341567993164,
          13.843179702758874
        ]
      ]
    },
    'HN-YO': {
      'parent': 'HN',
      'extent': [
        [
          -87.93667602539048,
          14.86168193817143
        ],
        [
          -86.22396087646479,
          15.721937179565458
        ]
      ]
    },
    'NI-AN': {
      'parent': 'NI',
      'extent': [
        [
          -85.5135269165039,
          13.026806831359863
        ],
        [
          -81.9998626708983,
          15.02591037750254
        ]
      ]
    },
    'NI-AS': {
      'parent': 'NI',
      'extent': [
        [
          -85.22826385498044,
          10.918702125549487
        ],
        [
          -82.97013854980466,
          13.293742179870733
        ]
      ]
    },
    'NI-BO': {
      'parent': 'NI',
      'extent': [
        [
          -85.98599243164054,
          12.037051200866713
        ],
        [
          -84.96810913085935,
          12.783634185791044
        ]
      ]
    },
    'NI-CA': {
      'parent': 'NI',
      'extent': [
        [
          -86.44052886962885,
          11.518689155578627
        ],
        [
          -86.08541870117185,
          11.951141357421875
        ]
      ]
    },
    'NI-CI': {
      'parent': 'NI',
      'extent': [
        [
          -87.69097137451163,
          12.39569377899177
        ],
        [
          -86.65708923339844,
          13.306297302246264
        ]
      ]
    },
    'NI-CO': {
      'parent': 'NI',
      'extent': [
        [
          -85.67638397216794,
          11.615303993225126
        ],
        [
          -84.57212066650388,
          12.64479446411137
        ]
      ]
    },
    'NI-ES': {
      'parent': 'NI',
      'extent': [
        [
          -86.74762725830072,
          12.847483634948745
        ],
        [
          -86.10913848876947,
          13.43193531036377
        ]
      ]
    },
    'NI-GR': {
      'parent': 'NI',
      'extent': [
        [
          -86.13493347167969,
          11.600893020629968
        ],
        [
          -85.78551483154297,
          12.190209388732967
        ]
      ]
    },
    'NI-JI': {
      'parent': 'NI',
      'extent': [
        [
          -86.26229095458979,
          12.984375953674316
        ],
        [
          -84.82464599609361,
          14.607236862182589
        ]
      ]
    },
    'NI-LE': {
      'parent': 'NI',
      'extent': [
        [
          -87.11765289306626,
          12.005662918090934
        ],
        [
          -86.26959228515625,
          13.115758895874066
        ]
      ]
    },
    'NI-MD': {
      'parent': 'NI',
      'extent': [
        [
          -86.76827239990234,
          13.201588630676326
        ],
        [
          -86.06245422363281,
          13.65665721893319
        ]
      ]
    },
    'NI-MN': {
      'parent': 'NI',
      'extent': [
        [
          -86.68344879150376,
          11.718199729919405
        ],
        [
          -85.82778167724601,
          12.63101005554212
        ]
      ]
    },
    'NI-MS': {
      'parent': 'NI',
      'extent': [
        [
          -86.28395843505845,
          11.828769683837876
        ],
        [
          -85.9643325805664,
          12.140574455261202
        ]
      ]
    },
    'NI-MT': {
      'parent': 'NI',
      'extent': [
        [
          -86.28414916992173,
          12.507350921630973
        ],
        [
          -84.717170715332,
          13.37409496307373
        ]
      ]
    },
    'NI-NS': {
      'parent': 'NI',
      'extent': [
        [
          -86.7851943969726,
          13.462232589721808
        ],
        [
          -85.82478332519528,
          14.077059745788674
        ]
      ]
    },
    'NI-SJ': {
      'parent': 'NI',
      'extent': [
        [
          -85.1929931640625,
          10.707542419433594
        ],
        [
          -83.66461181640622,
          11.858178138732995
        ]
      ]
    },
    'NI-RI': {
      'parent': 'NI',
      'extent': [
        [
          -86.1739883422851,
          11.04371738433845
        ],
        [
          -85.18658447265622,
          11.684892654418917
        ]
      ]
    },
    'PA-1': {
      'parent': 'PA',
      'extent': [
        [
          -82.93872070312491,
          8.827947616577276
        ],
        [
          -81.91570281982422,
          9.616516113281222
        ]
      ]
    },
    'PA-4': {
      'parent': 'PA',
      'extent': [
        [
          -83.05017852783203,
          7.859303951263399
        ],
        [
          -81.50739288330075,
          8.919561386108413
        ]
      ]
    },
    'PA-2': {
      'parent': 'PA',
      'extent': [
        [
          -80.82299804687491,
          8.087089538574261
        ],
        [
          -80.05252075195304,
          9.063968658447337
        ]
      ]
    },
    'PA-5': {
      'parent': 'PA',
      'extent': [
        [
          -78.51251220703125,
          7.21842479705839
        ],
        [
          -77.17324066162107,
          9.092749595642076
        ]
      ]
    },
    'PA-EM': {
      'parent': 'PA',
      'extent': [
        [
          -78.3374404907226,
          7.581108093261804
        ],
        [
          -77.23912811279294,
          8.777939796447782
        ]
      ]
    },
    'PA-6': {
      'parent': 'PA',
      'extent': [
        [
          -80.96334838867188,
          7.510128974914679
        ],
        [
          -80.36624908447263,
          8.13173866271974
        ]
      ]
    },
    'PA-KY': {
      'parent': 'PA',
      'extent': [
        [
          -79.28295135498044,
          8.523670196533331
        ],
        [
          -77.3573608398437,
          9.600419998169158
        ]
      ]
    },
    'PA-7': {
      'parent': 'PA',
      'extent': [
        [
          -80.73850250244132,
          7.22735881805427
        ],
        [
          -79.99124908447263,
          8.00402927398693
        ]
      ]
    },
    'PA-NB': {
      'parent': 'PA',
      'extent': [
        [
          -82.44554138183591,
          8.145949363708496
        ],
        [
          -81.13265991210932,
          9.186529159546026
        ]
      ]
    },
    'PA-8': {
      'parent': 'PA',
      'extent': [
        [
          -80.17037200927734,
          7.999860763549833
        ],
        [
          -78.04879760742185,
          9.52334022521974
        ]
      ]
    },
    'PA-9': {
      'parent': 'PA',
      'extent': [
        [
          -82.26403045654283,
          7.20235919952394
        ],
        [
          -80.61429595947263,
          9.000139236450195
        ]
      ]
    }
  }
}

export let calcDropItems = {
  countryName: [
    {key: 'BZ', value: 'BZ'},
    {key: 'CR', value: 'CR'},
    {key: 'SV', value: 'SV'},
    {key: 'GD', value: 'GD'},
    {key: 'GT', value: 'GT'},
    {key: 'HN', value: 'HN'},
    {key: 'JM', value: 'JM'},
    {key: 'NI', value: 'NI'},
    {key: 'PA', value: 'PA'},
    {key: 'LC', value: 'LC'}
  ],
  districtName: [
    {key: '-', value: '-'},
    {key: 'BZ-BZ', value: 'BZ-BZ'},
    {key: 'BZ-CY', value: 'BZ-CY'},
    {key: 'BZ-CZ', value: 'BZ-CZL'},
    {key: 'BZ-OW', value: 'BZ-OW'},
    {key: 'BZ-SC', value: 'BZ-SC'},
    {key: 'BZ-TO', value: 'BZ-TO'},
    {key: 'CR-A', value: 'CR-A'},
    {key: 'CR-C', value: 'CR-C'},
    {key: 'CR-G', value: 'CR-G'},
    {key: 'CR-H', value: 'CR-H'},
    {key: 'CR-L', value: 'CR-L'},
    {key: 'CR-P', value: 'CR-P'},
    {key: 'CR-SJ', value: 'CR-SJ'},
    {key: 'GD-01', value: 'GD-01'},
    {key: 'GD-02', value: 'GD-02'},
    {key: 'GD-03', value: 'GD-03'},
    {key: 'GD-04', value: 'GD-04'},
    {key: 'GD-05', value: 'GD-05'},
    {key: 'GD-06', value: 'GD-06'},
    {key: 'GD-10', value: 'GD-10'},
    {key: 'GT-AV', value: 'GT-AV'},
    {key: 'GT-AV', value: 'GT-AV'},
    {key: 'GT-BV', value: 'GT-BV'},
    {key: 'GT-CM', value: 'GT-CM'},
    {key: 'GT-CQ', value: 'GT-CQ'},
    {key: 'GT-ES', value: 'GT-ES'},
    {key: 'GT-GU', value: 'GT-GU'},
    {key: 'GT-HU', value: 'GT-HU'},
    {key: 'GT-IZ', value: 'GT-IZ'},
    {key: 'GT-JA', value: 'GT-JA'},
    {key: 'GT-JU', value: 'GT-JU'},
    {key: 'GT-PE', value: 'GT-PE'},
    {key: 'GT-PR', value: 'GT-PR'},
    {key: 'GT-QC', value: 'GT-QC'},
    {key: 'GT-QZ', value: 'GT-QZ'},
    {key: 'GT-RE', value: 'GT-RE'},
    {key: 'GT-SA', value: 'GT-SA'},
    {key: 'GT-SM', value: 'GT-SM'},
    {key: 'GT-SO', value: 'GT-SO'},
    {key: 'GT-SR', value: 'GT-SR'},
    {key: 'GT-SU', value: 'GT-SU'},
    {key: 'GT-TO', value: 'GT-TO'},
    {key: 'GT-ZA', value: 'GT-ZA'},
    {key: 'HN-AT', value: 'HN-AT'},
    {key: 'HN-CH', value: 'HN-CH'},
    {key: 'HN-CL', value: 'HN-CL'},
    {key: 'HN-CM', value: 'HN-CM'},
    {key: 'HN-CP', value: 'HN-CP'},
    {key: 'HN-CR', value: 'HN-CR'},
    {key: 'HN-EP', value: 'HN-EP'},
    {key: 'HN-FM', value: 'HN-FM'},
    {key: 'HN-GD', value: 'HN-GD'},
    {key: 'HN-IB', value: 'HN-IB'},
    {key: 'HN-IN', value: 'HN-IN'},
    {key: 'HN-LE', value: 'HN-LE'},
    {key: 'HN-LP', value: 'HN-LP'},
    {key: 'HN-OC', value: 'HN-OC'},
    {key: 'HN-OL', value: 'HN-OL'},
    {key: 'HN-SB', value: 'HN-SB'},
    {key: 'HN-VA', value: 'HN-VA'},
    {key: 'HN-YO', value: 'HN-YO'},
    {key: 'JM-01', value: 'JM-01'},
    {key: 'JM-02', value: 'JM-02'},
    {key: 'JM-03', value: 'JM-03'},
    {key: 'JM-04', value: 'JM-04'},
    {key: 'JM-05', value: 'JM-05'},
    {key: 'JM-06', value: 'JM-06'},
    {key: 'JM-07', value: 'JM-07'},
    {key: 'JM-08', value: 'JM-08'},
    {key: 'JM-09', value: 'JM-09'},
    {key: 'JM-10', value: 'JM-10'},
    {key: 'JM-11', value: 'JM-11'},
    {key: 'JM-12', value: 'JM-12'},
    {key: 'JM-13', value: 'JM-13'},
    {key: 'JM-14', value: 'JM-14'},
    {key: 'LC-01', value: 'LC-01'},
    {key: 'LC-02', value: 'LC-02'},
    {key: 'LC-03', value: 'LC-03'},
    {key: 'LC-05', value: 'LC-05'},
    {key: 'LC-06', value: 'LC-06'},
    {key: 'LC-07', value: 'LC-07'},
    {key: 'LC-08', value: 'LC-08'},
    {key: 'LC-10', value: 'LC-10'},
    {key: 'LC-11', value: 'LC-11'},
    {key: 'LC-12', value: 'LC-12'},
    {key: 'NI-AN', value: 'NI-AN'},
    {key: 'NI-AS', value: 'NI-AS'},
    {key: 'NI-BO', value: 'NI-BO'},
    {key: 'NI-CA', value: 'NI-CA'},
    {key: 'NI-CI', value: 'NI-CI'},
    {key: 'NI-CO', value: 'NI-CO'},
    {key: 'NI-ES', value: 'NI-ES'},
    {key: 'NI-GR', value: 'NI-GR'},
    {key: 'NI-JI', value: 'NI-JI'},
    {key: 'NI-LE', value: 'NI-LE'},
    {key: 'NI-MD', value: 'NI-MD'},
    {key: 'NI-MN', value: 'NI-MN'},
    {key: 'NI-MS', value: 'NI-MS'},
    {key: 'NI-MT', value: 'NI-MT'},
    {key: 'NI-NS', value: 'NI-NS'},
    {key: 'NI-RI', value: 'NI-RI'},
    {key: 'NI-SJ', value: 'NI-JS'},
    {key: 'PA-1', value: 'PA-1'},
    {key: 'PA-2', value: 'PA-2'},
    {key: 'PA-3', value: 'PA-3'},
    {key: 'PA-4', value: 'PA-4'},
    {key: 'PA-5', value: 'PA-5'},
    {key: 'PA-6', value: 'PA-6'},
    {key: 'PA-7', value: 'PA-7'},
    {key: 'PA-8', value: 'PA-8'},
    {key: 'PA-9', value: 'PA-9'},
    {key: 'PA-10', value: 'PA-10'},
    {key: 'PA-EM', value: 'PA-EM'},
    {key: 'PA-KY', value: 'PA-KY'},
    {key: 'PA-NB', value: 'PA-NB'},
    {key: 'SV-AH', value: 'SV-AH'},
    {key: 'SV-CA', value: 'SV-CA'},
    {key: 'SV-CH', value: 'SV-CH'},
    {key: 'SV-CU', value: 'SV-CU'},
    {key: 'SV-LI', value: 'SV-LI'},
    {key: 'SV-MO', value: 'SV-MO'},
    {key: 'SV-PA', value: 'SV-PA'},
    {key: 'SV-SA', value: 'SV-SA'},
    {key: 'SV-SM', value: 'SV-SM'},
    {key: 'SV-SO', value: 'SV-SO'},
    {key: 'SV-SS', value: 'SV-SS'},
    {key: 'SV-SV', value: 'SV-SV'},
    {key: 'SV-UN', value: 'SV-UN'},
    {key: 'SV-US', value: 'SV-US'}
  ]
}

export const countryAAL = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'id': 'BZ',
        'LS_EQ_10': 607105026.9000001,
        'LS_EQ_50': 2961708817.04,
        'LS_EQ_100': 4900681066.76,
        'LS_EQ_250': 8360978309.64,
        'LS_EQ_500': 11574824302.32,
        'LS_EQ_1000': 15221374412.64,
        'LS_EQ_AAL': 335926428.06127995,
        'LS_WS_25': 386835228,
        'LS_WS_50': 1501627337,
        'LS_WS_100': 2820340967,
        'LS_WS_250': 5221335026,
        'LS_WS_500': 7018988360,
        'LS_WS_1000': 8788398533,
        'LS_WS_AAL': 417700000,
        'LS_FL_AAL': 48814136.22028,
        'LS_FL_05': 1558458,
        'LS_FL_10': 2613802,
        'LS_FL_100': 5302923,
        'LS_FL_1000': 7690930,
        'LS_FL_25': 2613802,
        'LS_FL_250': 7239555,
        'LS_FL_50': 3652669,
        'LS_FL_500': 7690930,
        'HZ_EQ_1000': 3904854,
        'HZ_EQ_100': 1280091,
        'HZ_EQ_2500': 5678583,
        'HZ_EQ_250': 1845924,
        'HZ_EQ_5000': 8222819,
        'HZ_EQ_500': 2977296,
        'EX_GD': 1423520743,
        'EX_IN': 958321965,
        'EX_BS': 3349909822
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'CR',
        'LS_EQ_10': 13732644399.490004,
        'LS_EQ_50': 66504526671.46,
        'LS_EQ_100': 108174665182.71,
        'LS_EQ_250': 177461504610,
        'LS_EQ_500': 237301299920,
        'LS_EQ_1000': 301018627120,
        'LS_EQ_AAL': 7452855913.197721,
        'LS_WS_25': 0,
        'LS_WS_50': 422848336,
        'LS_WS_100': 688300783,
        'LS_WS_250': 1182963472,
        'LS_WS_500': 1972851439,
        'LS_WS_1000': 3191561434,
        'LS_WS_AAL': 7453500000,
        'LS_FL_AAL': 375781981.0340609,
        'LS_FL_05': 160590695,
        'LS_FL_10': 212012581,
        'LS_FL_100': 356851180,
        'LS_FL_1000': 401797380,
        'LS_FL_25': 212012581,
        'LS_FL_250': 381921057,
        'LS_FL_50': 325581708,
        'LS_FL_500': 392856687,
        'HZ_EQ_1000': 37515707,
        'HZ_EQ_100': 17465341,
        'HZ_EQ_2500': 48427754,
        'HZ_EQ_5000': 58194341,
        'HZ_EQ_500': 30498899,
        'EX_GD': 27678973816,
        'EX_BS': 73818356551,
        'EX_IN': 31057247818,
        'HZ_FL_1000': 84309,
        'HZ_FL_100': 56535,
        'HZ_FL_10': 25772,
        'HZ_FL_250': 68256,
        'HZ_FL_25': 38884,
        'HZ_FL_500': 76659,
        'HZ_FL_50': 48153,
        'HZ_FL_5': 15549
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'GD',
        'LS_EQ_10': 475732.4061,
        'LS_EQ_50': 17254885.49,
        'LS_EQ_100': 40735475.44,
        'LS_EQ_250': 95725216.26,
        'LS_EQ_500': 158507777.5,
        'LS_EQ_1000': 237460611.1,
        'LS_EQ_AAL': 1752269.29,
        'LS_WS_25': 35231914,
        'LS_WS_50': 107362226,
        'LS_WS_100': 212586673,
        'LS_WS_250': 397240096,
        'LS_WS_500': 513607352,
        'LS_WS_1000': 633077134,
        'LS_WS_AAL': 8200000,
        'HZ_EQ_1000': 107324,
        'HZ_EQ_100': 38824,
        'HZ_EQ_2500': 151840,
        'HZ_EQ_5000': 184462,
        'EX_BS': 2033345192,
        'HZ_EQ_250': 63666,
        'HZ_EQ_500': 87816
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'GT',
        'LS_EQ_10': 969369543.2600001,
        'LS_EQ_50': 4501726341.62,
        'LS_EQ_100': 7386042618.629999,
        'LS_EQ_250': 12534258947.470001,
        'LS_EQ_500': 17310396101.86,
        'LS_EQ_1000': 22697709612.72,
        'LS_EQ_AAL': 527610320.623406,
        'LS_WS_25': 32236269,
        'LS_WS_50': 1107910757,
        'LS_WS_100': 1828420702,
        'LS_WS_250': 2951707346,
        'LS_WS_500': 3810571170,
        'LS_WS_1000': 4647949659,
        'LS_WS_AAL': 556930000,
        'LS_FL_AAL': 74455954.916855,
        'LS_FL_05': 205143709,
        'LS_FL_10': 312111172,
        'LS_FL_100': 509755198,
        'LS_FL_1000': 681029444,
        'LS_FL_25': 312111172,
        'LS_FL_250': 594472543,
        'LS_FL_50': 465316885,
        'LS_FL_500': 645601940,
        'HZ_EQ_1000': 55577734,
        'HZ_EQ_100': 23870852,
        'HZ_EQ_2500': 73871337,
        'HZ_EQ_5000': 90017542,
        'HZ_EQ_500': 43887004,
        'EX_IN': 31917168555,
        'EX_GD': 35783335845,
        'EX_BS': 77107654448,
        'HZ_FL_1000': 257415,
        'HZ_FL_100': 169345,
        'HZ_FL_10': 76540,
        'HZ_FL_250': 203973,
        'HZ_FL_25': 112274,
        'HZ_FL_500': 233518,
        'HZ_FL_50': 143544,
        'HZ_FL_5': 44563
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'HN',
        'LS_EQ_10': 2428052286.6300006,
        'LS_EQ_50': 11318123041.86,
        'LS_EQ_100': 18790326856.799995,
        'LS_EQ_250': 32718966565,
        'LS_EQ_500': 46249512330,
        'LS_EQ_1000': 62084892860,
        'LS_EQ_AAL': 1348522516.632502,
        'LS_WS_25': 0,
        'LS_WS_50': 12864339916,
        'LS_WS_100': 21221969980,
        'LS_WS_250': 29089236937,
        'LS_WS_500': 34761959092,
        'LS_WS_1000': 39655577231,
        'LS_WS_AAL': 1731530000,
        'LS_FL_AAL': 461055796.425975,
        'LS_FL_05': 101195508,
        'LS_FL_10': 158790227,
        'LS_FL_100': 269719010,
        'LS_FL_1000': 325958801,
        'LS_FL_25': 158790227,
        'LS_FL_250': 288368144,
        'LS_FL_50': 250414811,
        'LS_FL_500': 304434458,
        'HZ_EQ_1000': 31069144,
        'HZ_EQ_100': 13830322,
        'HZ_EQ_2500': 41805253,
        'HZ_EQ_5000': 51516836,
        'HZ_EQ_500': 24862003,
        'EX_GD': 12864715229,
        'EX_IN': 10732815434,
        'HZ_FL_1000': 211699,
        'HZ_FL_100': 139552,
        'HZ_FL_10': 60923,
        'HZ_FL_250': 167593,
        'HZ_FL_25': 91728,
        'HZ_FL_500': 190032,
        'HZ_FL_50': 116933,
        'HZ_FL_5': 34578,
        'EX_BS': 38968836241
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'JM',
        'LS_EQ_10': 54140206.185565,
        'LS_EQ_50': 1841000000,
        'LS_EQ_100': 4375647195.486225,
        'LS_EQ_250': 10132666800,
        'LS_EQ_500': 16049162350,
        'LS_EQ_1000': 23605333150,
        'LS_EQ_AAL': 179725542.9289,
        'LS_WS_25': 1355291740,
        'LS_WS_50': 4467156005,
        'LS_WS_100': 9123670905,
        'LS_WS_250': 17580069505,
        'LS_WS_500': 22773756760,
        'LS_WS_1000': 27288773575,
        'LS_WS_AAL': 336500000,
        'HZ_EQ_1000': 2696974,
        'HZ_EQ_100': 922583,
        'HZ_EQ_2500': 3758840,
        'HZ_EQ_250': 1497712,
        'HZ_EQ_5000': 4720792,
        'HZ_EQ_500': 2038713,
        'EX_BS': 40129868850
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'NI',
        'LS_EQ_10': 1877634832.89,
        'LS_EQ_50': 7619518591.16,
        'LS_EQ_100': 11992468040.8,
        'LS_EQ_250': 19396043730,
        'LS_EQ_500': 25999170680,
        'LS_EQ_1000': 33271298220,
        'LS_EQ_AAL': 992515862.461453,
        'LS_WS_25': 0,
        'LS_WS_50': 3606395221,
        'LS_WS_100': 5610680539,
        'LS_WS_250': 7653049206,
        'LS_WS_500': 9613786940,
        'LS_WS_1000': 11368933343,
        'LS_WS_AAL': 1037500000,
        'LS_FL_AAL': 121067492.145191,
        'LS_FL_05': 85546828,
        'LS_FL_10': 137906635,
        'LS_FL_100': 200539553,
        'LS_FL_1000': 249369314,
        'LS_FL_25': 137906635,
        'LS_FL_250': 220058932,
        'LS_FL_50': 181942365,
        'LS_FL_500': 231713237,
        'HZ_FL_1000': 341363,
        'HZ_FL_100': 221096,
        'HZ_FL_250': 270515,
        'HZ_FL_500': 304316,
        'EX_GD': 8244117094,
        'EX_BS': 30725918382,
        'HZ_FL_10': 97418,
        'HZ_FL_25': 147467,
        'HZ_FL_50': 185816,
        'HZ_FL_5': 55781,
        'EX_IN': 13909778677
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'PA',
        'LS_EQ_10': 4036633701.600001,
        'LS_EQ_50': 20696587977,
        'LS_EQ_100': 36341072874.98995,
        'LS_EQ_250': 69197817160,
        'LS_EQ_500': 106232772740,
        'LS_EQ_1000': 155304677090,
        'LS_EQ_AAL': 2442949493.2987037,
        'LS_WS_25': 0,
        'LS_WS_50': 134717297,
        'LS_WS_100': 496444446,
        'LS_WS_250': 1974232747,
        'LS_WS_500': 5980389237,
        'LS_WS_1000': 15514603343,
        'LS_WS_AAL': 2443000000,
        'LS_FL_AAL': 537227879.1547579,
        'LS_FL_05': 69267019,
        'LS_FL_10': 126352466,
        'LS_FL_100': 181587204,
        'LS_FL_1000': 226920172,
        'LS_FL_25': 126352466,
        'LS_FL_250': 199381613,
        'LS_FL_50': 164380629,
        'LS_FL_500': 209719810,
        'HZ_EQ_1000': 35203473,
        'HZ_EQ_100': 14573154,
        'HZ_EQ_2500': 47397560,
        'HZ_EQ_5000': 58164674,
        'HZ_EQ_500': 27141631,
        'EX_BS': 44190466661,
        'EX_GD': 30309291773,
        'EX_IN': 15908561224,
        'HZ_FL_1000': 73281,
        'HZ_FL_250': 57974,
        'HZ_FL_500': 65073,
        'HZ_FL_100': 47064,
        'HZ_FL_10': 20715,
        'HZ_FL_25': 31813,
        'HZ_FL_50': 39695,
        'HZ_FL_5': 11249
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'id': 'SV',
        'LS_EQ_10': 4913030526.290001,
        'LS_EQ_50': 21651967240.2,
        'LS_EQ_100': 35231565706.4,
        'LS_EQ_250': 59450714395,
        'LS_EQ_500': 81842994610,
        'LS_EQ_1000': 106873733650,
        'LS_EQ_AAL': 2637887479.683406,
        'LS_WS_25': 0,
        'LS_WS_50': 1253122747,
        'LS_WS_100': 2428505883,
        'LS_WS_250': 7061195806,
        'LS_WS_500': 9248018468,
        'LS_WS_1000': 10675451350,
        'LS_WS_AAL': 2660390000,
        'LS_FL_AAL': 136342933.514531,
        'LS_FL_05': 28456813,
        'LS_FL_10': 36168377,
        'LS_FL_100': 59755990,
        'LS_FL_1000': 71436216,
        'LS_FL_25': 36168377,
        'LS_FL_250': 65889075,
        'LS_FL_50': 53794333,
        'LS_FL_500': 69067245,
        'HZ_EQ_1000': 14818188,
        'HZ_EQ_100': 7120623,
        'HZ_EQ_2500': 19148865,
        'HZ_EQ_5000': 22923354,
        'HZ_EQ_500': 12076069,
        'EX_GD': 19276984249,
        'EX_IN': 8423904431,
        'EX_BS': 37867998025,
        'HZ_FL_1000': 35604,
        'HZ_FL_100': 23232,
        'HZ_FL_10': 10519,
        'HZ_FL_250': 28158,
        'HZ_FL_25': 15723,
        'HZ_FL_500': 31337,
        'HZ_FL_50': 19199,
        'HZ_FL_5': 6097
      }
    }
  ]
}

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'countries-1h4fay',
    idProp: 'id',
    url: 'mapbox://devseed.btobi00m'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'CA_Earthquake_Admin_1-8hvttj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.2j87qn16'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'merged-grid-6bspwr',
    idProp: 'code',
    url: 'mapbox://devseed.5tjsjnug'
  },
  km10Circles: {
    id: 'km10Circles',
    sourceLayer: 'grid-points',
    idProp: 'code',
    url: 'mapbox://devseed.1b3ygisz'
  }
}

export const mapSettings = {
  basemap: {
    basic: {
      id: 'basic',
      url: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv'},
    special: {
      id: 'satellite',
      url: 'mapbox://mapbox.satellite'}
  },
  centerpoint: [-87, 13],
  initialZoom: {
    admin0: 5,
    admin1: 5,
    km10: 5
  },
  selectedZoom: {
    admin0: 5.75,
    admin1: 5.75,
    km10: 5.75
  },
  maxBounds: [
    [-112, 0],
    [-51, 28]
  ],
  opacityLevels: {
    full: 0.8,
    medium: 0.4,
    low: 0.25
  }
}

export const adminNames = {
  'BZ': 'Belize',
  'BZ-BZ': 'Belize',
  'BZ-CY': 'Cayo',
  'BZ-CZL': 'Corozal',
  'BZ-OW': 'Orange Walk',
  'BZ-SC': 'Stann Creek',
  'BZ-TOL': 'Toledo',
  'CR': 'Costa Rica',
  'CR-A': 'Alajuela',
  'CR-C': 'Cartago',
  'CR-G': 'Guanacaste',
  'CR-H': 'Heredia',
  'CR-L': 'Limón',
  'CR-P': 'Puntarenas',
  'CR-SJ': 'San José',
  'GD': 'Grenada',
  'GD-01': 'Saint Andrew',
  'GD-02': 'Saint David',
  'GD-03': 'Saint George',
  'GD-04': 'Saint John',
  'GD-05': 'Saint Mark',
  'GD-06': 'Saint Patrick',
  'GD-10': 'Southern Grenadine Islands',
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
  'LI': 'Saint Lucia',
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

export const legends = {
  admin0: {
    LS_EQ: [
      [351733.748, '#fde291'],
      [158507777.5, '#e6be79'],
      [4036633701.600001, '#cf9a62'],
      [11574824302.32, '#b8774a'],
      [21651967240.2, '#a15333'],
      [62084892860, '#8b301c']
    ],
    LS_EQ_AAL: [
      [1752269.29, '#fde291'],
      [2564578.752, '#e6be79'],
      [335926428.06127995, '#cf9a62'],
      [527610320.623406, '#b8774a'],
      [1348522516.632502, '#a15333'],
      [2637887479.683406, '#8b301c']
    ],
    HZ_EQ: [
      [38824, '#fde291'],
      [224810, '#e6be79'],
      [2977296, '#cf9a62'],
      [13830322, '#b8774a'],
      [24862003, '#a15333'],
      [47397560, '#8b301c']
    ],
    LS_FL: [
      [1558458, '#e0efda'],
      [36168377, '#bfd2c0'],
      [101195508, '#9eb5a7'],
      [164380629, '#7d998d'],
      [220058932, '#5c7c74'],
      [325581708, '#3c605b']
    ],
    LS_FL_AAL: [
      [48814136.22028, '#e0efda'],
      [74455954.916855, '#bfd2c0'],
      [121067492.145191, '#9eb5a7'],
      [136342933.514531, '#7d998d'],
      [375781981.0340609, '#5c7c74'],
      [461055796.425975, '#3c605b']
    ],
    HZ_FL: [
      [6097, '#e0efda'],
      [23232, '#bfd2c0'],
      [39695, '#9eb5a7'],
      [65073, '#7d998d'],
      [112274, '#5c7c74'],
      [190032, '#3c605b']
    ],
    LS_WS: [
      [32236269, '#e0efda'],
      [386835228, '#b9c8c0'],
      [1107910757, '#92a2a7'],
      [2820340967, '#6b7c8d'],
      [5980389237, '#445674'],
      [11368933343, '#1d305b']
    ],
    LS_WS_AAL: [
      [8200000, '#e0efda'],
      [9500000, '#b9c8c0'],
      [417700000, '#92a2a7'],
      [556930000, '#6b7c8d'],
      [1731530000, '#445674'],
      [2660390000, '#1d305b']
    ],
// !!!!!!!!!!!!
// Fake HZ values, true values not yet attached
// !!!!!!!!!!!!
    HZ_WS: [
      [8200000, '#e0efda'],
      [9500000, '#b9c8c0'],
      [417700000, '#92a2a7'],
      [556930000, '#6b7c8d'],
      [1731530000, '#445674'],
      [2660390000, '#1d305b']
    ],
    EX_GD: [
      [1423520743, '#c8c8c8'],
      [8244117094, '#a8a8a8'],
      [12864715229, '#888888'],
      [19276984249, '#686868'],
      [27678973816, '#484848'],
      [30309291773, '#282828']
    ],
    EX_IN: [
      [958321965, '#c8c8c8'],
      [8423904431, '#a8a8a8'],
      [10732815434, '#888888'],
      [13909778677, '#686868'],
      [15908561224, '#484848'],
      [31057247818, '#282828']
    ],
    EX_BS: [
      [1826419386, '#c8c8c8'],
      [2033345192, '#a8a8a8'],
      [30725918382, '#888888'],
      [37867998025, '#686868'],
      [40129868850, '#484848'],
      [73818356551, '#282828']
    ]
  },
  km10: {
    HZ_EQ: [
      [29, '#fde291'],
      [155, '#e6be79'],
      [245, '#cf9a62'],
      [346, '#b8774a'],
      [475, '#a15333'],
      [654, '#8b301c']
    ],
    HZ_FL: [
      [1, '#e0efda'],
      [4, '#bfd2c0'],
      [7, '#9eb5a7'],
      [11, '#7d998d'],
      [17, '#5c7c74'],
      [27, '#3c605b']
    ],
    HZ_WS: [
      [20, '#e0efda'],
      [50, '#bfd2c0'],
      [100, '#9eb5a7'],
      [150, '#7d998d'],
      [200, '#5c7c74'],
      [300, '#3c605b']
    ],
    LS_EQ: [
      [29, '#fde291'],
      [155, '#e6be79'],
      [245, '#cf9a62'],
      [346, '#b8774a'],
      [475, '#a15333'],
      [654, '#8b301c']
    ],
    LS_FL: [
      [1, '#e0efda'],
      [4, '#bfd2c0'],
      [7, '#9eb5a7'],
      [11, '#7d998d'],
      [17, '#5c7c74'],
      [27, '#3c605b']
    ],
    LS_WS: [
      [0, '#e0efda'],
      [200, '#b9c8c0'],
      [300, '#92a2a7'],
      [400, '#6b7c8d'],
      [500, '#445674'],
      [600, '#1d305b']
    ],
    EX_BS: [
      [1205, '#c8c8c8'],
      [218510, '#a8a8a8'],
      [408217, '#888888'],
      [652777, '#686868'],
      [1229397, '#484848'],
      [2832190, '#282828']
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
    'CR-A': {
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
    'CR-C': {
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
    'CR-G': {
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
    'CR-H': {
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
    'CR-L': {
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
    'CR-P': {
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

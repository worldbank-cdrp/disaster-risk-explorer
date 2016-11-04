import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'admin0-90nlp9',
    idProp: 'id',
    url: 'mapbox://wbg-cdrp.cfd6vnjl'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'admin1-6uq8e0',
    idProp: 'id',
    url: 'mapbox://wbg-cdrp.8neqhgga'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'km10-68ow7o',
    idProp: 'code',
    url: 'mapbox://wbg-cdrp.1svo2unq'
  },
  km10Circles: {
    id: 'km10Circles',
    sourceLayer: 'km10Pointsgeojson',
    idProp: 'code',
    url: 'mapbox://wbg-cdrp.937r9djo'
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
        '1000',
        'Historic'
      ],
      earthquake: [
        'AAL',
        '10',
        '50',
        '100',
        '250',
        '500',
        '1000',
        'Historic'
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
        '1000',
        'Historic'
      ],
      earthquake: [
        'AAL',
        'Historic'
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
        '1000',
        'Historic'
      ],
      earthquake: [
        'AAL',
        'Historic'
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
    'HS',
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
    'HS',
    '25',
    '50',
    '100',
    '250',
    '500',
    '1000'
  ]
}

export const measurementStrings = {
  windstorm: 'Gust Wind Speed (Miles Per Hour)',
  earthquake: 'Peak Ground Acceleration (gals)',
  flood: 'Decimeters'
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
    LS_EQ_R:
    [ [ 0.00011, eqColors[0] ],
      [ 0.01109, eqColors[1] ],
      [ 0.03427, eqColors[2] ],
      [ 0.05889, eqColors[3] ],
      [ 0.07945, eqColors[4] ],
      [ 0.11902, eqColors[5] ] ],
    LS_EQ_AAL:
     [ [ 765912, eqColors[0] ],
       [ 2336341, eqColors[1] ],
       [ 34948867, eqColors[2] ],
       [ 87827357, eqColors[3] ],
       [ 174703357, eqColors[4] ],
       [ 322008465, eqColors[5] ] ],
    LS_EQ_AAL_R:
   [ [ 0.0004951719095934834, eqColors[0] ],
     [ 0.0004951719095934834, eqColors[1] ],
     [ 0.0004951719095934834, eqColors[2] ],
     [ 0.0007980250847091424, eqColors[3] ],
     [ 0.0007980250847091424, eqColors[4] ],
     [ 0.000835350030607424, eqColors[5] ] ],
    LS_EQ_HS:
   [ [ 1087758.2967, eqColors[0] ],
     [ 39271715.5263, eqColors[1] ],
     [ 591307310.94710, eqColors[2] ],
     [ 881020351.10551, eqColors[3] ],
     [ 1584568629.57659, eqColors[4] ],
     [ 3194320561.01979, eqColors[5] ] ],
    LS_EQ_HS_R:
   [ [ 0.00031, eqColors[0] ],
     [ 0.00127, eqColors[1] ],
     [ 0.00810, eqColors[2] ],
     [ 0.01183, eqColors[3] ],
     [ 0.02087, eqColors[4] ],
     [ 0.03210, eqColors[5] ] ],
    LS_FL:
    [ [ 1558458, flColors[0] ],
      [ 85164175, flColors[1] ],
      [ 164380629, flColors[2] ],
      [ 250414811, flColors[3] ],
      [ 356851180, flColors[4] ],
      [ 509755198, flColors[5] ] ],
    LS_FL_R:
     [ [ 0.00046, flColors[0] ],
       [ 0.0016, flColors[1] ],
       [ 0.00275, flColors[2] ],
       [ 0.00399, flColors[3] ],
       [ 0.00520, flColors[4] ],
       [ 0.00662, flColors[5] ] ],
    LS_FL_AAL: [
      [15032577, flColors[0]],
      [20902885, flColors[1]],
      [36814136, flColors[2]],
      [43438062, flColors[3]],
      [47200845, flColors[4]],
      [53814136, flColors[5]]
    ],
    LS_FL_AAL_R: [
      [0.000104111, flColors[0]],
      [0.000120912, flColors[1]],
      [0.000173060, flColors[2]],
      [0.000241024, flColors[3]],
      [0.000352447, flColors[4]],
      [0.000488551, flColors[5]]
    ],

    HZ_FL: [
      [6097, flColors[0]],
      [23232, flColors[1]],
      [39695, flColors[2]],
      [65073, flColors[3]],
      [112274, flColors[4]],
      [190032, flColors[5]]
    ],
    LS_WS:
     [ [ 1792.72908, wsColors[0] ],
       [ 214061804.1873, wsColors[1] ],
       [ 625979720.22447, wsColors[2] ],
       [ 1337191328.91436, wsColors[3] ],
       [ 2137216023.83841, wsColors[4] ],
       [ 3318695385.38529, wsColors[5] ] ],
    LS_WS_R:
      [ [ 0, wsColors[0] ],
        [ 0.02159, wsColors[1] ],
        [ 0.05761, wsColors[2] ],
        [ 0.12871, wsColors[3] ],
        [ 0.18694, wsColors[4] ],
        [ 0.23785, wsColors[5] ] ],
    LS_WS_AAL:
      [ [ 15086.84536, wsColors[0] ],
        [ 254860.43018, wsColors[1] ],
        [ 4496119.52481, wsColors[2] ],
        [ 8374294.97687, wsColors[3] ],
        [ 25395224.90001, wsColors[4] ],
        [ 45829617.86175, wsColors[5] ] ],
    LS_WS_AAL_R:
     [ [ 0, wsColors[0] ],
       [ 0.00021, wsColors[1] ],
       [ 0.00073, wsColors[2] ],
       [ 0.00131, wsColors[3] ],
       [ 0.00154, wsColors[4] ],
       [ 0.00288, wsColors[5] ] ],
    LS_WS_HS:
   [ [ 44938.32565, wsColors[0] ],
     [ 93965.68374, wsColors[1] ],
     [ 70566811.82551, wsColors[2] ],
     [ 101837753.75684, wsColors[3] ],
     [ 154821866.87212, wsColors[4] ],
     [ 179719403.03699, wsColors[5] ] ],
    LS_WS_HS_R:
   [ [ 0, wsColors[0] ],
     [ 0.00056, wsColors[1] ],
     [ 0.00369, wsColors[2] ],
     [ 0.02032, wsColors[3] ],
     [ 0.02856, wsColors[4] ],
     [ 0.05250, wsColors[5] ] ],
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
    LS_EQ_AAL_R:
   [ [ 0.00005, eqColors[0] ],
     [ 0.00047, eqColors[1] ],
     [ 0.00079, eqColors[2] ],
     [ 0.00126, eqColors[3] ],
     [ 0.00292, eqColors[4] ],
     [ 0.00399, eqColors[5] ] ],
    LS_EQ_HS:
  [ [ 55.0476, eqColors[0] ],
    [ 37851263.0687, eqColors[1] ],
    [ 124469953.8037, eqColors[2] ],
    [ 302692052.38910, eqColors[3] ],
    [ 630345387.19820, eqColors[4] ],
    [ 900208116.24820, eqColors[5] ] ],
    LS_EQ_HS_R:
   [ [ 0, eqColors[0] ],
     [ 0.00688, eqColors[1] ],
     [ 0.02839, eqColors[2] ],
     [ 0.05598, eqColors[3] ],
     [ 0.09979, eqColors[4] ],
     [ 0.13898, eqColors[5] ] ],
    LS_FL: [
      [28859, flColors[0]],
      [9539755, flColors[1]],
      [24298022, flColors[2]],
      [46824678, flColors[3]],
      [79036174, flColors[4]],
      [126559055, flColors[5]]],
    LS_FL_R:
     [ [ 0, flColors[0] ],
       [ 0.00017, flColors[1] ],
       [ 0.00098, flColors[2] ],
       [ 0.00367, flColors[3] ],
       [ 0.00752, flColors[4] ],
       [ 0.01207, flColors[5] ] ],
    // does not exist in data
    LS_FL_AAL: emptyLegend,
     // does not exist in data
    LS_FL_AAL_R: emptyLegend,
    LS_WS: [
      [0.110604, wsColors[0]],
      [53327461, wsColors[1]],
      [162470640, wsColors[2]],
      [297403995, wsColors[3]],
      [462105082, wsColors[4]],
      [798351795, wsColors[5]]],
    LS_WS_R:
     [ [ 0, wsColors[0] ],
       [ 0.00005, wsColors[1] ],
       [ 0.00046, wsColors[2] ],
       [ 0.00426, wsColors[3] ],
       [ 0.01368, wsColors[4] ],
       [ 0.07758, wsColors[5] ] ],
    LS_WS_AAL: [
      [1399, wsColors[0]],
      [862825, wsColors[1]],
      [2067265, wsColors[2]],
      [4394840, wsColors[3]],
      [6714980, wsColors[4]],
      [8706085, wsColors[5]]],
    LS_WS_AAL_R:
     [ [ 0.001527, wsColors[0] ],
       [ 0.003055, wsColors[1] ],
       [ 0.004582, wsColors[2] ],
       [ 0.006109, wsColors[3] ],
       [ 0.007637, wsColors[4] ],
       [ 0.009164, wsColors[5] ] ],
    LS_WS_HS:
    [ [ 0.20706, wsColors[0] ],
      [ 12288964.6007, wsColors[1] ],
      [ 31855395.46684, wsColors[2] ],
      [ 55597023.12049, wsColors[3] ],
      [ 114749575.04105, wsColors[4] ],
      [ 226776086.84308, wsColors[5] ] ],
    LS_WS_HS_R:
     [ [ 0, wsColors[0] ],
       [ 0.01252, wsColors[1] ],
       [ 0.04703, wsColors[2] ],
       [ 0.08997, wsColors[3] ],
       [ 0.13554, wsColors[4] ],
       [ 0.17721, wsColors[5] ] ],
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
    LS_EQ_R: emptyLegend,
    LS_EQ_AAL:
   [ [ 0, eqColors[0] ],
     [ 293, eqColors[1] ],
     [ 893, eqColors[2] ],
     [ 2071, eqColors[3] ],
     [ 4767, eqColors[4] ],
     [ 12803, eqColors[5] ] ],
    LS_EQ_AAL_R:
    [ [ 0.00000017, eqColors[0] ],
      [ 0.00041363, eqColors[1] ],
      [ 0.00113841, eqColors[2] ],
      [ 0.00272620, eqColors[3] ],
      [ 0.00504509, eqColors[4] ],
      [ 0.00959474, eqColors[5] ] ],
    LS_EQ_HS:
     [ [ 0.0001, eqColors[0] ],
       [ 50.5213, eqColors[1] ],
       [ 650.92460000, eqColors[2] ],
       [ 5391.26880000, eqColors[3] ],
       [ 25714.07680000, eqColors[4] ],
       [ 103516.68880000, eqColors[5] ] ],
    LS_EQ_HS_R:
     [ [ 0, eqColors[0] ],
       [ 0.0000614, eqColors[1] ],
       [ 0.00077554, eqColors[2] ],
       [ 0.00613435, eqColors[3] ],
       [ 0.03001924, eqColors[4] ],
       [ 0.08831812, eqColors[5] ] ],
    HZ_EQ:
     [ [ 28, eqColors[0] ],
       [ 126, eqColors[1] ],
       [ 190, eqColors[2] ],
       [ 265, eqColors[3] ],
       [ 361, eqColors[4] ],
       [ 531, eqColors[5] ] ],
    LS_FL:
    [ [ 130, flColors[0] ],
      [ 42545, flColors[1] ],
      [ 104560, flColors[2] ],
      [ 199408, flColors[3] ],
      [ 371623, flColors[4] ],
      [ 927976, flColors[5] ] ],
    LS_FL_R:
     [ [ 0.00007333, flColors[0] ],
       [ 0.05988389, flColors[1] ],
       [ 0.16312999, flColors[2] ],
       [ 0.25617342, flColors[3] ],
       [ 0.38883582, flColors[4] ],
       [ 0.58058960, flColors[5] ] ],
    // does not exist in data
    LS_FL_AAL: emptyLegend,
     // does not exist in data
    LS_FL_AAL_R: emptyLegend,
    HZ_FL:
     [ [ 1, flColors[0] ],
       [ 6, flColors[1] ],
       [ 10, flColors[2] ],
       [ 16, flColors[3] ],
       [ 22, flColors[4] ],
       [ 33, flColors[5] ] ],
    LS_WS:
    [ [ 0, wsColors[0] ],
      [ 112, wsColors[1] ],
      [ 891, wsColors[2] ],
      [ 5079, wsColors[3] ],
      [ 26266, wsColors[4] ],
      [ 139018, wsColors[5] ] ],
    LS_WS_R:
     [ [ 0, wsColors[0] ],
       [ 0.00014959, wsColors[1] ],
       [ 0.00110221, wsColors[2] ],
       [ 0.00577015, wsColors[3] ],
       [ 0.02733093, wsColors[4] ],
       [ 0.13356302, wsColors[5] ] ],
    LS_WS_AAL:
     [ [ 0, wsColors[0] ],
       [ 9, wsColors[1] ],
       [ 71, wsColors[2] ],
       [ 264, wsColors[3] ],
       [ 822, wsColors[4] ],
       [ 2761, wsColors[5] ] ],
    LS_WS_AAL_R:
     [ [ 0, wsColors[0] ],
       [ 0.000009, wsColors[1] ],
       [ 0.00010665, wsColors[2] ],
       [ 0.00034011, wsColors[3] ],
       [ 0.00095607, wsColors[4] ],
       [ 0.00271667, wsColors[5] ] ],
    LS_WS_HS:
     [ [ 0.000001, wsColors[0] ],
       [ 0.073053, wsColors[1] ],
       [ 2.256951, wsColors[2] ],
       [ 33.567763, wsColors[3] ],
       [ 417.676263, wsColors[4] ],
       [ 7159.985852, wsColors[5] ] ],
    LS_WS_HS_R:
     [ [ 0, wsColors[0] ],
       [ 0.00000006, wsColors[1] ],
       [ 0.00000229, wsColors[2] ],
       [ 0.00004479, wsColors[3] ],
       [ 0.00052651, wsColors[4] ],
       [ 0.00774061, wsColors[5] ] ],
    HZ_WS:
     [ [ 36, wsColors[0] ],
       [ 76, wsColors[1] ],
       [ 92, wsColors[2] ],
       [ 104, wsColors[3] ],
       [ 118, wsColors[4] ],
       [ 137, wsColors[5] ] ],
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
    'CR-A': {
      'parent': 'CR',
      'extent': [
        [
          -85.44118750729763,
          9.824516913224997
        ],
        [
          -84.15772972502333,
          11.070410665000097
        ]
      ]
    },
    'CR-C': {
      'parent': 'CR',
      'extent': [
        [
          -84.0792809717394,
          9.467587794940798
        ],
        [
          -83.31891394662125,
          10.13622915325287
        ]
      ]
    },
    'CR-G': {
      'parent': 'CR',
      'extent': [
        [
          -85.94644120999993,
          9.72482257244316
        ],
        [
          -84.76399369974945,
          11.209937032000113
        ]
      ]
    },
    'CR-H': {
      'parent': 'CR',
      'extent': [
        [
          -84.20185746944665,
          9.945646471007848
        ],
        [
          -83.70356747106189,
          10.789445903000058
        ]
      ]
    },
    'CR-L': {
      'parent': 'CR',
      'extent': [
        [
          -83.94272600030462,
          9.070641888956033
        ],
        [
          -82.56283687399994,
          10.92770619700012
        ]
      ]
    },
    'CR-P': {
      'parent': 'CR',
      'extent': [
        [
          -85.07620195199993,
          8.034748020073366
        ],
        [
          -82.71936478699988,
          10.331979478470245
        ]
      ]
    },
    'PA-1': {
      'parent': 'PA',
      'extent': [
        [
          -82.94428645899987,
          8.808790797957002
        ],
        [
          -82.00674676403358,
          9.60272247300017
        ]
      ]
    },
    'PA-2': {
      'parent': 'PA',
      'extent': [
        [
          -80.82208960615034,
          8.091395592470278
        ],
        [
          -80.04079891008837,
          9.047484239206227
        ]
      ]
    },
    'PA-3': {
      'parent': 'PA',
      'extent': [
        [
          -80.86259720068591,
          8.613841458416616
        ],
        [
          -79.0745326017882,
          9.629292480000103
        ]
      ]
    },
    'PA-4': {
      'parent': 'PA',
      'extent': [
        [
          -83.05324621699998,
          7.997293363753101
        ],
        [
          -81.51047136126434,
          8.92023775003615
        ]
      ]
    },
    'PA-5': {
      'parent': 'PA',
      'extent': [
        [
          -78.45846127017148,
          7.235098056351049
        ],
        [
          -77.16326981599994,
          9.073244941500832
        ]
      ]
    },
    'PA-6': {
      'parent': 'PA',
      'extent': [
        [
          -80.9469915429253,
          7.529592392874648
        ],
        [
          -80.3754998749074,
          8.138547471888387
        ]
      ]
    },
    'PA-7': {
      'parent': 'PA',
      'extent': [
        [
          -80.72206987162724,
          7.236721022409128
        ],
        [
          -79.99351966099988,
          7.997220016030852
        ]
      ]
    },
    'PA-8': {
      'parent': 'PA',
      'extent': [
        [
          -80.16450700599353,
          8.353006501281214
        ],
        [
          -78.04254350457904,
          9.479008287402607
        ]
      ]
    },
    'PA-9': {
      'parent': 'PA',
      'extent': [
        [
          -81.6635583837735,
          7.20571523600016
        ],
        [
          -80.60407507167963,
          8.88569791600014
        ]
      ]
    },
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
    'CR-SJ': {
      'parent': 'CR',
      'extent': [
        [
          -84.59162696001616,
          9.066061916923914
        ],
        [
          -83.42939816009698,
          10.198964342030777
        ]
      ]
    },
    'GD-01': {
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
    'GD-02': {
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
    'GD-03': {
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
    'GD-04': {
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
    'GD-05': {
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
    'GD-06': {
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
    'GD-10': {
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
    'GT-AV': {
      'parent': 'GT',
      'extent': [
        [
          -90.8181461246439,
          15.151065171820207
        ],
        [
          -89.39634660511169,
          16.082377835168955
        ]
      ]
    },
    'GT-BV': {
      'parent': 'GT',
      'extent': [
        [
          -90.87191545303568,
          14.881520901468463
        ],
        [
          -89.91737423383384,
          15.295707506296367
        ]
      ]
    },
    'GT-CM': {
      'parent': 'GT',
      'extent': [
        [
          -91.1141487292804,
          14.382843329456122
        ],
        [
          -90.6576132876231,
          14.94187897433514
        ]
      ]
    },
    'GT-CQ': {
      'parent': 'GT',
      'extent': [
        [
          -89.73635169117759,
          14.415477804000076
        ],
        [
          -89.14269364499992,
          14.949320380431175
        ]
      ]
    },
    'GT-ES': {
      'parent': 'GT',
      'extent': [
        [
          -91.53290869787813,
          13.911135082000044
        ],
        [
          -90.51570980516334,
          14.489296779722594
        ]
      ]
    },
    'GT-GU': {
      'parent': 'GT',
      'extent': [
        [
          -90.76522945787318,
          14.256236070338431
        ],
        [
          -90.20908769374205,
          14.9170226105051
        ]
      ]
    },
    'GT-HU': {
      'parent': 'GT',
      'extent': [
        [
          -92.1059312312205,
          15.155974433273485
        ],
        [
          -90.99479783187715,
          16.069868592930703
        ]
      ]
    },
    'GT-IZ': {
      'parent': 'GT',
      'extent': [
        [
          -89.66136918763786,
          15.07128439113093
        ],
        [
          -88.22092213512124,
          15.969631252000028
        ]
      ]
    },
    'GT-JA': {
      'parent': 'GT',
      'extent': [
        [
          -90.28520707884357,
          14.43348623310321
        ],
        [
          -89.66023230697536,
          14.877645168789485
        ]
      ]
    },
    'GT-JU': {
      'parent': 'GT',
      'extent': [
        [
          -90.29285519141393,
          13.728903047894377
        ],
        [
          -89.49614812996609,
          14.577611802742481
        ]
      ]
    },
    'GT-PE': {
      'parent': 'GT',
      'extent': [
        [
          -91.4425015869999,
          15.84210826278607
        ],
        [
          -89.1492048451793,
          17.816019593000135
        ]
      ]
    },
    'GT-PR': {
      'parent': 'GT',
      'extent': [
        [
          -90.41760209765872,
          14.674298406945937
        ],
        [
          -89.7645670228498,
          15.159850165053086
        ]
      ]
    },
    'GT-QC': {
      'parent': 'GT',
      'extent': [
        [
          -91.33222327278574,
          14.80710683781031
        ],
        [
          -90.43150305881909,
          16.079259908059214
        ]
      ]
    },
    'GT-QZ': {
      'parent': 'GT',
      'extent': [
        [
          -92.13796220579115,
          14.511724350798175
        ],
        [
          -91.42828976116348,
          15.220880032387555
        ]
      ]
    },
    'GT-RE': {
      'parent': 'GT',
      'extent': [
        [
          -92.16238988882014,
          14.11734934296716
        ],
        [
          -91.51050696522427,
          14.74013418204683
        ]
      ]
    },
    'GT-SA': {
      'parent': 'GT',
      'extent': [
        [
          -90.89147498178497,
          14.40490916622501
        ],
        [
          -90.6175898907608,
          14.777909654207207
        ]
      ]
    },
    'GT-SM': {
      'parent': 'GT',
      'extent': [
        [
          -92.24623383208248,
          14.487333675796862
        ],
        [
          -91.61610775386978,
          15.454469061998822
        ]
      ]
    },
    'GT-SO': {
      'parent': 'GT',
      'extent': [
        [
          -91.47660722484349,
          14.53043121972506
        ],
        [
          -91.0688284982366,
          14.9106664091275
        ]
      ]
    },
    'GT-SR': {
      'parent': 'GT',
      'extent': [
        [
          -90.62743425208905,
          13.788715509927044
        ],
        [
          -90.05033769432913,
          14.519062405005997
        ]
      ]
    },
    'GT-SU': {
      'parent': 'GT',
      'extent': [
        [
          -91.6652262032267,
          14.047140122236797
        ],
        [
          -91.09539018440944,
          14.739565741265977
        ]
      ]
    },
    'GT-TO': {
      'parent': 'GT',
      'extent': [
        [
          -91.59388688836916,
          14.817648831128594
        ],
        [
          -91.18298173701749,
          15.264908352238663
        ]
      ]
    },
    'GT-ZA': {
      'parent': 'GT',
      'extent': [
        [
          -89.87799679211824,
          14.779873358968317
        ],
        [
          -89.14694031907018,
          15.302890529974007
        ]
      ]
    },
    'HN-AT': {
      'parent': 'HN',
      'extent': [
        [
          -86.47687740799998,
          15.96544017100014
        ],
        [
          -86.46552486899989,
          15.980617580000128
        ]
      ]
    },
    'HN-CH': {
      'parent': 'HN',
      'extent': [
        [
          -87.51223710799988,
          12.979777324000082
        ],
        [
          -86.70186071799992,
          13.76060740780565
        ]
      ]
    },
    'HN-CL': {
      'parent': 'HN',
      'extent': [
        [
          -86.44725012928996,
          15.068744614972033
        ],
        [
          -84.99994828988162,
          16.033148505000042
        ]
      ]
    },
    'HN-CM': {
      'parent': 'HN',
      'extent': [
        [
          -88.07787411200064,
          14.051028958319733
        ],
        [
          -87.20834062392066,
          15.057634181772087
        ]
      ]
    },
    'HN-CP': {
      'parent': 'HN',
      'extent': [
        [
          -89.2324297689999,
          14.500303860135062
        ],
        [
          -88.63928687189161,
          15.299961813993335
        ]
      ]
    },
    'HN-CR': {
      'parent': 'HN',
      'extent': [
        [
          -88.46743393621341,
          14.803541165292529
        ],
        [
          -87.72515662317957,
          15.921002744382491
        ]
      ]
    },
    'HN-EP': {
      'parent': 'HN',
      'extent': [
        [
          -87.22412777367782,
          13.50579092001496
        ],
        [
          -85.56314591282683,
          14.423822739827585
        ]
      ]
    },
    'HN-FM': {
      'parent': 'HN',
      'extent': [
        [
          -87.64939897328395,
          13.660045070923317
        ],
        [
          -86.71356462300889,
          15.031899318798565
        ]
      ]
    },
    'HN-GD': {
      'parent': 'HN',
      'extent': [
        [
          -85.44725012928996,
          14.568744614972033
        ],
        [
          -83.99994828988162,
          16.033148505000042
        ]
      ]
    },
    'HN-IB': {
      'parent': 'HN',
      'extent': [
        [
          -83.94115149599989,
          17.40908437700007
        ],
        [
          -83.91234290299988,
          17.418646552000055
        ]
      ]
    },
    'HN-IN': {
      'parent': 'HN',
      'extent': [
        [
          -88.50229345799991,
          13.851197002146606
        ],
        [
          -87.8477847968309,
          14.664841620144657
        ]
      ]
    },
    'HN-LE': {
      'parent': 'HN',
      'extent': [
        [
          -88.97887854680746,
          13.969068092259292
        ],
        [
          -88.31680009634741,
          14.94167226786081
        ]
      ]
    },
    'HN-LP': {
      'parent': 'HN',
      'extent': [
        [
          -88.2322316147972,
          13.834194648264386
        ],
        [
          -87.59658566020008,
          14.429093736486735
        ]
      ]
    },
    'HN-OC': {
      'parent': 'HN',
      'extent': [
        [
          -89.36379125999991,
          14.210176262012553
        ],
        [
          -88.71532874172806,
          14.728920396059493
        ]
      ]
    },
    'HN-OL': {
      'parent': 'HN',
      'extent': [
        [
          -86.98747555155543,
          14.042012280921142
        ],
        [
          -84.99994828988162,
          15.584992174349395
        ]
      ]
    },
    'HN-SB': {
      'parent': 'HN',
      'extent': [
        [
          -88.76089940179301,
          14.64877025044666
        ],
        [
          -87.98581254841034,
          15.540447088762136
        ]
      ]
    },
    'HN-VA': {
      'parent': 'HN',
      'extent': [
        [
          -87.81715873492499,
          13.355007229000165
        ],
        [
          -87.34778947610343,
          13.849904282756455
        ]
      ]
    },
    'HN-YO': {
      'parent': 'HN',
      'extent': [
        [
          -87.93511796702055,
          14.897747300797278
        ],
        [
          -86.23289628793333,
          15.721004544324302
        ]
      ]
    },
    'JM-01': {
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
    'JM-02': {
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
    'JM-03': {
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
    'JM-04': {
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
    'JM-05': {
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
    'JM-06': {
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
    'JM-07': {
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
    'JM-08': {
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
    'JM-09': {
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
    'JM-10': {
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
    'JM-11': {
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
    'JM-12': {
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
    'JM-13': {
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
    'JM-14': {
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
    'LC-01': {
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
    'LC-02': {
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
    'LC-03': {
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
    'LC-04': {
      'parent': 'LC',
      'extent': [
        [
          -60.94052231155541,
          13.979272018089176
        ],
        [
          -60.88296464775016,
          14.073391018140498
        ]
      ]
    },
    'LC-05': {
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
    'LC-06': {
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
    'LC-07': {
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
    'LC-08': {
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
    'LC-09': {
      'parent': 'LC',
      'extent': [
        [
          -60.96433451752395,
          13.832638964116924
        ],
        [
          -60.890225359041835,
          13.908475137406569
        ]
      ]
    },
    'LC-10': {
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
    'LC-11': {
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
    'NI-AN': {
      'parent': 'NI',
      'extent': [
        [
          -85.50637732635244,
          13.030264391288654
        ],
        [
          -83.13044447249342,
          15.030969950000156
        ]
      ]
    },
    'NI-AS': {
      'parent': 'NI',
      'extent': [
        [
          -85.22789303313701,
          10.943959563909331
        ],
        [
          -83.47923743399991,
          13.282342027062967
        ]
      ]
    },
    'NI-BO': {
      'parent': 'NI',
      'extent': [
        [
          -85.97836402098275,
          12.041332506190201
        ],
        [
          -84.96852901909892,
          12.793663845110359
        ]
      ]
    },
    'NI-CA': {
      'parent': 'NI',
      'extent': [
        [
          -86.5023406975962,
          11.519466113974715
        ],
        [
          -86.0724668037,
          11.956996567737392
        ]
      ]
    },
    'NI-CI': {
      'parent': 'NI',
      'extent': [
        [
          -87.6858210929999,
          12.458383769120559
        ],
        [
          -86.65460181322311,
          13.293349915000093
        ]
      ]
    },
    'NI-CO': {
      'parent': 'NI',
      'extent': [
        [
          -85.65665239089506,
          11.63146088271354
        ],
        [
          -84.57462541433134,
          12.649512437049367
        ]
      ]
    },
    'NI-ES': {
      'parent': 'NI',
      'extent': [
        [
          -86.73221981509238,
          12.84851837822059
        ],
        [
          -86.09951941628793,
          13.43812063226136
        ]
      ]
    },
    'NI-GR': {
      'parent': 'NI',
      'extent': [
        [
          -86.12321306013459,
          11.604718329387339
        ],
        [
          -85.52291378494317,
          12.206180325461617
        ]
      ]
    },
    'NI-JI': {
      'parent': 'NI',
      'extent': [
        [
          -86.24785661539045,
          12.993935859052641
        ],
        [
          -84.83546220581619,
          14.602540872131797
        ]
      ]
    },
    'NI-LE': {
      'parent': 'NI',
      'extent': [
        [
          -87.17357337099995,
          12.000522848172324
        ],
        [
          -86.26390214666671,
          13.12152497010129
        ]
      ]
    },
    'NI-MD': {
      'parent': 'NI',
      'extent': [
        [
          -86.76412956516353,
          13.200357366998901
        ],
        [
          -86.05967688657907,
          13.660148423710794
        ]
      ]
    },
    'NI-MN': {
      'parent': 'NI',
      'extent': [
        [
          -86.67072080122091,
          11.766775283427307
        ],
        [
          -85.82806311711914,
          12.636464138409224
        ]
      ]
    },
    'NI-MS': {
      'parent': 'NI',
      'extent': [
        [
          -86.28142045808767,
          11.85617584933594
        ],
        [
          -85.96404964867233,
          12.152281805860639
        ]
      ]
    },
    'NI-MT': {
      'parent': 'NI',
      'extent': [
        [
          -86.28881018823955,
          12.522078354732272
        ],
        [
          -84.69645260320505,
          13.381534939285984
        ]
      ]
    },
    'NI-NS': {
      'parent': 'NI',
      'extent': [
        [
          -86.77405269399995,
          13.48517202406967
        ],
        [
          -85.74311460287828,
          14.055163879000077
        ]
      ]
    },
    'NI-RI': {
      'parent': 'NI',
      'extent': [
        [
          -86.17520096373869,
          10.93935923300009
        ],
        [
          -84.88496903479657,
          11.682052110416578
        ]
      ]
    },
    'NI-SJ': {
      'parent': 'NI',
      'extent': [
        [
          -85.34097482772606,
          10.713481547000114
        ],
        [
          -83.64435787699989,
          11.870541896691208
        ]
      ]
    },
    'PA-EM': {
      'parent': 'PA',
      'extent': [
        [
          -77.90859819215282,
          8.08165172055051
        ],
        [
          -77.26943425084494,
          8.776622219240124
        ]
      ]
    },
    'PA-KY': {
      'parent': 'PA',
      'extent': [
        [
          -79.28104671923072,
          8.53781160611048
        ],
        [
          -77.37352454299992,
          9.573313287000175
        ]
      ]
    },
    'PA-NB': {
      'parent': 'PA',
      'extent': [
        [
          -82.43963945179925,
          8.262157498369902
        ],
        [
          -81.15607438762288,
          9.179510809000178
        ]
      ]
    },
    'SV-AH': {
      'parent': 'SV',
      'extent': [
        [
          -90.11477901199996,
          13.66507262404184
        ],
        [
          -89.69586320722118,
          14.060073141000103
        ]
      ]
    },
    'SV-CA': {
      'parent': 'SV',
      'extent': [
        [
          -88.97652726931796,
          13.748695989828093
        ],
        [
          -88.48800492399994,
          14.016122335000162
        ]
      ]
    },
    'SV-CH': {
      'parent': 'SV',
      'extent': [
        [
          -89.42717159669184,
          13.946358343862471
        ],
        [
          -88.69044734699995,
          14.413075726131908
        ]
      ]
    },
    'SV-CU': {
      'parent': 'SV',
      'extent': [
        [
          -89.16083126455118,
          13.642294216404949
        ],
        [
          -88.85025590698453,
          14.075962836515643
        ]
      ]
    },
    'SV-LI': {
      'parent': 'SV',
      'extent': [
        [
          -89.60942467545763,
          13.414457692977962
        ],
        [
          -89.11186784482518,
          14.071622015843317
        ]
      ]
    },
    'SV-MO': {
      'parent': 'SV',
      'extent': [
        [
          -88.27417077283144,
          13.541783556366042
        ],
        [
          -87.93635820226919,
          13.992867941000057
        ]
      ]
    },
    'SV-PA': {
      'parent': 'SV',
      'extent': [
        [
          -89.1443723212256,
          13.266079643991532
        ],
        [
          -88.78131954556056,
          13.672938340831749
        ]
      ]
    },
    'SV-SA': {
      'parent': 'SV',
      'extent': [
        [
          -89.75544693999993,
          13.775076808847686
        ],
        [
          -89.24651079014083,
          14.4453726200001
        ]
      ]
    },
    'SV-SM': {
      'parent': 'SV',
      'extent': [
        [
          -88.53239417205339,
          13.171202106029781
        ],
        [
          -88.00855017784838,
          13.919119724247864
        ]
      ]
    },
    'SV-SO': {
      'parent': 'SV',
      'extent': [
        [
          -89.95348268207363,
          13.513063057255522
        ],
        [
          -89.43616329639895,
          13.908970445329771
        ]
      ]
    },
    'SV-SS': {
      'parent': 'SV',
      'extent': [
        [
          -89.27410600508807,
          13.488117580761738
        ],
        [
          -89.02357866112627,
          14.068211371157787
        ]
      ]
    },
    'SV-SV': {
      'parent': 'SV',
      'extent': [
        [
          -88.8960670644434,
          13.259526735721835
        ],
        [
          -88.48733232342789,
          13.812283840227039
        ]
      ]
    },
    'SV-UN': {
      'parent': 'SV',
      'extent': [
        [
          -88.09147094579231,
          13.158636786000116
        ],
        [
          -87.70360835799991,
          13.915870057000177
        ]
      ]
    },
    'SV-US': {
      'parent': 'SV',
      'extent': [
        [
          -88.81715715228074,
          13.16042715100005
        ],
        [
          -88.1124918998184,
          13.69283376726456
        ]
      ]
    },
    'BZ-CZL': {
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
    'BZ-TOL': {
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
  districtName: {
    None: [
      {key: '-', value: '-'}
    ],
    BZ: [
    ],
    CR: [
      {key: 'CR-A', value: 'CR-A'},
      {key: 'CR-C', value: 'CR-C'},
      {key: 'CR-G', value: 'CR-G'},
      {key: 'CR-H', value: 'CR-H'},
      {key: 'CR-L', value: 'CR-L'},
      {key: 'CR-P', value: 'CR-P'},
      {key: 'CR-SJ', value: 'CR-SJ'}
    ],
    GD: [
    ],
    GT: [
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
      {key: 'GT-ZA', value: 'GT-ZA'}
    ],
    HN: [
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
      {key: 'HN-YO', value: 'HN-YO'}
    ],
    JM: [
    ],
    LC: [
    ],
    NI: [
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
      {key: 'NI-SJ', value: 'NI-JS'}
    ],
    PA: [
      {key: 'PA-1', value: 'PA-1'},
      {key: 'PA-2', value: 'PA-2'},
      {key: 'PA-3', value: 'PA-3'},
      {key: 'PA-4', value: 'PA-4'},
      {key: 'PA-5', value: 'PA-5'},
      {key: 'PA-6', value: 'PA-6'},
      {key: 'PA-7', value: 'PA-7'},
      {key: 'PA-8', value: 'PA-8'},
      {key: 'PA-9', value: 'PA-9'},
      {key: 'PA-EM', value: 'PA-EM'},
      {key: 'PA-KY', value: 'PA-KY'},
      {key: 'PA-NB', value: 'PA-NB'}
    ],
    SV: [
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

export const textLayers = [
  'waterway-label',
  'water-label',
  'place-hamlet',
  'place-village',
  'place-town',
  'place-city-sm',
  'place-city-md-s',
  'place-city-md-n',
  'place-city-lg-s',
  'place-city-lg-n',
  'marine-label-sm-ln',
  'marine-label-sm-pt',
  'marine-label-md-ln',
  'marine-label-md-pt',
  'marine-label-lg-ln',
  'marine-label-lg-pt',
  'state-label-sm',
  'state-label-md',
  'state-label-lg',
  'country-label-sm',
  'country-label-sm copy',
  'country-label-sm copy 1',
  'country-label-md',
  'country-label-lg'
]

import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'CA_Earthquake_Admin_0-3k2o2l',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.8r149eiv'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'CA_Earthquake_Admin_1-8hvttj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.2j87qn16'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'grid-10s7dj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://nbumbarg.9p1j2upq'
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
  centerpoint: [-86, 13],
  zoom: 5.75,
  zoomLevel: {
    admin0: 7,
    admin1: 8,
    km10: 12
  }
}

const makeLegend = (scale, steps) => {
  return steps.map((step, i) => [step, scale(i / (steps.length - 1)).hex()])
}
const inactiveScale = chroma.scale(['rgb(200, 200, 255)', 'rgb(40, 40, 80)'])
const hoverScale = chroma.scale(['rgb(200, 240, 240)', 'rgb(40, 80, 80)'])

export const inactiveLegends = {
  hurricane: makeLegend(inactiveScale,
    [450000, 1500000, 4500000, 13500000, 26000000, 250000000]),
  earthquake: makeLegend(inactiveScale,
    [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000])
}
export const hoverLegend = makeLegend(hoverScale,
  [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000])

// Used in beta to map disasters to different RP columns
export const columnMap = {earthquake: 'RP_10', hurricane: 'RP_500', flood: 'AAL'}

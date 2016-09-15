import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'gadm0-773uw6',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://nbumbarg.08g2uxh7'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'CA_Earthquake_PML_AAL_Admin1-6dnqpw',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.5vzd5cic'
  },
  km10: {
    id: 'km10',
    sourceLayer: 'grid-10s7dj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://nbumbarg.9p1j2upq'
  }
}

const makeLegend = (scale, steps) => {
  return steps.map((step, i) => [step, scale(i / (steps.length - 1)).hex()])
}

const inactiveScale = chroma.scale(['rgb(240, 240, 240)', 'rgb(125, 125, 125)'])
const hoverScale = chroma.scale(['rgb(240, 255, 255)', 'rgb(155, 195, 195)'])

export const inactiveLegends = {
  hurricane: makeLegend(inactiveScale,
    [450000, 1500000, 4500000, 13500000, 26000000, 250000000]),
  earthquake: makeLegend(inactiveScale,
    [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000]),
  flood: makeLegend(inactiveScale,
    [26000000, 47600000, 69200000, 90800000, 112400000, 134000000])}

export const hoverLegend = makeLegend(hoverScale,
  [20500000, 75000000, 165000000, 320000000, 620000000, 6500000000])

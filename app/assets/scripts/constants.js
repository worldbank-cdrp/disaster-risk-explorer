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
  km10: { // Represents 10km grid, temporarily is NE Lakes
    id: 'km10',
    sourceLayer: 'grid-10s7dj',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://nbumbarg.9p1j2upq'
  }
}

const inactiveScale = chroma.scale(['rgb(240, 240, 240)', 'rgb(125, 125, 125)'])
const hoverScale = chroma.scale(['rgb(240, 255, 255)', 'rgb(155, 195, 195)'])

const hurricaneLegend = [
 [5000000, inactiveScale(0).hex()],
 [5200000, inactiveScale(0.2).hex()],
 [5400000, inactiveScale(0.4).hex()],
 [5600000, inactiveScale(0.6).hex()],
 [5800000, inactiveScale(0.8).hex()],
 [6000000, inactiveScale(1).hex()]
]

const earthquakeLegend = [
 [20500000, inactiveScale(1).hex()],
 [75000000, inactiveScale(0.3).hex()],
 [165000000, inactiveScale(0.2).hex()],
 [320000000, inactiveScale(0.8).hex()],
 [620000000, inactiveScale(0.4).hex()],
 [6500000000, inactiveScale(0.7).hex()]
]

const floodLegend = [
 [20500000, inactiveScale(0.4).hex()],
 [75000000, inactiveScale(0.3).hex()],
 [165000000, inactiveScale(0.1).hex()],
 [320000000, inactiveScale(0.8).hex()],
 [620000000, inactiveScale(0.7).hex()],
 [6500000000, inactiveScale(0.9).hex()]
]

export const inactiveLegends = {
  hurricane: hurricaneLegend,
  earthquake: earthquakeLegend,
  flood: floodLegend
}

export const hoverLegend = [
 [20500000, hoverScale(0.4).hex()],
 [75000000, hoverScale(0.3).hex()],
 [165000000, hoverScale(0.1).hex()],
 [320000000, hoverScale(0.8).hex()],
 [620000000, hoverScale(0.7).hex()],
 [6500000000, hoverScale(0.9).hex()]
]

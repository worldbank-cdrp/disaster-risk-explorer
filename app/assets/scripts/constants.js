import chroma from 'chroma-js'

export const mapSources = {
  admin0: {
    id: 'admin0',
    sourceLayer: 'CA_Earthquake_PML_AAL_Admin1-6dnqpw',
    idProp: 'UNIQUE_ID',
    url: 'mapbox://devseed.5vzd5cic'
  },
  admin1: {
    id: 'admin1',
    sourceLayer: 'gadm1-8qp5sw',
    idProp: 'RANDOM_1',
    url: 'mapbox://nbumbarg.9bbi1f15'
  },
  km10: { // Represents 10km grid, temporarily is NE Lakes
    id: 'km10',
    sourceLayer: 'grid-8c283l',
    idProp: 'RANDOM_1',
    url: 'mapbox://nbumbarg.044pdhvx'
  }
}

const inactiveScale = chroma.scale(['rgb(240, 240, 240)', 'rgb(125, 125, 125)'])
export const inactiveLegend = [
  [0, inactiveScale(0).hex()],
  [10, inactiveScale(0.1).hex()],
  [20, inactiveScale(0.2).hex()],
  [30, inactiveScale(0.3).hex()],
  [40, inactiveScale(0.4).hex()],
  [50, inactiveScale(0.5).hex()],
  [60, inactiveScale(0.6).hex()],
  [70, inactiveScale(0.7).hex()],
  [80, inactiveScale(0.8).hex()],
  [90, inactiveScale(0.8).hex()],
  [100, inactiveScale(0.9).hex()]]

let hoverScale = chroma.scale(['rgb(240, 255, 255)', 'rgb(155, 195, 195)'])
export const hoverLegend = [
  [0, hoverScale(0).hex()],
  [10, hoverScale(0.1).hex()],
  [20, hoverScale(0.2).hex()],
  [30, hoverScale(0.3).hex()],
  [40, hoverScale(0.4).hex()],
  [50, hoverScale(0.5).hex()],
  [60, hoverScale(0.6).hex()],
  [70, hoverScale(0.7).hex()],
  [80, hoverScale(0.8).hex()],
  [90, hoverScale(0.8).hex()],
  [100, hoverScale(0.9).hex()]]

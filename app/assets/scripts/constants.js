import chroma from 'chroma-js'

export const mapSources = {
  admin0: { // Represents admin 0, temporarily is NE States and Provinces
    id: 'admin0',
    sourceLayer: 'states-03siee',
    idProp: 'random',
    url: 'mapbox://nbumbarg.0u72jvpm'
  },
  admin1: { // Represents admin 1, temporarily is NE Countries
    id: 'admin1',
    sourceLayer: 'countries-0fa7el',
    idProp: 'ADM0_A3',
    url: 'mapbox://nbumbarg.0bpph7d3'
  },
  km10: { // // Represents 10km grid, temporarily is NE Lakes
    id: 'km10',
    sourceLayer: 'lakes-4r5olz',
    idProp: 'name',
    url: 'mapbox://nbumbarg.6p0hhoxg'
  }
}

const inactiveScale = chroma.scale(['rgb(240, 240, 240)', 'rgb(185, 185, 185)'])
export const inactiveLegend = [
  [0, inactiveScale(0).hex()],
  [1, inactiveScale(0.1).hex()],
  [2, inactiveScale(0.2).hex()],
  [3, inactiveScale(0.3).hex()],
  [4, inactiveScale(0.4).hex()],
  [5, inactiveScale(0.5).hex()],
  [6, inactiveScale(0.6).hex()],
  [7, inactiveScale(0.7).hex()],
  [8, inactiveScale(0.8).hex()],
  [9, inactiveScale(0.9).hex()]]

let hoverScale = chroma.scale(['black', 'blue'])
export const hoverLegend = [
  [0, hoverScale(0).hex()],
  [1, hoverScale(0.1).hex()],
  [2, hoverScale(0.2).hex()],
  [3, hoverScale(0.3).hex()],
  [4, hoverScale(0.4).hex()],
  [5, hoverScale(0.5).hex()],
  [6, hoverScale(0.6).hex()],
  [7, hoverScale(0.7).hex()],
  [8, hoverScale(0.8).hex()],
  [9, hoverScale(0.9).hex()]]

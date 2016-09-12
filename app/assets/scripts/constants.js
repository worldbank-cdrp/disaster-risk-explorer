import chroma from 'chroma-js'

export const mapSources = {
  admin0: { // Represents admin 0, temporarily is NE States and Provinces
    id: 'admin0',
    sourceLayer: 'ne_10m_admin_1_states_provinc-89mtkq',
    idProp: 'OBJECTID_1',
    url: 'mapbox://nbumbarg.07mallbu'
  },
  admin1: { // Represents admin 1, temporarily is NE Countries
    id: 'admin1',
    sourceLayer: 'ne_10m_admin_0_countries-1mfz41',
    idProp: 'ADM0_A3',
    url: 'mapbox://nbumbarg.ary69jed'
  },
  admin2: { // Represents admin2?, temporarily is NE Lakes
    id: 'admin2',
    sourceLayer: 'ne_10m_lakes-a6ve5w',
    idProp: 'name',
    url: 'mapbox://nbumbarg.ae5132j0'
  },
  km10: { // Represents 10km grid, temporarily is NE Urban Areas
    id: 'km10',
    sourceLayer: 'ne_50m_urban_areas-635qev',
    idProp: 'area_sqkm',
    url: 'mapbox://nbumbarg.b5h1mumk'
  }
}

const inactiveScale = chroma.scale(['black', 'red'])
export const inactiveLegend = [
  [1, inactiveScale(0).hex()],
  [2, inactiveScale(0.17).hex()],
  [3, inactiveScale(0.34).hex()],
  [4, inactiveScale(0.51).hex()],
  [5, inactiveScale(0.68).hex()],
  [6, inactiveScale(0.85).hex()],
  [7, inactiveScale(1).hex()]]

let hoverScale = chroma.scale(['black', 'blue'])
export const hoverLegend = [
  [1, hoverScale(0).hex()],
  [2, hoverScale(0.17).hex()],
  [3, hoverScale(0.34).hex()],
  [4, hoverScale(0.51).hex()],
  [5, hoverScale(0.68).hex()],
  [6, hoverScale(0.85).hex()],
  [7, hoverScale(1).hex()]]

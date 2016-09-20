export const UPDATE_MAP_SOURCE = 'UPDATE_MAP_SOURCE'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'
export const TOGGLE_CALCULATOR = 'TOGGLE_CALCULATOR'

export function updateMapSource (mapSource) {
  return { type: UPDATE_MAP_SOURCE, data: mapSource }
}

export function updateSelected (feature) {
  return { type: UPDATE_SELECTED, data: feature }
}

export function toggleCalculator (toggle) {
  return { type: TOGGLE_CALCULATOR, data: toggle }
}

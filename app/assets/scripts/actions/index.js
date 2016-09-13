export const UPDATE_MAP_SOURCE = 'UPDATE_MAP_SOURCE'
export const UPDATE_HOVERED = 'UPDATE_HOVERED'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'

export function updateMapSource (mapSource) {
  return { type: UPDATE_MAP_SOURCE, data: mapSource }
}

export function updateHovered (hovered) {
  return { type: UPDATE_HOVERED, data: hovered }
}

export function updateSelected (feature) {
  return { type: UPDATE_SELECTED, data: feature }
}

export const UPDATE_MAP_SOURCE = 'UPDATE_MAP_SOURCE'
export const UPDATE_SELECTED = 'UPDATE_SELECTED'
export const SHOW_MODAL_ABOUT = 'SHOW_MODAL_ABOUT'
export const HIDE_MODAL_ABOUT = 'HIDE_MODAL_ABOUT'

export function updateMapSource (mapSource) {
  return { type: UPDATE_MAP_SOURCE, data: mapSource }
}

export function updateSelected (feature) {
  return { type: UPDATE_SELECTED, data: feature }
}

export function showModalAbout () {
  return { type: SHOW_MODAL_ABOUT }
}

export function hideModalAbout () {
  return { type: HIDE_MODAL_ABOUT }
}

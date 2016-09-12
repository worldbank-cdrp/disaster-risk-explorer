import { UPDATE_MAP_SOURCE, UPDATE_HOVERED, UPDATE_SELECTED } from '../actions'
import { mapSources } from '../constants'

export const initialState = {
  mapSource: mapSources.km10,
  hovered: 0,
  selected: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP_SOURCE:
      return Object.assign({}, state, { mapSource: action.data })
    case UPDATE_HOVERED:
      return Object.assign({}, state, { hovered: action.data })
    case UPDATE_SELECTED:
      return Object.assign({}, state, { selected: action.data })
    default:
      return state
  }
}

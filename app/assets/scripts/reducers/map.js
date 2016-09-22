import { UPDATE_MAP_SOURCE, UPDATE_SELECTED } from '../actions'
import { mapSources } from '../constants'

export const initialState = {
  mapSource: mapSources.admin1,
  selected: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_MAP_SOURCE:
      return Object.assign({}, state, { mapSource: action.data })
    case UPDATE_SELECTED:
      return Object.assign({}, state, { selected: action.data })
    default:
      return state
  }
}

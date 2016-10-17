import { TOGGLE_MAP_TYPE } from '../actions'

export const initialState = {
  mapType: 'absolute'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MAP_TYPE:
      return Object.assign({}, state, { mapType: action.data })
    default:
      return state
  }
}

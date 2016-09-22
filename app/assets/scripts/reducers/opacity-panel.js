import { UPDATE_OPACITY } from '../actions'

export const initialState = {
  opacity: 75
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_OPACITY:
      return Object.assign({}, state, { opacity: action.data })
    default:
      return state
  }
}

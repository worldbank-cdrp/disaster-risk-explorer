import { SELECT_CONVERSION } from '../actions'

export const initialState = {
  conversion: 'retrofit'
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_CONVERSION:
      return Object.assign({}, state, { conversion: action.data })
    default:
      return state
  }
}

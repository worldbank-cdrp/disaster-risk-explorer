import { TOGGLE_CALCULATOR } from '../actions'

export const initialState = {
  calculatorOpen: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CALCULATOR:
      return Object.assign({}, state, { calculatorOpen: action.data })
    default:
      return state
  }
}

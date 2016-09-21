import { SELECT_CONVERSION, UPDATE_SLIDER_VALUE } from '../actions'

export const initialState = {
  conversion: 'retrofit',
  sliderValue: 0.50
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SELECT_CONVERSION:
      return Object.assign({}, state, { conversion: action.data })
    case UPDATE_SLIDER_VALUE:
      return Object.assign({}, state, { sliderValue: action.data })
    default:
      return state
  }
}

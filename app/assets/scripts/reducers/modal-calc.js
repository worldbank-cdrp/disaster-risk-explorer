import { SHOW_MODAL_CALC, HIDE_MODAL_CALC, SELECT_CONVERSION, UPDATE_SLIDER_VALUE } from '../actions'

export const initialState = {
  calcVisible: true,
  conversion: 'retrofit',
  sliderValue: 0.50
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_CALC:
      return Object.assign({}, state, { calcVisible: true })
    case HIDE_MODAL_CALC:
      return Object.assign({}, state, { calcVisible: false })
    case SELECT_CONVERSION:
      return Object.assign({}, state, { conversion: action.data })
    case UPDATE_SLIDER_VALUE:
      return Object.assign({}, state, { sliderValue: action.data })
    default:
      return state
  }
}

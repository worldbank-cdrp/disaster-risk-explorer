import { UPDATE_NEWCALCID, SHOW_MODAL_CALC, HIDE_MODAL_CALC, SELECT_CONVERSION, UPDATE_UCC,
  UPDATE_SLIDER_VALUE } from '../actions'

export const initialState = {
  calcVisible: false,
  conversion: 'retrofit',
  newCalcId: 'BZ',
  sliderValue: 0.50,
  unitCostOfConstruction: null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_CALC:
      return Object.assign({}, state, { calcVisible: true })
    case HIDE_MODAL_CALC:
      return Object.assign({}, state, { calcVisible: false })
    case UPDATE_NEWCALCID:
      return Object.assign({}, state, { newCalcId: action.data })
    case SELECT_CONVERSION:
      return Object.assign({}, state, { conversion: action.data })
    case UPDATE_SLIDER_VALUE:
      return Object.assign({}, state, { sliderValue: action.data })
    case UPDATE_UCC:
      return Object.assign({}, state, { unitCostOfConstruction: action.data })
    default:
      return state
  }
}

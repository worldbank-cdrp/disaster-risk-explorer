import { SHOW_MODAL_CALC, HIDE_MODAL_CALC } from '../actions'

export const initialState = {
  visible: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_CALC:
      return Object.assign({}, state, { visible: true })
    case HIDE_MODAL_CALC:
      return Object.assign({}, state, { visible: false })
    default:
      return state
  }
}

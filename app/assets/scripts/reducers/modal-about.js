import { SHOW_MODAL_ABOUT, HIDE_MODAL_ABOUT } from '../actions'

export const initialState = {
  visible: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_ABOUT:
      return Object.assign({}, state, { visible: true })
    case HIDE_MODAL_ABOUT:
      return Object.assign({}, state, { visible: false })
    default:
      return state
  }
}

import { UPDATE_HOVERED, UPDATE_SELECTED } from './actions'

const initialState = {
  mapData: 'mapbox://nbumbarg.ary69jed',
  hovered: 0,
  selected: 0
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOVERED:
      return Object.assign({}, state, { hovered: action.data })
    case UPDATE_SELECTED:
      return Object.assign({}, state, { selected: action.data })
    default:
      return state
  }
}

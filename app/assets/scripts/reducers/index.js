import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'
import resultsPanel from './results-panel'
import modalAbout from './modal-about'
import modalCalc from './modal-calc'

export const reducers = {
  map,
  resultsPanel,
  modalAbout,
  modalCalc
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

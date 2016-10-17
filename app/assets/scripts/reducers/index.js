import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'
import resultsPanel from './results-panel'
import modalAbout from './modal-about'
import modalCalc from './modal-calc'
import legend from './legend'

export const reducers = {
  map,
  resultsPanel,
  modalAbout,
  modalCalc,
  legend
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

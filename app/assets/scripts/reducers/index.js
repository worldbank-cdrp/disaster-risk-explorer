import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'
import resultsPanel from './results-panel'
import modalAbout from './modal-about'
import buildingCalculator from './building-calculator'

export const reducers = {
  map,
  resultsPanel,
  modalAbout,
  buildingCalculator
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

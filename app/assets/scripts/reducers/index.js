import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'
import resultsPanel from './results-panel'

export const reducers = {
  map, resultsPanel
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

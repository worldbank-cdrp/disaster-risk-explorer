import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'

export const reducers = {
  map
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

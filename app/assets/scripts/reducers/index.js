import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import map from './map'
import modalAbout from './modal-about'

export const reducers = {
  map,
  modalAbout
}

export default combineReducers(Object.assign({}, reducers, {
  routing: routerReducer
}))

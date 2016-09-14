'use strict'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import config from './config'
import reducer from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'production')
  }
})

const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)

// Components
import App from './views/app'
import Home from './views/home'
import UhOh from './views/uhoh'

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/uhoh' component={UhOh} />
      <Route path='/:lang' component={App}>
        <IndexRoute component={Home} pageClass='page--homepage' />
      </Route>
      <Redirect from='/' to='/en' />
    </Router>
  </Provider>
), document.querySelector('#app-container'))

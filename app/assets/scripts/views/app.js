'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import _ from 'lodash'
import c from 'classnames'

import { t, isValidLanguage, setLanguage } from '../utils/i18n'

var App = React.createClass({
  displayName: 'App',

  propTypes: {
    routes: React.PropTypes.array,
    children: React.PropTypes.object,
    params: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      vpTooSmall: false
    }
  },

  validateLanguage: function (lang) {
    if (isValidLanguage(lang)) {
      setLanguage(lang)
    } else {
      hashHistory.replace('/uhoh')
    }
  },

  onWindowResize: function () {
    if (window.innerWidth < 768) {
      !this.state.vpTooSmall && this.setState({vpTooSmall: true})
    } else {
      this.state.vpTooSmall && this.setState({vpTooSmall: false})
    }
  },

  //
  // Start life-cycle methods
  //
  componentWillMount: function () {
    this.validateLanguage(this.props.params.lang)
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()
  },

  componentWillReceiveProps: function (nextProps) {
    this.validateLanguage(nextProps.params.lang)
  },

  //
  // Start render methods
  // {t('Screen is too small')}
  render: function () {
    let pageClass = _.get(_.last(this.props.routes), 'pageClass', '')

    return this.state.vpTooSmall ? (
      <div className='nocando-viewport'>
        <img className='nocando-img' src='./assets/graphics/content/central_america.png'/>
        <p>{t('The Disaster Risk Explorer for Central America tool can only be used on larger screens.')}</p>
        <p>{t('Please switch to desktop.')}</p>
      </div>
    ) : (
      <div className={c('page', pageClass)}>
        <main className='page__body' role='main'>
          {this.props.children}
        </main>
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
  }
}

module.exports = connect(mapStateToProps)(App)

'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/header.js'
import Map from '../components/map.js'
import Legend from '../components/legend.js'
import Selection from '../components/selection-panel.js'
import Results from '../components/results-panel.js'

import { t } from '../utils/i18n'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
    dispatch: React.PropTypes.func,

    mapSource: React.PropTypes.object,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number
  },

  render: function () {
    return (
      <div>
        {/* Example: remove */}
        <p style={{position: 'absolute', zIndex: 1000, background: 'lightgray', padding: '1rem'}}>{t('hello')}</p>
        {/* Example: remove */}
        <Header />
        <Map
          mapSource={this.props.mapSource}
          hovered={this.props.hovered}
          selected={this.props.selected}
          dispatch={this.props.dispatch} />
        <Selection
          mapSource={this.props.mapSource}
          dispatch={this.props.dispatch} />
        <Legend />
        <Results />
      </div>
    )
  }
})

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
    mapSource: state.map.mapSource,
    hovered: state.map.hovered,
    selected: state.map.selected
  }
}

module.exports = connect(mapStateToProps)(Home)

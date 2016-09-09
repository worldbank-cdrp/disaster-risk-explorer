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

    mapData: React.PropTypes.string,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number
  },

  // {/* Example: remove */}
  // <p style={{position: 'absolute', zIndex: 1000, background: 'lightgray', padding: '1rem'}}>{t('hello')}</p>
  // {/* Example: remove */}

  render: function () {
    return (
      <div>
        <Header />
        <Map
          mapData={this.props.mapData}
          hovered={this.props.hovered}
          selected={this.props.selected}
          dispatch={this.props.dispatch} />
        <Selection />
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
    mapData: state.map.mapData,
    hovered: state.map.hovered,
    selected: state.map.selected
  }
}

module.exports = connect(mapStateToProps)(Home)

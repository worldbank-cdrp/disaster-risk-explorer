'use strict'
import React from 'react'
import { connect } from 'react-redux'

import Map from '../components/map'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
    dispatch: React.PropTypes.func,

    mapData: React.PropTypes.string,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number
  },

  render: function () {
    return (
      <div>
        <Map
          mapData={this.props.mapData}
          hovered={this.props.hovered}
          selected={this.props.selected}
          dispatch={this.props.dispatch} />
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

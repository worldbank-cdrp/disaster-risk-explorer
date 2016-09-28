'use strict'
import React from 'react'
import { connect } from 'react-redux'

import DataSelection from '../utils/data-selection'
import { mapSources } from '../constants'

import About from '../components/about-modal.js'
import Header from '../components/header.js'
import Map from '../components/map.js'
import Legend from '../components/legend.js'
import Selection from '../components/selection-panel.js'
import Results from '../components/results-panel.js'

var Home = React.createClass({
  displayName: 'Home',

  propTypes: {
    dispatch: React.PropTypes.func,
    location: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    mapData: React.PropTypes.string,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.object,
    calculatorOpen: React.PropTypes.bool,
    modalAbout: React.PropTypes.object,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number
  },

  render: function () {
    const dataSelection = DataSelection(this.props.location.query)
    const mapSource = mapSources[dataSelection.admin.getActive().key]
    return (
      <div>
        <Header
         dispatch={this.props.dispatch}
         queryParams={this.props.location.query} />
        <Map
          dispatch={this.props.dispatch}
          mapSource={mapSource}
          dataSelection={dataSelection}
          selected={this.props.selected} />
        <Selection
          dispatch={this.props.dispatch}
          queryParams={this.props.location.query}
          mapSource={this.props.mapSource} />
        <Legend
          dataSelection={dataSelection} />
        <Results
          dispatch={this.props.dispatch}
          dataSelection={dataSelection}
          calculatorOpen={this.props.calculatorOpen}
          data={this.props.selected}
          conversion={this.props.conversion}
          sliderValue={this.props.sliderValue} />
        <About
          dispatch={this.props.dispatch}
          visible={this.props.modalAbout.visible} />
      </div>
    )
  }
})

//  <OpacityPanel
//  dispatch={this.props.dispatch}
//  opacity={this.props.opacity} />

// /////////////////////////////////////////////////////////////////// //
// Connect functions

function mapStateToProps (state) {
  return {
    mapSource: state.map.mapSource,
    hovered: state.map.hovered,
    selected: state.map.selected,
    calculatorOpen: state.resultsPanel.calculatorOpen,
    modalAbout: state.modalAbout,
    conversion: state.buildingCalculator.conversion,
    sliderValue: state.buildingCalculator.sliderValue
  }
}

module.exports = connect(mapStateToProps)(Home)

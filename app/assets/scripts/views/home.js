'use strict'
import React from 'react'
import { connect } from 'react-redux'

import DataSelection from '../utils/data-selection'
import { mapSources } from '../constants'

import About from '../components/about-modal.js'
import Calc from '../components/calculator-modal.js'
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
    calcVisible: React.PropTypes.bool,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number,
    unitCostOfConstruction: React.PropTypes.number,
    newCalcId: React.PropTypes.string,
    mapType: React.PropTypes.string
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
          mapType={this.props.mapType}
          dataSelection={dataSelection}
          selected={this.props.selected} />
        <Selection
          dispatch={this.props.dispatch}
          queryParams={this.props.location.query}
          mapSource={this.props.mapSource} />
        <Legend
          dispatch={this.props.dispatch}
          dataSelection={dataSelection}
          mapType={this.props.mapType} />
        <Results
          dispatch={this.props.dispatch}
          dataSelection={dataSelection}
          data={this.props.selected}
          conversion={this.props.conversion}
          mapType={this.props.mapType} />
        <About
          dispatch={this.props.dispatch}
          visible={this.props.modalAbout.visible} />
        <Calc
          dispatch={this.props.dispatch}
          dataSelection={dataSelection}
          attributes={this.props.selected}
          calcVisible={this.props.calcVisible}
          conversion={this.props.conversion}
          sliderValue={this.props.sliderValue}
          unitCostOfConstruction={this.props.unitCostOfConstruction}
          newCalcId={this.props.newCalcId}
          queryParams={this.props.location.query} />
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
    selected: state.map.selected,
    calculatorOpen: state.resultsPanel.calculatorOpen,
    modalAbout: state.modalAbout,
    calcVisible: state.modalCalc.calcVisible,
    conversion: state.modalCalc.conversion,
    sliderValue: state.modalCalc.sliderValue,
    unitCostOfConstruction: state.modalCalc.unitCostOfConstruction,
    newCalcId: state.modalCalc.newCalcId,
    mapType: state.legend.mapType
  }
}

module.exports = connect(mapStateToProps)(Home)

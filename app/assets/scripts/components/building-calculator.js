import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Nouislider from 'react-nouislider'

import buildingData from '../../data/buildings.json'
import { selectConversion, updateSliderValue } from '../actions'
import { shortenNumber } from '../utils/format'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    attributes: React.PropTypes.object,
    selectedCode: React.PropTypes.object,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number
  },

  onChangeSlide: function (e) {
    this.props.dispatch(updateSliderValue(Number(e[0]) / 100))
  },

  selectConversion: function (conversion) {
    this.props.dispatch(selectConversion(conversion))
  },

  render: function () {
    console.log(this.props)
    const sliderValue = this.props.sliderValue

    // Country codes not yet added to Mapbox data; hardcoding a country code for now
    const countryCode = 'GT-JU' // this.props.selectedCode
    const data = buildingData[countryCode][this.props.conversion]
    const conversionValue = Math.round(data.conversionCost * sliderValue)
    // <ReactCSSTransitionGroup
    //   component='section'
    //   transitionName='drop-trans'
    //   transitionEnterTimeout={300}
    //   transitionLeaveTimeout={300} >
    //       { this.state.open
    //        ? <div className={klasses.join(' ')} ref='dropdown' onClick={this._dropdownContentClick}>{ this.props.children }</div>
    //      : null }
    //  </ReactCSSTransitionGroup>
    return (
      <ReactCSSTransitionGroup
        component='div'
        transitionName='drop-trans'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300} >

      <section className='calculator'>
        <h2 className='calculator__title'>Building Stock Conversion Calculator</h2>
        <div className='calculator__container'>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Conversion Type:</dt>
            <dd className='calculator__radio'>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='retrofit'
                       defaultChecked={this.props.conversion === 'retrofit'}
                       onClick={() => this.selectConversion('retrofit')} />
                <span>Retrofit</span>
               </label>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='replacement'
                       defaultChecked={this.props.conversion === 'replacement'}
                       onClick={() => this.selectConversion('replacement')} />
                <span>Replace</span>
              </label>
            </dd>
          </dl>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Amount Converted:</dt>
            <dd className='calculator__slider'>
            <Nouislider
              range={{min: 0, max: 100}}
              start={[Math.round(this.props.sliderValue * 100)]}
              step={5}
              pips={{mode: 'range', density: 20}}
              onSlide={this.onChangeSlide}
            />
            </dd>
          </dl>
          <div className='calculator__description top'>
            (Unimplemented) Wood braced frame with load-bearing infill wall system single family - on stilts
          </div>
          <div className='calculator__divider-broken left'></div>
          <div className='calculator__divider-broken-label'>are converted into</div>
          <div className='calculator__divider-broken right'></div>
          <div className='calculator__description bottom'>
            (Unimplemented) Waffle Houses just stacked one on top of the other
          </div>
          <div className='calculator__divider'></div>
          <dl className='stats'>
            <dt className='stat__attribute'>Conversion Cost</dt>
            <dd className='stat__value'>${conversionValue + (conversionValue > 0 ? ' Million' : '')}</dd>
            <dt className='stat__attribute'>Reduction of AAL</dt>
            <dd className='stat__value'>${shortenNumber((1 - data.overallChangeAAL) * this.props.attributes.AAL * sliderValue, 0, false)}</dd>
            <dt className='stat__attribute'>Change in AAL for these buildings</dt>
            <dd className='stat__value'>{Math.round(data.buildingChangeAAL * sliderValue * 100)}%</dd>
            <dt className='stat__attribute'>Change in overall AAL</dt>
            <dd className='stat__value'>{Math.round(data.overallChangeAAL * sliderValue * 100)}%</dd>
            <dt className='stat__attribute'>Flat rate years to break even</dt>
            <dd className='stat__value stat__value--last stat__value--positive'>{Math.round(data.breakEven)} Years</dd>
          </dl>
        </div>
      </section>

      </ReactCSSTransitionGroup>
    )
  }
})

export default Results

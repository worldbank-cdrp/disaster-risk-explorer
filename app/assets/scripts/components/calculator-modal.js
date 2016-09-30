import React from 'react'
import Slider from 'react-nouislider'

import { hideModalCalc, selectConversion, updateSliderValue } from '../actions'
import buildingData from '../../data/buildings.json'
import { shortenNumber } from '../utils/format'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Calculator = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    calcVisible: React.PropTypes.bool,
    attributes: React.PropTypes.object,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number
  },

  onOutClick: function (e) {
    if (e.target === e.currentTarget) {
      this.props.dispatch(hideModalCalc())
    }
  },

  onChangeSlide: function (e) {
    this.props.dispatch(updateSliderValue(Number(e[0]) / 100))
  },

  selectConversion: function (conversion) {
    this.props.dispatch(selectConversion(conversion))
  },

  renderModal: function () {
    if (!this.props.calcVisible) return null
    const sliderValue = this.props.sliderValue

    // Country codes not yet added to Mapbox data; hardcoding a country code for now
    const countryCode = 'GT-JU' // this.props.selectedCode
    const data = buildingData[countryCode][this.props.conversion]
    const conversionValue = Math.round(data.conversionCost * sliderValue)

    return (
      <section className='modal modal--large modal--about' onClick={this.onOutClick}>
        <div className='modal__inner'>
          <header className='modal__header'>
            <div className='modal__headline'>
              <h1 className='modal__title'>Risk mitigation cost and benefit calculation</h1>
              <button className='modal__button-dismiss' title='Close' onClick={() => this.props.dispatch(hideModalCalc())}><span>Dismiss</span></button>
            </div>
          </header>

          <div className='modal__body'>

            <div className='modal__left-side'>
              <h2 className='subtitle calc__subtitle'>Conversion Settings</h2>
              <dl className='calc__selection'>
                <dd>Calculate for</dd>
                <dt>Nicaragua</dt>
              </dl>
              <dl className='calc__selection'>
                <button
                  className={'button header__language--toggle button__leftside ' + (this.props.conversion === 'retrofit' ? 'button--active' : '')}
                  onClick={() => this.selectConversion('retrofit')}>
                  <span className='header__language--text'>Retrofit</span></button>
                <button
                  className={'button header__language--toggle button__rightside ' + (this.props.conversion === 'replace' ? 'button--active' : '')}
                  onClick={() => this.selectConversion('replacement')}>
                  <span className='header__language--text'>Replace</span></button>
              </dl>
              <dl className='calc__selection'>
                <dd>% of buildings converted</dd>
              </dl>
              <dd className='calculator__slider'>
              <Slider
                range={{min: 0, max: 100}}
                start={[Math.round(this.props.sliderValue * 100)]}
                step={5}
                pips={{mode: 'range', density: 20}}
                onSlide={this.onChangeSlide}
              />
              </dd>
              <dl className='calc__selection'>
                <dd>Cost per Replacement</dd>
                <dt>$2,500 UNIMPLEMENTED</dt>
              </dl>
              <br></br>
              <h2 className='subtitle calc__subtitle'>Building Stock Converted</h2>
              <div className='calculator__description top'>{data.buildingFrom}</div>
              <div className='calculator__divider-broken left'></div>
              <div className='calculator__divider-broken-label'>are replaced with</div>
              <div className='calculator__divider-broken right'></div>
              <div className='calculator__description bottom'>{data.buildingTo}</div>
            </div>

            <div className='modal__right-side'>
              <h2 className='subtitle calc__subtitle'>Results</h2>
              <dl className='calc_selection'>
                <dd className='stat__attribute'>Reduction of overall AAL</dd>
                <dt className='stat__value'>${shortenNumber((1 - data.overallChangeAAL) * this.props.attributes.AAL * sliderValue, 0, false)}</dt>
                <dd className='stat__attribute'>Total replacement cost</dd>
                <dt className='stat__value'>${conversionValue + (conversionValue > 0 ? ' Million' : '')}</dt>
                <dd className='stat__attribute'>Flat rate years to break even</dd>
                <dt className='stat__value'>{Math.round(data.breakEven)} Years NON-INTERACTIVE</dt>
                <dd className='stat__attribute'>Percent of Housing Stock replaced</dd>
                <dt className='stat__value'>1% UNIMPLEMENTED</dt>
                <dd className='stat__attribute'>Percent Change in AAL for these housing units</dd>
                <dt className='stat__value'>-{Math.round(data.buildingChangeAAL * sliderValue * 100)}%</dt>
                <dd className='stat__attribute'>Change in overall AAL</dd>
                <dt className='stat__value'>-{Math.round(data.overallChangeAAL * sliderValue * 100)}%</dt>
              </dl>

              <br></br>

              <h2 className='subtitle calc__subtitle'>Building Stock types most at risk (absolute AAL)</h2>
              <dl className='calc_selection'>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10% UNIMPLEMENTED</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10% UNIMPLEMENTED</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10% UNIMPLEMENTED</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10% UNIMPLEMENTED</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10% UNIMPLEMENTED</dt>
              </dl>

            </div>
          </div>
        </div>
      </section>
    )
  },

  render: function () {
    return (
      <ReactCSSTransitionGroup
        component='div'
        transitionName='modal'
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300} >
          {this.renderModal()}
      </ReactCSSTransitionGroup>
    )
  }
})

export default Calculator

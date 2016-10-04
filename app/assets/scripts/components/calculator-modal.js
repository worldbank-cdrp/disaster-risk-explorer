import React from 'react'
import Slider from 'react-nouislider'

import { hideModalCalc, selectConversion, updateSliderValue } from '../actions'
import { shortenNumber } from '../utils/format'
import { getBuildingData } from '../utils/building-calc'

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
    const data = getBuildingData(countryCode, this.props.conversion, sliderValue, 'UCC')

    return (
      <section className='modal modal--large modal--about' onClick={this.onOutClick}>
        <div className='modal__inner'>
          <header className='modal__header'>
            <div className='modal__headline'>
              <h1 className='modal__title'>Risk mitigation cost and benefit calculation</h1>
              <button className='modal__button-dismiss' title='Close' onClick={() => this.props.dispatch(hideModalCalc())}><span>Dismiss</span></button>
            </div>
          </header>

          <div className='modal__body calculator__container clearfix'>

            <div className='modal__left-side'>
              <h2 className='subtitle calc__subtitle'>Conversion Settings</h2>
              <dl className='calc__selection'>
                <dd className='stat__attribute stat__attribute--main'>Calculate for</dd>
                <dt className='selection__panel--drop stat__value--large'>Nicaragua</dt>
                <dt className='stat__attribute stat__attribute--button stat__attribute--main'>Type of Conversion</dt>
                <dd className='stat__value'>
                  <button
                    className={'button header__language--toggle button__leftside ' + (this.props.conversion === 'retrofit' ? 'button--active' : '')}
                    onClick={() => this.selectConversion('retrofit')}>
                    <span className='header__language--text'>Retrofit</span></button>
                  <button
                    className={'button header__language--toggle button__rightside ' + (this.props.conversion === 'replacement' ? 'button--active' : '')}
                    onClick={() => this.selectConversion('replacement')}>
                    <span className='header__language--text'>Replace</span></button>
                  </dd>
              </dl>
              <dl className='calc__selection'>
                <dd className='stat__attribute stat__attribute--main'>Unit cost per {(this.props.conversion === 'retrofit' ? 'retrofitted' : 'replaced')} building</dd>
                <dt className='stat__value stat__value--large stat__value--large'>$2,500,000</dt>
              </dl>
              <dl className='calc__selection calc__selection--slider'>
                <dt className='stat__attribute stat__attribute--main'>Percent of buildings {(this.props.conversion === 'retrofit' ? 'retrofitted' : 'replaced')}</dt>
                <dd className='stat__value stat__value--large'>{Math.floor(this.props.sliderValue * 100)}%</dd>
                <dt className='calculator__slider'>
                <Slider
                  range={{min: 0, max: 100}}
                  start={[Math.round(this.props.sliderValue * 100)]}
                  step={5}
                  pips={{mode: 'range', density: 20}}
                  onSlide={this.onChangeSlide}
                />
                </dt>
              </dl>

              <div className='calc__split'></div>

              <h2 className='subtitle calc__subtitle'>Building Stock Converted</h2>
              <div className='calculator__description top'>{data.buildingFrom}</div>
              <div className='calculator__divider-broken left'></div>
              <div className='calculator__divider-broken-label'>are {(this.props.conversion === 'retrofit' ? 'retrofitted' : 'replaced')} with</div>
              <div className='calculator__divider-broken right'></div>
              <div className='calculator__description bottom'>{data.buildingTo}</div>
            </div>

            <div className='modal__right-side'>
              <h2 className='subtitle calc__subtitle'>Results</h2>
              <dl className='calc__selection'>
                <dt className='stat__attribute'>Reduction of overall AAL</dt>
                <dd className='stat__value'>${shortenNumber((1 - data.overallChangeAAL) * this.props.attributes.AAL * sliderValue, 0, false)}</dd>
                <dt className='stat__attribute'>Total {(this.props.conversion === 'retrofit' ? 'retrofit' : 'replacement')} cost</dt>
                <dd className='stat__value'>${data.conversionValue + (data.conversionValue > 0 ? ' Million' : '')}</dd>
                <dt className='stat__attribute'>Flat rate years to break even</dt>
                <dd className='stat__value'>{Math.round(data.breakEven)} Years</dd>
                <dt className='stat__attribute'>Percent of Housing Stock {(this.props.conversion === 'retrofit' ? 'retrofitted' : 'replaced')}</dt>
                <dd className='stat__value'>1% UNIMPLEMENTED</dd>
                <dt className='stat__attribute'>Percent Change in AAL for these housing units</dt>
                <dd className='stat__value'>-{Math.round(data.buildingChangeAAL * sliderValue * 100)}%</dd>
                <dt className='stat__attribute stat__attribute--second'>Change in overall AAL</dt>
                <dd className='stat__value'>-{Math.round(data.overallChangeAAL * sliderValue * 100)}%</dd>
              </dl>

              <div className='calc__split'></div>

              <h2 className='subtitle calc__subtitle'>Building Stock types most at risk ({(this.props.conversion === 'retrofit' ? 'absolute' : 'relative')} AAL)</h2>
              <dl className='calc__selection'>
                <dt className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dt>
                <dd className='stat__value'>10% UNIMPLEMENTED</dd>
                <dt className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dt>
                <dd className='stat__value'>10% UNIMPLEMENTED</dd>
                <dt className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dt>
                <dd className='stat__value'>10% UNIMPLEMENTED</dd>
                <dt className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dt>
                <dd className='stat__value'>10% UNIMPLEMENTED</dd>
                <dt className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dt>
                <dd className='stat__value'>10% UNIMPLEMENTED</dd>
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

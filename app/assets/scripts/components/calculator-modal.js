import React from 'react'
import Slider from 'react-nouislider'
import _ from 'lodash'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import c from 'classnames'
import { t } from '../utils/i18n'
import Dropdown from './dropdown'
import { calcDropItems } from '../constants'

import { newCalcId, hideModalCalc, selectConversion, updateSliderValue, updateUCC } from '../actions'
import { shortenNumber } from '../utils/format'
import { getBuildingData } from '../utils/building-calc'

const Calculator = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,
    calcVisible: React.PropTypes.bool,
    attributes: React.PropTypes.object,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number,
    unitCostOfConstruction: React.PropTypes.number,
    newCalcId: React.PropTypes.string,
    queryParams: React.PropTypes.object,
    mapSource: React.PropTypes.object
  },

  changeCountry: function (id) {
    this.props.dispatch(newCalcId(id))
  },

  hideModal: function () {
    this.props.dispatch(updateUCC(null))
    this.props.dispatch(hideModalCalc())
  },

  onOutClick: function (e) {
    if (e.target === e.currentTarget) {
      this.hideModal()
    }
  },

  onChangeSlide: function (e) {
    this.props.dispatch(updateSliderValue(Number(e[0]) / 100))
  },

  selectConversion: function (conversion) {
    this.props.dispatch(selectConversion(conversion))
  },

  handleUCC: function (e) {
    this.props.dispatch(updateUCC(Number(e.target.value)))
  },

  onOptSelect: function (key, value, e) {
    e.preventDefault()
    this.props.dispatch(newCalcId(value))

    // These functions don't seem to be updating the Data...
  },

  renderCountryDropdown: function (active, dropOpts, area) {
    return (
      <Dropdown
        triggerElement='button'
        triggerClassName={c('button button--base-unbounded', 'button__drop', 'drop__toggle--caret', {'drop__menu-disable': area === 'district'})}
        triggerTitle={t('Show/hide parameter options')}
        triggerText={t(active)} >

        <ul role='menu' className='drop__menu drop__menu--select'>
          {dropOpts.countryName.map(o => {
            return (<li key={o.key}>
              <a
                className={c('drop__menu-item', {'drop__menu-item--active': o.key === active})}
                href='#'
                title=''
                data-hook='dropdown:close'
                onClick={this.onOptSelect.bind(null, 'countryName', o.key)}>
                  <span>{t(o.key)}</span>
              </a>
            </li>)
          })}
        </ul>
      </Dropdown>
    )
  },

  renderDistrictDropdown: function (active, dropOpts, area) {
    return (
      <Dropdown
        triggerElement='button'
        triggerClassName={c('button button--base-unbounded', 'button__drop', 'drop__toggle--caret', {'drop__menu-disable': area === 'country'})}
        triggerTitle={t('Show/hide parameter options')}
        triggerText={t(active)} >

        <ul role='menu' className='drop__menu drop__menu--select'>
          {dropOpts.districtName.map(o => {
            return (<li key={o.key}>
              <a
                className={c('drop__menu-item', {'drop__menu-item--active': o.key === active})}
                href='#'
                title=''
                data-hook='dropdown:close'
                onClick={this.onOptSelect.bind(null, 'districtName', o.key)}>
                  <span>{t(o.key)}</span>
              </a>
            </li>)
          })}
        </ul>
      </Dropdown>
    )
  },

  renderModal: function () {
    if (!this.props.calcVisible) return null
    const {sliderValue, conversion, newCalcId} = this.props

    const aal = this.props.attributes[`LS_${this.props.dataSelection.risk.getActive().value}_AAL`]
    const activeId = newCalcId
    var countryActive = activeId
    var districtActive = '-'
    var adminActive = ''

    calcDropItems.countryName.map(o => {
      if (o.key === activeId) {
        adminActive = 'country'
      }
    })

    calcDropItems.districtName.map(o => {
      if (o.key === activeId) {
        adminActive = 'district'
      }
    })

    if (adminActive === 'country') {
      countryActive = activeId
      districtActive = '-'
    } else if (adminActive === 'district') {
      countryActive = activeId.substring(0, 2)
      districtActive = activeId
    }

    // if (activeId) {
    //   then countryActive = SELECTEDID
    //   var districtActive = '-'
    // }else if SELECTID matches DistrictCode{
    //   then countryActive = SELECTID string first two letters
    //   var districtActive = SELECTID
    // }

    const data = getBuildingData(activeId, conversion, sliderValue, this.props.unitCostOfConstruction)
    let ucc = this.props.unitCostOfConstruction || data.unitCostOfConstruction

    // A little nonsense to create single roots for react
    const listKey = (conversion === 'retrofit' ? 'AAL as % of Value' : 'AAL in USD T')
    const TopFive = data.topFiveAAL.map((building, i) => {
      return [
        <dl key={i} className='calc__list'>
          <dt key={building['Risk Rank'] + 'dt'} className='stat__attribute stat__attribute--stocks'>{building['Description'].replace(/single|multi family/, '')}</dt>
          <dd key={building['Risk Rank'] + 'dd'} className='stat__value stat__value--stocks'>{`${(conversion === 'retrofit' ? '' : '$')}${(building[listKey] * (conversion === 'retrofit' ? 100 : 1)).toFixed(2)} ${(conversion === 'retrofit' ? '%' : '')}`}</dd>
        </dl>
      ]
    })

    console.log(TopFive)

    return (
      <section className='modal modal--large modal--about' onClick={this.onOutClick}>
        <div className='modal__inner'>
          <header className='modal__header'>
            <div className='modal__headline'>
              <h1 className='modal__title'>Risk mitigation cost and benefit calculation</h1>
              <button className='modal__button-dismiss' title='Close' onClick={this.hideModal}><span>Dismiss</span></button>
            </div>
          </header>

          <div className='modal__body calculator__container clearfix'>

            <div className='modal__left-side'>
              <section className='calculator__selection'>
                <h2 className='subtitle calc__subtitle'>Conversion Settings</h2>
                <dl className='calc__selection'>
                  <dt className='stat__attribute stat__attribute--main'>Country Selected</dt>
                    <dd className='selection__panel--drop'>
                      {this.renderCountryDropdown(countryActive, calcDropItems, adminActive)}
                    </dd>

                  <dt className='stat__attribute stat__attribute--main'>Subregion Selected</dt>
                  <dd className='selection__panel--drop'>
                    {this.renderDistrictDropdown(districtActive, calcDropItems, adminActive)}
                  </dd>
                  <dt className='stat__attribute stat__attribute--button stat__attribute--main'>Type of Conversion</dt>
                  <dd className='stat__value'>
                    <button
                      className={'button header__language--toggle button__leftside ' + (conversion === 'retrofit' ? 'button--active' : '')}
                      onClick={() => this.selectConversion('retrofit')}>
                      <span className='header__language--text'>Retrofit</span></button>
                    <button
                      className={'button header__language--toggle button__rightside ' + (conversion === 'replacement' ? 'button--active' : '')}
                      onClick={() => this.selectConversion('replacement')}>
                      <span className='header__language--text'>Replace</span></button>
                    </dd>
                  <dd className='stat__attribute stat__attribute--main'>Unit cost per {(conversion === 'retrofit' ? 'retrofitted' : 'replaced')} building</dd>
                  <dt className='stat__value stat__value--large stat__value--large'><input type='number' className='calculator__input' value={Math.round(ucc)} onChange={this.handleUCC} /><span className='stat__value--cost'></span></dt>
                </dl>
                <dl className='calc__selection calc__selection--slider'>
                  <dt className='stat__attribute stat__attribute--main'>Percent of buildings {(conversion === 'retrofit' ? 'retrofitted' : 'replaced')}</dt>
                  <dd className='stat__value stat__value--large'>{Math.floor(sliderValue * 100)}%</dd>
                  <dt className='calculator__slider'>
                  <Slider
                    range={{min: 0, max: 100}}
                    start={[Math.round(sliderValue * 100)]}
                    step={5}
                    pips={{mode: 'range', density: 20}}
                    onSlide={this.onChangeSlide}
                  />
                  </dt>
                </dl>
              </section>

              <div className='calc__split'></div>

              <h2 className='subtitle calc__subtitle'>Building Stocks Converted</h2>
              <div className='calculator__description top'>{data.buildingFrom}</div>
              <div className='calculator__divider-broken left'></div>
              <div className='calculator__divider-broken-label'>are {(conversion === 'retrofit' ? 'retrofitted' : 'replaced')} with</div>
              <div className='calculator__divider-broken right'></div>
              <div className='calculator__description bottom'>{data.buildingTo}</div>
            </div>

            <div className='modal__right-side'>
              <h2 className='subtitle calc__subtitle'>Results</h2>
              <dl className='calc__selection'>

                <dt className='stat__attribute'>Reduction of overall AAL</dt>
                <dd className=
                  {c('stat__value',
                    { 'stat__value--positive': (data.overallChangeAAL * aal) > 0 },
                    { 'stat__value--negative': (data.overallChangeAAL * aal) < 0 }
                     )}>
                  ${shortenNumber(data.overallChangeAAL * aal, 0, false)}
                </dd>
                <dt className='stat__attribute'>Total {(conversion === 'retrofit' ? 'retrofit' : 'replacement')} cost</dt>
                <dd className='stat__value'>${shortenNumber(data.conversionValue, 0, false)}</dd>
                <dt className='stat__attribute'>Flat rate years to break even</dt>
                <dd className='stat__value'>{(data.breakEven > 0 ? Math.round(data.breakEven) + ' Years' : 'Never')}</dd>
                <dt className='stat__attribute'>Percent Change in AAL for these housing units</dt>
                <dd className=
                  {c('stat__value',
                    { 'stat__value--positive': (data.buildingChangeAAL * 100) > 0 },
                    { 'stat__value--negative': (data.buildingChangeAAL * 100) < 0 }
                    )}>
                  {((data.buildingChangeAAL * 100) > 0 ? '-' : '+')}{Math.abs(Math.round(data.buildingChangeAAL * 100))}%</dd>
                <dt className='stat__attribute stat__attribute--second'>Change in overall AAL</dt>
                <dd className=
                  {c('stat__value',
                    { 'stat__value--positive': (data.overallChangeAAL * 100) > 0 },
                    { 'stat__value--negative': (data.overallChangeAAL * 100) < 0 }
                    )}>
                  {((data.overallChangeAAL * 100) > 0 ? '-' : '+')}{Math.abs(Math.round(data.overallChangeAAL * 100))}%</dd>
                </dl>

              <div className='calc__split'></div>

              <h2 className='subtitle calc__subtitle'>Building Stock types most at risk ({listKey})</h2>
              <dl className='calc__selection calc__selection--stocks'>
                {_.flatten(TopFive)}
              </dl>
            </div>
          </div>
        </div>
      </section>
    )
  },

  refill: function () {
    this.props.dispatch(newCalcId('BZ'))
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

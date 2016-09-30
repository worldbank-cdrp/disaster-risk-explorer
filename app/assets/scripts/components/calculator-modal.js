import React from 'react'

import { hideModalCalc } from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Calculator = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    calcVisible: React.PropTypes.bool
  },

  onOutClick: function (e) {
    if (e.target === e.currentTarget) {
      this.props.dispatch(hideModalCalc())
    }
  },

  renderModal: function () {
    if (!this.props.calcVisible) return null

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
                <button className='button header__language--toggle button__leftside button--active'><span className='header__language--text'>Retrofit</span></button>
                <button className='button header__language--toggle button__rightside'><span className='header__language--text'>Replace</span></button>
              </dl>
              <dl className='calc__selection'>
                <dd>Cost per Replacement</dd>
                <dt>$2,500</dt>
              </dl>
              <br></br>
              <h2 className='subtitle calc__subtitle'>Building Stock Converted</h2>
              <div className='calculator__description top'>Unreinforced Concrete Block/Fire Brick Masonry</div>
              <div className='calculator__divider-broken left'></div>
              <div className='calculator__divider-broken-label'>are replaced with</div>
              <div className='calculator__divider-broken right'></div>
              <div className='calculator__description bottom'>Reinforced masonry bearing walls with concrete diaphragms</div>
            </div>

            <div className='modal__right-side'>
              <h2 className='subtitle calc__subtitle'>Results</h2>
              <dl className='calc_selection'>
                <dd className='stat__attribute'>Reduction of overall AAL</dd>
                <dt className='stat__value'>$10 Million</dt>
                <dd className='stat__attribute'>Total replacement cost</dd>
                <dt className='stat__value'>$150</dt>
                <dd className='stat__attribute'>Flat rate years to break even</dd>
                <dt className='stat__value'>255</dt>
                <dd className='stat__attribute'>Percent of Housing Stock replaced</dd>
                <dt className='stat__value'>1%</dt>
                <dd className='stat__attribute'>Percent Change in AAL for these housing units</dd>
                <dt className='stat__value'>21%</dt>
                <dd className='stat__attribute'>Change in overall AAL</dd>
                <dt className='stat__value'>10%</dt>
              </dl>

              <br></br>

              <h2 className='subtitle calc__subtitle'>Building Stock types most at risk (absolute AAL)</h2>
              <dl className='calc_selection'>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10%</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10%</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10%</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10%</dt>
                <dd className='stat__attribute'>Unreinforced Concrete Block/Fire Brick Masonry</dd>
                <dt className='stat__value'>10%</dt>
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

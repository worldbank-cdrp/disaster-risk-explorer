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
              <h1 className='modal__title'>About this Tool</h1>
              <button className='modal__button-dismiss' title='Close' onClick={() => this.props.dispatch(hideModalCalc())}><span>Dismiss</span></button>
            </div>
          </header>
          <div className='modal__body'>
            <h1>YEAH BOY</h1>
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

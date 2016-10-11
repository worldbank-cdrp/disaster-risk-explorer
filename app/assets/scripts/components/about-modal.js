import React from 'react'

import { hideModalAbout } from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
  },

  onOutClick: function (e) {
    if (e.target === e.currentTarget) {
      this.props.dispatch(hideModalAbout())
    }
  },

  renderModal: function () {
    if (!this.props.visible) return null

    return (
      <section className='modal modal--large modal--about' onClick={this.onOutClick}>
        <div className='modal__inner'>
          <header className='modal__header'>
            <div className='modal__headline'>
              <h1 className='modal__title'>About the Disaster Risk Explorer</h1>
              <button className='modal__button-dismiss' title='Close' onClick={() => this.props.dispatch(hideModalAbout())}><span>Dismiss</span></button>
            </div>
          </header>
          <section className='modal__body'>
            <div className='modal__body--about'>
              <h3>What is this?</h3>
              <p>
                This tool allows you to explore and visualize Earthquake, Windstorm, & Flood data provided by the World Bank.
              </p>
              <h3>What Can I Explore?</h3>
              <p>
                These Risks can be viewed and assessed by the following metrics:
              </p>
              <dl>
                <p><i className='collecticon collecticon-chart-line' /> Metrics</p>
                <dt>Risk</dt>
                <dd>The probability of the risk occuring.</dd>
                <dt>Loss</dt>
                <dd>The potential cost of disasters.</dd>
                <dt>Exposure</dt>
                <dd>The potential amount of infastructure affected.</dd>
              </dl>
              <dl>
                <p><i className='collecticon collecticon-calendar' />Return Period</p>
                <dt>Return Periods</dt>
                <dd>The forecasted accumulated potential risk for a given amount of years.</dd>
              </dl>
              <dl>
                <p><i className='collecticon-select-by' />Select Data By</p>
                <dt>Country</dt>
                <dd>View the data by Central American countries.</dd>
                <dt>Admin One</dt>
                <dd>View the data by Central American districts and states.</dd>
                <dt>10km Grids</dt>
                <dd>View the data by a 10km grid that covers the Central American area.</dd>
              </dl>
            </div>
          </section>
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

export default About

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
                This tool allows you to explore and visualize Earthquake, Windstorm, & Flood data provided by the World Bank. The data presented as been recieved by The World Bank. Datasets included here showcase data for earthquake, windstorms, and flood hazards for Central American Countries. From there you can filter out the results by metric, return period, and depth.
              </p>
              <p>
                For more details on a partical area, you can click on an area to view the area's GDP, exposure, AAL, and PML. To view how overall losses can be reduced, we include a Calculator you can launch at the bottom of the results.
              </p>
              <br></br>
              <h3>Who can I contact for further information?</h3>
              <p>
                If you encounter any issues using the tool or would like further explanations on the data shown, please contact exampleJohn@example.com.
              </p>
              <br></br>
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

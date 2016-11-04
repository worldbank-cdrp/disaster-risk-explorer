import React from 'react'

import { hideModalAbout } from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { t } from '../utils/i18n'

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
              <h3>{t('What is the CDRP Risk Explorer tool?')}</h3>
              <p>{t('about-1')}</p>
              <p>{t('about-2')}</p>
              <p>{t('about-3')}</p>
              <br></br>
              <h3>{t('Who can I contact for further information?')}</h3>
              <p>{t('about-4')} <a href='mailto:cdrp@worldbank.org' target='_blank'>cdrp@worldbank.org</a>.</p>
              <br></br>
              <h3>{t('Disclaimer')}</h3>
              <p>{t('about-5')}</p>
              <p>{t('about-6')}</p>
              <p>{t('about-7')}</p>
              <p>{t('about-8')}</p>
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

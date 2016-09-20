import React from 'react'

import { hideModalAbout } from '../actions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    visible: React.PropTypes.bool
  },

  renderModal: function () {
    if (!this.props.visible) return null

    return (
      <section className='modal modal--large modal--about'>
        <div className='modal__inner'>
          <header className='modal__header'>
            <div className='modal__headline'>
              <h1 className='modal__title'>About this Tool</h1>
              <button className='modal__button-dismiss' title='Close' onClick={() => this.props.dispatch(hideModalAbout())}><span>Dismiss</span></button>
            </div>
          </header>
          <div className='modal__body'>
            <h3>Section Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Section Header</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
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

export default About

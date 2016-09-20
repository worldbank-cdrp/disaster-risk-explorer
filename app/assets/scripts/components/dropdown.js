'use strict'
import React from 'react'
import TetherComponent from 'react-tether'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'

const Dropdown = React.createClass({
  displayName: 'Dropdown',

  propTypes: {
    triggerElement: React.PropTypes.oneOf(['a', 'button']),
    triggerClassName: React.PropTypes.string,
    triggerActiveClassName: React.PropTypes.string,
    triggerTitle: React.PropTypes.string,
    triggerText: React.PropTypes.string.isRequired,

    direction: React.PropTypes.oneOf(['up', 'down']),
    alignment: React.PropTypes.oneOf(['left', 'center', 'right']),

    className: React.PropTypes.string,
    children: React.PropTypes.node
  },

  dropId: null,

  _bodyListener: function (e) {
    if (e.triggerDropId !== this.dropId ||
      e.preventClose !== true && this.state.open) {
      this.close()
    }
  },

  _dropdownContentClick: function (e) {
    // Access native event so it propagates upward.
    if (e.target.getAttribute('data-hook') !== 'dropdown:close') {
      e.nativeEvent.preventClose = true
      e.nativeEvent.triggerDropId = this.dropId
    }
  },

  getDefaultProps: function () {
    return {
      triggerElement: 'button',
      direction: 'down',
      alignment: 'center'
    }
  },

  getInitialState: function () {
    return {
      open: false
    }
  },

  // Lifecycle method.
  // Called once as soon as the component has a DOM representation.
  componentDidMount: function () {
    window.addEventListener('click', this._bodyListener)
    this.dropId = _.uniqueId('dropdown')
  },

  // Lifecycle method.
  // Called once as soon as the component has a DOM representation.
  componentWillUnmount: function () {
    window.removeEventListener('click', this._bodyListener)
  },

  _toggleDropdown: function (e) {
    e.preventDefault()
    // Access native event so it propagates upward.
    e.nativeEvent.preventClose = true
    e.nativeEvent.triggerDropId = this.dropId
    this.toggle()
  },

  toggle: function () {
    this.setState({ open: !this.state.open })
  },

  open: function () {
    this.setState({ open: true })
  },

  close: function () {
    this.setState({ open: false })
  },

  render: function () {
    // Base and additional classes for the trigger and the content.
    var klasses = ['drop__content', 'drop__content--react']
    var triggerKlasses = ['drop__toggle']

    if (this.props.className) {
      klasses.push(this.props.className)
    }
    if (this.props.triggerClassName) {
      triggerKlasses.push(this.props.triggerClassName)
    }

    // Additional trigger props.
    var triggerProps = {}
    if (this.props.triggerElement === 'button') {
      triggerProps.type = 'button'
    } else {
      triggerProps.href = '#'
    }
    if (this.props.triggerTitle) {
      triggerProps.title = this.props.triggerTitle
    }

    // Position.
    var tetherAttachment = this.props.direction === 'down' ? 'top' : 'bottom'
    var tetherTargetAttachment = this.props.direction === 'down' ? 'bottom' : 'top'

    tetherAttachment += ' ' + this.props.alignment
    tetherTargetAttachment += ' ' + this.props.alignment

    if (this.state.open && this.props.triggerActiveClassName) {
      triggerKlasses.push(this.props.triggerActiveClassName)
    }

    return (
      <TetherComponent
        attachment={tetherAttachment}
        targetAttachment={tetherTargetAttachment}
        constraints={[{
          to: 'scrollParent',
          attachment: 'together'
        }]}>

        <this.props.triggerElement
          {...triggerProps}
          className={triggerKlasses.join(' ')}
          onClick={this._toggleDropdown}
          ref='trigger' >
            <span>{ this.props.triggerText }</span>
        </this.props.triggerElement>

        <ReactCSSTransitionGroup
          component='div'
          transitionName='drop-trans'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300} >
            { this.state.open
              ? <div className={klasses.join(' ')} ref='dropdown' onClick={this._dropdownContentClick}>{ this.props.children }</div>
            : null }
        </ReactCSSTransitionGroup>

      </TetherComponent>
    )
  }
})

module.exports = Dropdown

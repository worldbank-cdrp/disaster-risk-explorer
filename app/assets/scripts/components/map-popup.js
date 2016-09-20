'use strict'
import React from 'react'

var MapPopup = React.createClass({
  displayName: 'MapPopup',

  propTypes: {
    country: React.PropTypes.string
  },
  render: function () {
    return (
      <article className='popover'>
        <div className='popover__contents'>
          <header className='popover__header'>
            <h1 className='subtitle subtitle__popover popover__title'>{this.props.country}</h1>
          </header>
          <div className='popover__body'>
            <p>Average Annual Loss</p>
            <p className='popover__stat'>$610 Million</p>
          </div>
          <footer className='popover__footer'>
          </footer>
        </div>
      </article>
    )
  }
})

export default MapPopup

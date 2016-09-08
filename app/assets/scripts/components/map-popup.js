'use strict'
import React from 'react'

var MapPopup = React.createClass({
  displayName: 'MapPopup',

  render: function () {
    return (
      <article className='popover'>
        <div className='popover__contents'>
          <header className='popover__header'>
            <h1 className='popover__title'>{this.props.country}</h1>
          </header>
          <div className='popover__body'>
            <p>Good things come to those who wait...</p>
          </div>
          <footer className='popover__footer'>
          </footer>
        </div>
      </article>
    )
  }
})

export default MapPopup

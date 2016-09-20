'use strict'
import React from 'react'

import { shortenNumber } from '../utils/format'

var MapPopup = React.createClass({
  displayName: 'MapPopup',

  propTypes: {
    country: React.PropTypes.string,
    aal: React.PropTypes.number
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
            <p className='popover__stat'>{'$' + shortenNumber(this.props.aal, 2, false)}</p>
          </div>
          <footer className='popover__footer'>
          </footer>
        </div>
      </article>
    )
  }
})

export default MapPopup

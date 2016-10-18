'use strict'
import React from 'react'

import { measurementStrings } from '../constants'
import { shortenNumber } from '../utils/format'

var MapPopup = React.createClass({
  displayName: 'MapPopup',

  propTypes: {
    adminName: React.PropTypes.string,
    mapDescrip: React.PropTypes.string,
    metric: React.PropTypes.string,
    data: React.PropTypes.number
  },

  render: function () {
    const hazard = this.props.mapDescrip.split(' - ')[0].toLowerCase()
    const string = (measurementStrings[hazard] && this.props.metric !== 'exposure') ? measurementStrings[hazard] : '$'
    return (
      <article className='popover'>
        <div className='popover__contents'>
          <header className='popover__header'>
            <h1 className='subtitle subtitle__popover popover__title'>{this.props.adminName}</h1>
          </header>
          <div className='popover__body'>
            <p>{this.props.mapDescrip}</p>
            <p className='popover__stat'>{(string === '$' ? string : '') +
                                          shortenNumber(this.props.data, 2, false) +
                                          (string !== '$' ? ' ' + string : '')}</p>
          </div>
          <footer className='popover__footer'>
          </footer>
        </div>
      </article>
    )
  }
})

export default MapPopup

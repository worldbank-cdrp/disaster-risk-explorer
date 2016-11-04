'use strict'
import React from 'react'

import { measurementStrings } from '../constants'
import { shortenNumber } from '../utils/format'
import { t } from '../utils/i18n'

var MapPopup = React.createClass({
  displayName: 'MapPopup',

  propTypes: {
    adminName: React.PropTypes.string,
    mapDescrip: React.PropTypes.string,
    metric: React.PropTypes.string,
    hazard: React.PropTypes.string,
    data: React.PropTypes.number,
    mapType: React.PropTypes.string
  },

  render: function () {
    const hazard = this.props.hazard
    const string = (measurementStrings[hazard] && this.props.metric === 'risk')
      ? measurementStrings[hazard]
      : this.props.mapType === 'absolute' ? '$' : 'USD ($) Loss / USD ($) Exposure'
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
                                          (string !== '$' ? ' ' + t(string) : '')}</p>
          </div>
          <footer className='popover__footer'>
          </footer>
        </div>
      </article>
    )
  }
})

export default MapPopup

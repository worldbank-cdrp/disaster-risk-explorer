import React from 'react'
import c from 'classnames'
import { legends, mapSettings } from '../constants'
import { toggleMapType } from '../actions'

import { shortenNumber } from '../utils/format'
import { getMapId, getMapDescrip } from '../utils/map-id'
import { t } from '../utils/i18n'

const Legend = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapType: React.PropTypes.string
  },

  toggleMapType: function (mapType) {
    this.props.dispatch(toggleMapType(mapType))
  },

  render: function () {
    const dataSelection = this.props.dataSelection
    const activeSource = this.props.dataSelection.admin.getActive().key
    const title = getMapDescrip(dataSelection)
    const metric = dataSelection.metric.getActive().key

    const suffix = this.props.mapType === 'relative' && metric === 'loss' ? '_R' : ''
    const mapId = getMapId(this.props.dataSelection) + suffix
    // Slice removes the years from disaster and loss columns, since legends
    // statistics are currently derived from all years' data.
    const legendId = /AAL/.test(mapId) ? mapId : mapId.slice(0, 5) + suffix
    const legend = legends[activeSource][legendId]
    let opacity = this.props.dataSelection.opacity.getActive().key
    opacity = mapSettings.opacityLevels[opacity]

    const legendBlocks = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__category'
          style={{width: 100 / legend.length + '%',
                  backgroundColor: cat[1],
                  opacity: opacity}}>
        </span>
      )
    })
    const legendLabels = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__label'
          style={{width: 100 / legend.length + '%'}}>
            {shortenNumber(cat[0])}
        </span>
      )
    })
    return (
      <section className='legend'>
        <h2 className='legend__title'>{title}</h2>
        <figure className='legend__scale'>
          {legendBlocks}
          {legendLabels}
          <figcaption
            className={c('legend__caption', {'hidden': metric !== 'loss'})}>
              <p>{t('View by')}</p>
              <div
                onClick={this.toggleMapType.bind(null, 'absolute')}
                className={c('button', 'header__language--toggle', 'button__leftside', {'button--active': this.props.mapType === 'absolute'})}>
                <span className='header__language--text'>{t('Absolute')}</span>
              </div>
              <div
                onClick={this.toggleMapType.bind(null, 'relative')}
                className={c('button', 'header__language--toggle', 'button__rightside', {'button--active': this.props.mapType === 'relative'})}>
                <span className='header__language--text'>{t('Relative')}</span>
              </div>
          </figcaption>
        </figure>
      </section>
    )
  }
})

export default Legend

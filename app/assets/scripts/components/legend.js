import React from 'react'
import { inactiveLegends, mapSettings } from '../constants'

import { shortenNumber } from '../utils/format'
import { t } from '../utils/i18n'

const Legend = React.createClass({
  propTypes: {
    dataSelection: React.PropTypes.object
  },

  render: function () {
    const activeRisk = this.props.dataSelection.risk.getActive().key
    let legend = inactiveLegends[activeRisk.toLowerCase()]
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
        <h2 className='legend__title'>{t('Average Annual Loss from')} {t(activeRisk)}</h2>
        <figure className='legend__scale'>
          {legendBlocks}
          {legendLabels}
          <figcaption className='legend__caption'>{t('legend-caption')}</figcaption>
        </figure>
      </section>
    )
  }
})

export default Legend

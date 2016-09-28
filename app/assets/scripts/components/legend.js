import React from 'react'
import { inactiveLegends } from '../constants'

import { shortenNumber } from '../utils/format'
import { t } from '../utils/i18n'

const Legend = React.createClass({
  propTypes: {
    dataSelection: React.PropTypes.object,

    opacity: React.PropTypes.number
  },

  render: function () {
    const activeRisk = this.props.dataSelection.risk.getActive().key
    let legend = inactiveLegends[activeRisk.toLowerCase()]

    const legendBlocks = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__category'
          style={{width: 100 / legend.length + '%',
                  backgroundColor: cat[1],
                  opacity: this.props.opacity / 100}}>
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
          <figcaption className='legend__caption'>
              <div className='button header__language--toggle button__leftside button--active'><span className='header__language--text'>Absolute Risk</span></div>
              <div className='button header__language--toggle button__rightside'><span className='header__language--text'>Relative Risk</span></div>
          </figcaption>
        </figure>
      </section>
    )
  }
})

// <figcaption className='legend__caption'>{t('legend-caption')}</figcaption>

export default Legend

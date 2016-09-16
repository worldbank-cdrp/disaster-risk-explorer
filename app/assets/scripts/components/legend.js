import React from 'react'
import { inactiveLegends } from '../constants'

import { capitalizeFirstLetter, shortenNumber } from '../utils/format'

const Legend = React.createClass({
  propTypes: {
    dataSelection: React.PropTypes.object
  },

  render: function () {
    const activeRisk = this.props.dataSelection.risk.getActive().key
    let legend = inactiveLegends[activeRisk]

    const legendBlocks = legend.map((cat, i) => {
      return (
        <span key={i}
          className='legend__category'
          style={{width: 100 / legend.length + '%', backgroundColor: cat[1]}}>
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
        <h2 className='legend__title'>Average Annual Loss from {capitalizeFirstLetter(activeRisk)}</h2>
        <figure className='legend__scale'>
          {legendBlocks}
          {legendLabels}
          <figcaption className='legend__caption'>The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.</figcaption>
        </figure>
      </section>
    )
  }
})

export default Legend

import React from 'react'
import { inactiveLegends } from '../constants'

const Legend = React.createClass({
  propTypes: {
    dataSelection: React.PropTypes.object
  },

  capitalizeFirstLetter: function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },

  shortenNumber: function (number, decimals) {
    decimals = (decimals === undefined) ? 0 : decimals
    if (number >= 1000000000) {
      return `${Number((number / 1000000000).toFixed(decimals))} B`
    } else if (number >= 1000000) {
      return `${Number((number / 1000000).toFixed(decimals))} M`
    } else if (number >= 1000) {
      return `${Number((number / 1000).toFixed(decimals))} K`
    } else {
      return number
    }
  },

  render: function () {
    const activeRisk = this.props.dataSelection.risk.getActive().key
    let legend = inactiveLegends[activeRisk]

    const legendBlocks = legend.map((cat, i) => {
      return (<span key={i}
                    className='legend__category'
                    style={{width: 100 / legend.length + '%',
                            backgroundColor: cat[1]}}>
             </span>
      )
    })
    const legendLabels = legend.map((cat, i) => {
      return (<span key={i}
                    className='legend__label'
                    style={{width: 100 / legend.length + '%'}}>
                      {this.shortenNumber(cat[0])}
             </span>
      )
    })
    return (
      <section className='legend'>
				<h2 className='legend__title'>Average Annual Loss from {this.capitalizeFirstLetter(activeRisk)}</h2>
				<figure className='legend__scale'>
          {legendBlocks}
          {legendLabels}
        </figure>
				<figcaption className='legend__caption'>The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.</figcaption>
      </section>
    )
  }
})

export default Legend

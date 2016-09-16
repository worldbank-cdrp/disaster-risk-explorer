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
      return `${Number((number / 1000000000).toFixed(decimals)).toLocaleString()} B`
    } else if (number >= 1000000) {
      return `${Number((number / 1000000).toFixed(decimals)).toLocaleString()} M`
    } else {
      return number.toLocaleString()
    }
  },

  render: function () {
    const activeRisk = this.props.dataSelection.risk.getActive().key
    let legend = inactiveLegends[activeRisk]

    const lowest = this.shortenNumber(legend[0][0], 3)
    const highest = this.shortenNumber(legend[legend.length - 1][0], 3)

    legend = legend.map((cat, i) => {
      return (<span key={i}
                    className='legend__category'
                    style={{width: 100 / legend.length + '%',
                            backgroundColor: cat[1]}}></span>
      )
    })
    return (
      <section className='legend'>
				<h2 className='legend__title'>Average Annual Loss from {this.capitalizeFirstLetter(activeRisk)}</h2>
				<figure className='legend__scale'>
          {legend}
          <span className='legend__labels'>{lowest}</span>
          <span className='legend__labels'>{highest}</span>
        </figure>
				<figcaption className='legend__caption'>The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.</figcaption>
      </section>
    )
  }
})

export default Legend

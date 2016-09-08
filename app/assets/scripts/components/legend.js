import React from 'react'

import { } from '../actions'

const Legend = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section id='Legend'>
				<h2 className='legend__title'>Average Annual Loss from Earthquakes</h2>
				<figure className='legend__scale'></figure>
				<figcaption className='legend__caption'>The Average Annual Loss is not weighted by population. Therefore areas with greater AAL may not necessarily be more at risk for earthquakes.</figcaption>
      </section>
    )
  }
})

export default Legend

import React from 'react'

import { } from '../actions'

const Results = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section id='Results'>
        <h2 className='results__title'>Selected Area</h2>
        <h3 className='results__subtitle'>Exposure</h3>
        <div className='results__stat'>
          <div className='results__stat--attribute'>Building Stock Exposure</div>
          <div className='results__stat--value'>$19 Billion</div>
        </div>

        <h3 className='results__subtitle'>Loss</h3>
        <div className='results__stat'>
          <div className='results__stat--attribute'>Probable Maximum Loss</div>
          <div className='results__stat--value'>$9.5 Billion</div>
        </div>
        <div className='results__stat'>
          <div className='results__stat--attribute'>Average Annual Loss</div>
          <div className='results__stat--value'>$10 Billion</div>
        </div>
        <div className='results__temporal'>
          <div className='results__stat--attribute'>Average Annual Loss over time</div>
          <figure className='results__temporal'></figure>
        </div>

        <h3 className='results__subtitle'>Risk</h3>
        <div className='results__stat'>
          <div className='results__stat--attribute'>Average Annual Loss</div>
          <div className='results__stat--value'>$10 Billion</div>
        </div>

        <article className='calculator__container'>
        </article>

      </section>
    )
  }
})

export default Results

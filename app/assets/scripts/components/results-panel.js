import React from 'react'

import { } from '../actions'

const Results = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section className='Results'>
        <h2 className='results__title'>Selected Area</h2>
        <h3 className='results__subtitle'>Exposure</h3>
        <dl className='results__stat'>
          <dt className='results__stat--attribute'>Building Stock Exposure</dt>
          <dd className='results__stat--value'>$19 Billion</dd>
        </dl>

        <h3 className='results__subtitle'>Loss</h3>
        <dl className='results__stat'>
          <dt className='results__stat--attribute'>Probable Maximum Loss</dt>
          <dd className='results__stat--value'>$9.5 Billion</dd>
          <dt className='results__stat--attribute'>Average Annual Loss</dt>
          <dd className='results__stat--value'>$10 Billion</dd>
          <dt className='results__stat--attribute'>Average Annual Loss over time</dt>
          <dd className='results__temporal'></dd>
        </dl>

        <h3 className='results__subtitle'>Risk</h3>
        <dl className='results__stat'>
          <dt className='results__stat--attribute'>Average Annual Loss</dt>
          <div className='results__stat--value'>$10 Billion</div>
        </dl>

        <article className='calculator__container'>
        </article>
      </section>
    )
  }
})

export default Results

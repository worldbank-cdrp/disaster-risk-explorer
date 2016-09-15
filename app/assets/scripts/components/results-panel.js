import React from 'react'

import { } from '../actions'
import BarChart from './charts/bar-chart'

const Results = React.createClass({
  propTypes: {
  },

  render: function () {
    let data = [
      {value: 10, name: 'Historical'},
      {value: 20, name: '25y'},
      {value: 45, name: '50y'},
      {value: 33, name: '100y'},
      {value: 81, name: '200y'}
    ]
    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }
    return (
      <section className='results'>
        <h2 className='results__title'>Nicaragua <button className='button button_results results__download'><i className='collecticon collecticon-download' />Download Profile</button></h2>
          <div className='results__container'>
            <h3 className='subtitle results__subtitle'>Exposure</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>Building Stock Exposure</dt>
              <dd className='stat__value stat__value--last'>$19 Billion</dd>
            </dl>

            <div className='results__divider results__divider--first'></div>

            <h3 className='subtitle results__subtitle'>Loss</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>Probable Maximum Loss</dt>
              <dd className='stat__value'>$9.5 Billion</dd>
              <dt className='stat__attribute'>Average Annual Loss</dt>
              <dd className='stat__value'>$10 Billion</dd>
              <dt className='stat__attribute'>Average Annual Loss over time</dt>
              <dd className='stat__value stat__value--chart stat__value--last'>
                <BarChart
                  data={data}
                  margin={margin}
                  yTitle='Y title'
                  xTitle='X title'
                />
              </dd>
            </dl>

            <div className='results__divider results__divider--second'></div>

            <h3 className='subtitle results__subtitle'>Risk</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>Average Annual Loss</dt>
              <div className='stat__value stat__value--last'>$10 Billion</div>
            </dl>

            <article className='calculator__container'>
              <h3 className='subtitle results__subtitle'>Building Conversion Calculator</h3>
              <dl className='stats'>
                <div className='stat__attribute'>Convert <span className='convert__dropdown'></span> to <span className='convert__dropdown'></span></div>
                <dt className='stat__attribute'>Percent Converted</dt>
                <dd className='stat__value'>10%</dd>
                <dt className='stat__attribute'>Conversion Cost</dt>
                <dd className='stat__value'>$10 Billion</dd>
                <dt className='stat__attribute'>Converted AAL</dt>
                <dd className='stat__value'>$10 Billion</dd>
                <dt className='stat__attribute'>Years until breaking even</dt>
                <dd className='stat__value stat__value--last stat__value--positive'>101</dd>
              </dl>
            </article>
          </div>
      </section>
    )
  }
})

export default Results

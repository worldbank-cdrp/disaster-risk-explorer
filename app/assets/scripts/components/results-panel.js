import React from 'react'

import { } from '../actions'
import BarChart from './charts/bar-chart'

const Results = React.createClass({
  propTypes: {
    data: React.PropTypes.object
  },

  deleteThis: function () {
    return (
      <section className='results'>
        <h2 className='results__title'>Title</h2>
          <div className='results__container'>
            <h3 className='subtitle results__subtitle'>This is a dummy title</h3>
            <p>More dummy content</p>
          </div>
      </section>
    )
  },

  render: function () {
    let d = this.props.data
    if (d === null) {
      return this.deleteThis()
    }

    let data = [
      {value: 10, name: '10'},
      {value: 20, name: '25'},
      {value: 45, name: '50'},
      {value: 66, name: '100'},
      {value: 88, name: '200'}
    ]
    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }
    // <pre>{JSON.stringify(d, null, '  ')}</pre>
    return (
      <section className='results'>
        <h2 className='results__title'>{d.NAME_0} <button className='button button_results results__download'><i className='collecticon collecticon-download' />Download Profile</button></h2>
          <div className='results__container'>
            <h3 className='subtitle results__subtitle'>Exposure</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>GDP</dt>
              <dd className='stat__value'>$63.79 billion</dd>
              <dt className='stat__attribute'>Building Stock Exposure</dt>
              <dd className='stat__value'>$19 Billion</dd>
            </dl>

            <div className='results__divider results__divider--first'></div>

            <h3 className='subtitle results__subtitle results__subtitle--secondary'>Loss</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>Average Annual Loss</dt>
              <dd className='stat__value'>${d.AAL}</dd>
              <dt className='stat__attribute'>Probable loss over time</dt>
              <dd className='stat__value stat__value--chart stat__value--last'>
                <BarChart
                  data={data}
                  margin={margin}
                  yTitle='Millions (US$)'
                  xTitle='Return Period'
                />
              </dd>
            </dl>

            <div className='results__divider results__divider--second'></div>

            <h3 className='subtitle results__subtitle results__subtitle--secondary'>Risk</h3>
            <dl className='stats'>
              <dt className='stat__attribute'>Building Type most at Risk</dt>
              <div className='stat__value'>Adobe and Wood</div>
            </dl>

            <article className='calculator__container'>
              <h3 className='subtitle results__subtitle'>Building Conversion Calculator</h3>
              <dl className='stats'>
                <div className='stat__attribute'>Convert <input type='dropdown' className='convert__dropdown'></input> to <span className='convert__dropdown'></span></div>
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

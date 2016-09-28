import React from 'react'

import { toggleCalculator, showModalCalc } from '../actions'
import { t } from '../utils/i18n'

import BarChart from './charts/bar-chart'
import BuildingCalculator from './building-calculator'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    calculatorOpen: React.PropTypes.bool,
    data: React.PropTypes.object,
    conversion: React.PropTypes.string,
    sliderValue: React.PropTypes.number
  },

  toggleCalculator: function (e) {
    e.preventDefault()
    this.props.dispatch(toggleCalculator(!this.props.calculatorOpen))
  },

  deleteThis: function () {
    return (
      <section className='results'>
        <div className='results__space'>
        <h2 className='results__title'>{t('default-title')}</h2>
          <div className='results__container'>
            <h3 className='subtitle results__subtitle'></h3>
            <p className='results__container--textbox'>{t('default-text')}</p>
          </div>
        </div>
        <button className='results__calc-launcher button'><span className='results__calc-hover'>Launch Building Stock Calculator</span></button>
      </section>
    )
  },

  render: function () {
    let d = this.props.data
    if (d === null) {
      return this.deleteThis()
    }

    // Placeholder name attribute. For now, will default to ID for grid cells to preserve layout
    const title = d.NAME_0 ? d.NAME_0 : 'Grid Cell #' + d.UNIQUE_ID

    const data = [
      {value: Math.round(d.RP_10 / 1000000), name: 'RP 10'},
      {value: Math.round(d.RP_50 / 1000000), name: 'RP 50'},
      {value: Math.round(d.RP_100 / 1000000), name: 'RP 100'},
      {value: Math.round(d.RP_250 / 1000000), name: 'RP 250'},
      {value: Math.round(d.RP_500 / 1000000), name: 'RP 500'},
      {value: Math.round(d.RP_1000 / 1000000), name: 'RP 1000'}
    ]

    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }

    return (
      <div>
        {this.props.calculatorOpen
        ? <BuildingCalculator
            selectedCode={d.Country}
            attributes={this.props.data}
            conversion={this.props.conversion}
            sliderValue={this.props.sliderValue}
            calculatorOpen={this.props.calculatorOpen}
            dispatch={this.props.dispatch} />
        : ''}
        <section className='results'>
          <div className='results__space'>
            <h2 className='results__title'>{title}</h2>
              <div className='results__container'>
                <h3 className='subtitle results__subtitle'>Exposure</h3>
                <dl className='stats'>
                  <dt className='stat__attribute'>GDP</dt>
                  <dd className='stat__value unimplemented'>$45 Billion</dd>
                  <dt className='stat__attribute'>Building Stock Exposure</dt>
                  <dd className='stat__value unimplemented'>$34 Million</dd>
                </dl>

                <div className='results__divider results__divider--first'></div>

                <h3 className='subtitle results__subtitle results__subtitle--secondary'>Loss</h3>
                <dl className='stats'>
                  <dt className='stat__attribute'>Average Annual Loss</dt>
                  <dd className='stat__value'>${Number(d.AAL.toFixed(2)).toLocaleString()}</dd>
                  <dt className='stat__attribute'>Probable loss over time</dt>
                  <dd className='stat__value unimplemented'>$4 Billion</dd>
                  <dd className='stat__value stat__value--chart stat__value--last'>
                    <BarChart
                      data={data}
                      margin={margin}
                      yTitle='Millions (US$)'
                      xTitle='Return Period'
                    />
                  </dd>
                </dl>
              </div>
              <button className='button button_results button_results--half'>View Historical Data</button>
              <button className='button button_results button_results--half button_results--right'><i className='collecticon collecticon-download' />{t('Download Profile')}</button>
            </div>
          <button onClick={() => this.props.dispatch(showModalCalc())} className='results__calc-launcher button'><span className='results__calc-hover'>Launch Building Stock Calculator</span></button>
        </section>
      </div>
    )
  }
})

export default Results

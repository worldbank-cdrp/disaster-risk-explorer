import React from 'react'
import multiDownload from 'multi-download'

import { showModalCalc, newCalcId } from '../actions'
import { adminNames } from '../constants'
import { shortenNumber } from '../utils/format'
import { t } from '../utils/i18n'

import BarChart from './charts/bar-chart'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,
    queryParams: React.PropTypes.object,
    data: React.PropTypes.object
  },

  deleteThis: function () {
    return (
      <section className='results'>
      </section>
    )
  },

  render: function () {
    let d = this.props.data
    if (d === null) {
      return this.deleteThis()
    }

    let adminName = d.id
    adminName.length === 2
      ? adminName = adminNames[adminName]
      : adminName = `${adminNames[adminName]}, ${adminNames[adminName.substring(0, 2)]}`

    const risk = this.props.dataSelection.risk.getActive().value
    const admin = this.props.dataSelection.admin.getActive().key

    let yTitle = 'Billions (US$)'
    let valDenominator = 1000000000
    if (admin === 'admin1') {
      yTitle = 'Millions (US$)'
      valDenominator = 1000000
    }

    let rps = ['100', '250', '500', '1000']
    const data = rps.map((rp) => {
      const value = d[`LS_${risk}_${rp}`] ? d[`LS_${risk}_${rp}`] : 0
      return {value: value / valDenominator, name: 'RP ' + rp}
    })

    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }

    return (
      <div>
        <section className='results'>
          <div className='results__space'>
            <h2 className='results__title'>{adminName}</h2>
              <div className='results__container'>
                <h3 className='subtitle results__subtitle'>Exposure</h3>
                <dl className='stats'>
                  <dt className='stat__attribute'>GDP</dt>
                  <dd className='stat__value unimplemented'>${shortenNumber(d.EX_GD, 2, false)}</dd>
                  <dt className='stat__attribute'>Building Stock Exposure</dt>
                  <dd className='stat__value unimplemented'>${shortenNumber(d.EX_BS, 2, false)}</dd>
                </dl>

                <div className='results__divider results__divider--first'></div>

                <h3 className='subtitle results__subtitle results__subtitle--secondary'>Loss</h3>
                <dl className='stats'>
                <div>
                    <dt className='stat__attribute'>Average Annual Loss</dt>
                    <dd className='stat__value'>
                      ${shortenNumber(d[`LS_${risk}_AAL`], 2, false)}
                    </dd>
                  </div>
                  <dt className='stat__attribute'>Probable loss over time</dt>
                  <dd className='stat__value unimplemented'>$4 Billion UNIMPLEM</dd>
                  <dd className='stat__value stat__value--chart stat__value--last'>
                    <BarChart
                      data={data}
                      margin={margin}
                      yTitle={yTitle}
                      xTitle='Return Period'
                    />
                  </dd>
                </dl>
                <button className='button button_results' onClick={this.handleDownload}><i className='collecticon collecticon-download' />{t('Download Profile')}</button>
              </div>
            </div>
          <button onClick={() =>
            this.props.dispatch(showModalCalc()) &&
            this.props.dispatch(newCalcId(d.id))
          } className='button button__map button--full'><span className='results__calc-hover'>Launch Building Stock Calculator</span></button>
        </section>
      </div>
    )
  },

  handleDownload: function () {
    multiDownload([`assets/data/pdfs/${this.props.data.id}.pdf`])
  }
})

export default Results

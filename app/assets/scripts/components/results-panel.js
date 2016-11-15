import React from 'react'
import multiDownload from 'multi-download'

import { showModalCalc, newCalcId } from '../actions'
import { graphCols, calcDropItems } from '../constants'
import { getMapId } from '../utils/map-id'
import { shortenNumber } from '../utils/format'
import { t } from '../utils/i18n'
import c from 'classnames'

import BarChart from './charts/bar-chart'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,
    queryParams: React.PropTypes.object,
    data: React.PropTypes.object,
    mapType: React.PropTypes.string
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

    let adminName
    d.id.length === 2
      ? adminName = t(d.id)
      : adminName = `${t(d.id)}, ${t(d.id.substring(0, 2))}`

    const risk = this.props.dataSelection.risk.getActive().value
    const metric = this.props.dataSelection.metric.getActive().key
    const admin = this.props.dataSelection.admin.getActive().key
    const mapType = this.props.mapType

    let yTitle = t('Billions (US$)')
    let xTitle = t('Return Period')
    let valDenominator = 1000000000
    if (admin === 'admin1') {
      yTitle = t('Millions (US$)')
      valDenominator = 1000000
    }
    if (mapType === 'relative') {
      yTitle = t('US Dollars ($)')
      valDenominator = 1
    }

    const rps = graphCols[getMapId(this.props.dataSelection).slice(0, 5)]
    const suffix = mapType === 'relative' && metric === 'loss' ? '_R' : ''
    const data = rps.map((rp) => {
      const value = d[`LS_${risk}_${rp}${suffix}`] ? d[`LS_${risk}_${rp}${suffix}`] : 0
      return {value: Number((value / valDenominator).toFixed(2)), name: rp}
    })

    let margin = {
      top: 16,
      left: 50,
      right: 16,
      bottom: 56
    }

    var hasData = false
    var countryActive = d.id.substring(0, 2)
    var calcButtonLabel = 'No building data for this region'

    calcDropItems.countryName.forEach(o => {
      if (o.key === d.id) {
        hasData = true
      }
    })

    calcDropItems.districtName[countryActive].forEach(o => {
      if (o.key === d.id) {
        hasData = true
      }
    })

    if (hasData) {
      calcButtonLabel = 'Launch cost and benefit calculator'
    }

    return (
      <div>
        <section className='results'>
          <div className='results__space'>
            <h2 className='results__title'>{adminName}</h2>
              <div className='results__container'>
                <h3 className='subtitle results__subtitle'>{t('Exposure')}</h3>
                <dl className='stats'>
                  <dt className='stat__attribute'>{t('GDP')}</dt>
                  <dd className='stat__value unimplemented'>${shortenNumber(d.EX_GD, 2, false) === false ? ' -' : shortenNumber(d.EX_GD, 2, false)}</dd>
                  <dt className='stat__attribute'>{t('Building Stock Exposure')}</dt>
                  <dd className='stat__value unimplemented'>${shortenNumber(d.EX_BS, 2, false) === false ? ' -' : shortenNumber(d.EX_BS, 2, false)}</dd>
                </dl>

                <div className='results__divider results__divider--first'></div>

                <h3 className='subtitle results__subtitle results__subtitle--secondary'>{t('loss')}</h3>
                <dl className='stats'>
                <div>
                    <dt className='stat__attribute'>{t('Average Annual Loss')}</dt>
                    <dd className='stat__value'>
                      ${shortenNumber(d[`LS_${risk}_AAL`], 2, false)}
                    </dd>
                  </div>
                  <dd className='stat__value stat__value--chart stat__value--last'>
                    <BarChart
                      data={data}
                      margin={margin}
                      yTitle={yTitle}
                      xTitle={xTitle}
                    />
                  </dd>
                </dl>
                <button className='button button_results' onClick={this.handleDownload}><i className='collecticon collecticon-download' />{t('Download Country Profile PDF')}</button>
              </div>
            </div>
          <button onClick={() =>
            this.props.dispatch(showModalCalc()) &&
            this.props.dispatch(newCalcId(d.id))
          } className={c('button', 'button__map', 'button--full', {'button-full-disabled': hasData === false})}><span className='results__calc-hover'><i className={c('collecticon', 'collecticon-expand-top-left', {'hidden': hasData === false})} />{t(calcButtonLabel)}</span></button>
        </section>
      </div>
    )
  },

  handleDownload: function () {
    multiDownload([`assets/data/pdfs/${this.props.data.id}.pdf`])
  }
})

export default Results

import React from 'react'
import Nouislider from 'react-nouislider'

import buildingData from '../../data/buildings.json'
import { selectConversion } from '../actions'

const Results = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    selectedCode: React.PropTypes.object,
    conversion: React.PropTypes.string
  },

  selectConversion: function (conversion) {
    this.props.dispatch(selectConversion(conversion))
  },

  render: function () {
    // Country codes not yet added to Mapbox data; hardcoding a country code for now

    const countryCode = 'GT-JU' // this.props.selectedCode
    const data = buildingData[countryCode][this.props.conversion]

    return (
      <section className='calculator'>
        <h2 className='calculator__title'>Building Stock Conversion Calculator</h2>
        <div className='calculator__container'>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Conversion Type:</dt>
            <dd className='calculator__radio'>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='retrofit'
                       checked={this.props.conversion === 'retrofit'}
                       onChange={() => this.selectConversion('retrofit')} />
                <span>Retrofit</span>
               </label>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='replacement'
                       checked={this.props.conversion === 'replacement'}
                       onChange={() => this.selectConversion('replacement')} />
                <span>Replace</span>
              </label>
            </dd>
          </dl>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Amount Converted:</dt>
            <dd className='calculator__slider'>
            <Nouislider
              range={{min: 0, max: 100}}
              start={[40]}
              step={5}
              pips={{mode: 'range', density: 20}}
            />
            </dd>
          </dl>
          <div className='calculator__description top'>
            Wood braced frame with load-bearing infill wall system single family - on stilts
          </div>
          <div className='calculator__divider-broken left'></div>
          <div className='calculator__divider-broken-label'>are converted into</div>
          <div className='calculator__divider-broken right'></div>
          <div className='calculator__description bottom'>
            Waffle Houses just stacked one on top of the other
          </div>
          <div className='calculator__divider'></div>
          <dl className='stats'>
            <dt className='stat__attribute'>Conversion Cost</dt>
            <dd className='stat__value'>{data.conversionCost}</dd>
            <dt className='stat__attribute'>Reduction of AAL</dt>
            <dd className='stat__value'>Unknown Attribute</dd>
            <dt className='stat__attribute'>Change in AAL for these buildings</dt>
            <dd className='stat__value'>{data.buildingChangeAAL}</dd>
            <dt className='stat__attribute'>Change in overall AAL</dt>
            <dd className='stat__value'>{data.overallChangeAAL}</dd>
            <dt className='stat__attribute'>Flat rate years to break even</dt>
            <dd className='stat__value stat__value--last stat__value--positive'>{data.breakEven}</dd>
          </dl>
        </div>
      </section>
    )
  }
})

export default Results

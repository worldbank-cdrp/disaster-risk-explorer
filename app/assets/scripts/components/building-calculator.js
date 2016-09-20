import React from 'react'
import Nouislider from 'react-nouislider'

import { } from '../actions'

const Results = React.createClass({
  propTypes: {
    selected: React.PropTypes.object
  },

  render: function () {
    return (
      <section className='calculator'>
        <h2 className='calculator__title'>Building Stock Conversion Calculator</h2>
        <div className='calculator__container'>
          <dl className='calculator__widget-container'>
            <dt className='calculator__widget-name'>Conversion Type:</dt>
            <dd className='calculator__radio'>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='retrofit' defaultChecked />
                <span>Retrofit</span>
               </label>
              <label className='radio inline'>
                <input type='radio' name='improvement' value='replace' />
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
            Wood braced frame with load-bearing infill wall system single family - on stilts
          </div>
          <div className='calculator__divider'></div>
        </div>
      </section>
    )
  }
})

export default Results

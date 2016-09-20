import React from 'react'

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
          <dl className='calculator__radio-container'>
            <dt className='calculator__radio-name'>Conversion Type:</dt>
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
        </div>
      </section>
    )
  }
})

export default Results

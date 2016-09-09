import React from 'react'

import { } from '../actions'

const Selection = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section className='selection'>
        <dl className='selection__panel'>
          <dt className='selection__panel--attribute'>Current hazard</dt>
          <dd className='selection__panel--drop'>Earthquake</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--attribute'>Year</dt>
          <dd className='selection__panel--drop'>2000</dd>
        </dl>
        <dl className='selection__panel selection__panel--split'>
          <dt className='selection__panel--attribute'>Building exposure</dt>
          <dd className='selection__panel--drop'>Retrofitted</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--attribute'>Select data by</dt>
          <dd className='selection__panel--drop'>Country</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--attribute'>Change Basemap</dt>
          <dd className='selection__panel--drop'>Basic</dd>
        </dl>
      </section>
    )
  }
})

export default Selection

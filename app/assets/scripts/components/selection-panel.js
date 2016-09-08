import React from 'react'

import { } from '../actions'

const Selection = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section className='selection'>
        <dl className='selection__panel'>
          <dt className='selection__panel--feature'>Risk</dt>
          <dd className='selection__panel--drop'>Dropdown</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--feature'>Risk</dt>
          <dd className='selection__panel--drop'>Dropdown</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--feature'>Risk</dt>
          <dd className='selection__panel--drop'>Dropdown</dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='selection__panel--feature'>Risk</dt>
          <dd className='selection__panel--drop'>Dropdown</dd>
        </dl>
      </section>
    )
  }
})

export default Selection

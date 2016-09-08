import React from 'react'

import { } from '../actions'

const Selection = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section id='Selection'>
        <div className='selection__panel'>
          <div className='selection__panel--feature'>Risk</div>
          <div className='selection__panel--drop'>Dropdown</div>
        </div>
        <div className='selection__panel'>
          <div className='selection__panel--feature'>Risk</div>
          <div className='selection__panel--drop'>Dropdown</div>
        </div>
        <div className='selection__panel'>
          <div className='selection__panel--feature'>Risk</div>
          <div className='selection__panel--drop'>Dropdown</div>
        </div>
        <div className='selection__panel'>
          <div className='selection__panel--feature'>Risk</div>
          <div className='selection__panel--drop'>Dropdown</div>
        </div>
      </section>
    )
  }
})

export default Selection

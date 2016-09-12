import React from 'react'

import { mapSources } from '../constants'
import { updateMapSource } from '../actions'

const Selection = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    mapSource: React.PropTypes.object
  },
  _toggleLayer: function () {
    this.props.dispatch(updateMapSource(mapSources['km10']))
  },
  render: function () {
    return (
      <section className='selection'>
        <a href='#' onClick={this._toggleLayer}>Switch admin levels</a>
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

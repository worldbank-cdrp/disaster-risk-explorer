import React from 'react'

import { mapSources } from '../constants'
import { updateMapSource } from '../actions'

import Dropdown from './dropdown'

const Selection = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    mapSource: React.PropTypes.object
  },
  _toggleSource: function (mapSource) {
    this.props.dispatch(updateMapSource(mapSources[mapSource]))
  },
  render: function () {
    return (
      <section className='selection'>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Risk</dt>
          <dd className='selection__panel--drop'>
            <Dropdown
              triggerElement='button'
              triggerClassName='button button--base-unbounded button__drop drop__toggle--caret'
              triggerTitle='Show/hide parameter options'
              triggerText={'Hello'} >

              <ul role='menu' className='drop__menu drop__menu--select'>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close'><span>Earthquake</span></a></li>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close'><span>Hurricane</span></a></li>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close'><span>Flood</span></a></li>
              </ul>

            </Dropdown>
          </dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Year</dt>
          <dd className='selection__panel--drop'>2000 <i className='collecticon collecticon-triangle-down' /></dd>
        </dl>
        <dl className='selection__panel selection__panel--split'>
          <dt className='subtitle selection__panel--attribute'>Building exposure</dt>
          <dd className='selection__panel--drop'>Retrofitted <i className='collecticon collecticon-triangle-down' /></dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Risk</dt>
          <dd className='selection__panel--drop'>
            <Dropdown
              triggerElement='button'
              triggerClassName='button button--base-unbounded button__drop drop__toggle--caret'
              triggerTitle='Show/hide parameter options'
              triggerText={'Select data by'} >

              <ul role='menu' className='drop__menu drop__menu--select'>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close' onClick={() => this._toggleSource('admin0')}><span>Admin Level 0</span></a></li>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close' onClick={() => this._toggleSource('admin1')}><span>Admin Level 1</span></a></li>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close' onClick={() => this._toggleSource('km10')}><span>10km Grids</span></a></li>
              </ul>

            </Dropdown>
          </dd>
        </dl>

        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Change Basemap</dt>
          <dd className='selection__panel--drop'>Basic <i className='collecticon collecticon-triangle-down' /></dd>
        </dl>
      </section>
    )
  }
})

export default Selection

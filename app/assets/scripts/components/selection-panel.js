import React from 'react'
import { hashHistory } from 'react-router'
import c from 'classnames'

import { mapSources } from '../constants'
import { updateMapSource } from '../actions'
import { getLanguage } from '../utils/i18n'

import Dropdown from './dropdown'

const Selection = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    mapSource: React.PropTypes.object,
    queryParams: React.PropTypes.object
  },
  _toggleSource: function (mapSource) {
    this.props.dispatch(updateMapSource(mapSources[mapSource]))
  },

  onOptSelect: function (key, value, e) {
    e.preventDefault()
    const dataSelection = new DataSelection(this.props.queryParams)
    dataSelection[key].setActive(value)
    hashHistory.push(`/${getLanguage()}?${dataSelection.getQS()}`)
  },

  renderDropdown: function (paramKey, active, dropOpts) {
    console.log(paramKey, active, dropOpts)
    return (
      <Dropdown
        triggerElement='button'
        triggerClassName='button button--base-unbounded button__drop drop__toggle--caret'
        triggerTitle='Show/hide parameter options'
        triggerText={active.value} >

        <ul role='menu' className='drop__menu drop__menu--select'>
          {dropOpts.map(o => {
            return ( <li key={o.key}>
              <a
                className={c('drop__menu-item', {'drop__menu-item--active': o.key === active.key})}
                href='#'
                title=''
                data-hook='dropdown:close'
                onClick={this.onOptSelect.bind(null, paramKey, o.key)}>
                <span>{o.key}</span>
              </a>
            </li> )
          })}
        </ul>
      </Dropdown>
    )
  },

  render: function () {
    const dataSelection = new DataSelection(this.props.queryParams)

    return (
      <section className='selection'>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Risk</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('risk', dataSelection.risk.getActive(), dataSelection.risk.getOptions())}
          </dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Year</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('year', dataSelection.year.getActive(), dataSelection.year.getOptions())}
          </dd>
        </dl>
        <dl className='selection__panel selection__panel--split'>
          <dt className='subtitle selection__panel--attribute'>Building exposure</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('building', dataSelection.building.getActive(), dataSelection.building.getOptions())}
          </dd>
        </dl>
        <dl className='selection__panel'>
<<<<<<< HEAD
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
=======
          <dt className='subtitle selection__panel--attribute'>Select data by</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('admin', dataSelection.admin.getActive(), dataSelection.admin.getOptions())}
>>>>>>> 7bf3d8ed921c258bb68065b8c233d98b176e1e62
          </dd>
        </dl>

        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Change Basemap</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('basemap', dataSelection.basemap.getActive(), dataSelection.basemap.getOptions())}
          </dd>
        </dl>
      </section>
    )
  }
})

export default Selection

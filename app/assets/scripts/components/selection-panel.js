import React from 'react'
import { hashHistory } from 'react-router'
import c from 'classnames'

import { getLanguage } from '../utils/i18n'
import DataSelection from '../utils/data-selection'
import Dropdown from './dropdown'

const Selection = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    mapSource: React.PropTypes.object,
    queryParams: React.PropTypes.object
  },

  onOptSelect: function (key, value, e) {
    e.preventDefault()
    const dataSelection = DataSelection(this.props.queryParams)
    dataSelection[key].setActive(value)
    hashHistory.push(`/${getLanguage()}?${dataSelection.getQS()}`)
  },

  renderDropdown: function (paramKey, active, dropOpts) {
    return (
      <Dropdown
        triggerElement='button'
        triggerClassName='button button--base-unbounded button__drop drop__toggle--caret'
        triggerTitle='Show/hide parameter options'
        triggerText={active.value} >

        <ul role='menu' className='drop__menu drop__menu--select'>
          {dropOpts.map(o => {
            return (<li key={o.key}>
              <a
                className={c('drop__menu-item', {'drop__menu-item--active': o.key === active.key})}
                href='#'
                title=''
                data-hook='dropdown:close'
                onClick={this.onOptSelect.bind(null, paramKey, o.key)}>
                  <span>{o.key}</span>
              </a>
            </li>)
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
        <dl className='selection__panel selection__panel--split'>
          <dt className='subtitle selection__panel--attribute'>View Data As</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('year', dataSelection.year.getActive(), dataSelection.year.getOptions())}
          </dd>
        </dl>
        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'>Select data by</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('admin', dataSelection.admin.getActive(), dataSelection.admin.getOptions())}
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

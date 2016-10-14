import React from 'react'
import { hashHistory } from 'react-router'
import c from 'classnames'
import _ from 'underscore'

import { getLanguage, t } from '../utils/i18n'
import { availableRPs } from '../constants'
import DataSelection from '../utils/data-selection'
import Dropdown from './dropdown'

const Selection = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    mapSource: React.PropTypes.object,
    queryParams: React.PropTypes.object
  },

  onOptSelect: function (key, value, admin, metric, hazard, currentRP, e) {
    e.preventDefault()
    const dataSelection = DataSelection(this.props.queryParams)

    // If viewing hazard grids, switch to the default metric when switching back to admin levels
    const dsMetric = dataSelection.metric
    if ((value === 'admin0' || value === 'admin1') && dsMetric.getActive().key === 'risk') {
      dsMetric.setActive(dsMetric.getDefault().key)
    }

    if (key !== 'return' && key !== 'opacity' && key !== 'basemap' && // ...continued:
       // Exclusive Or: neither upcoming nor existing selection can be 'exposure'
       ((metric !== 'exposure') && !(metric !== 'exposure')) || (!(metric !== 'exposure') && (metric !== 'exposure'))) {
      // Locally update existing key combination with the incoming menu change, before it reaches the state
      if (key === 'risk') hazard = value
      if (key === 'admin') admin = value
      if (key === 'metric') metric = value
      // If current RP value not in upcoming list of available RPs, switch to the first RP in the upcoming array
      const nextRPs = availableRPs[admin][metric][hazard]
      if (!_.contains(nextRPs, currentRP)) {
        let nextRP = nextRPs[0]
        nextRP = nextRP === 'AAL' ? 'AAL' : Number(nextRP).toString() + ' Years'
        dataSelection.return.setActive(nextRP)
      }
    }

    dataSelection[key].setActive(value)
    hashHistory.push(`/${getLanguage()}?${dataSelection.getQS()}`)
  },

  renderDropdown: function (paramKey, active, dropOpts) {
    const dataSelection = DataSelection(this.props.queryParams)
    const admin = dataSelection.admin.getActive().key
    const metric = dataSelection.metric.getActive().key
    const hazard = dataSelection.risk.getActive().key
    const currentRP = dataSelection.return.getActive().value
    let rps = []
    if (paramKey === 'return' && metric !== 'exposure') {
      rps = availableRPs[admin][metric][hazard]
    }

    return (
      <Dropdown
        triggerElement='button'
        triggerClassName='button button--base-unbounded button__drop drop__toggle--caret'
        triggerTitle={t('Show/hide parameter options')}
        triggerText={t(active.key)} >

        <ul role='menu' className='drop__menu drop__menu--select'>
          {dropOpts.map(o => {
            const disabledClass = (admin === 'admin0' || admin === 'admin1') & o.key === 'risk'
            ? 'disabled' : ''
            const disabledText = (admin === 'admin0' || admin === 'admin1') & o.key === 'risk'
            ? `(disabled at ${admin})` : ''

            const hiddenClass = (paramKey === 'return' && !_.contains(rps, o.value))
            ? 'hidden' : ''

            return (<li key={o.key} className={disabledClass}>
              <a
                className={c('drop__menu-item', disabledClass, hiddenClass, {'drop__menu-item--active': o.key === active.key})}
                href='#'
                title=''
                data-hook='dropdown:close'
                onClick={this.onOptSelect.bind(null, paramKey, o.key, admin, metric, hazard, currentRP)}>
                  <span>{t(o.key)} {disabledText}</span>
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
        <h2 className='legend__title'>{t('Selection Options')}</h2>

        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-chart-line' />{t('metric')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('metric', dataSelection.metric.getActive(), dataSelection.metric.getOptions())}
          </dd>
        </dl>

        <dl className={'selection__panel ' +
        (dataSelection.metric.getActive().key === 'exposure' ? 'disabled' : '')}>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-circle-exclamation' />{t('risk')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('risk', dataSelection.risk.getActive(), dataSelection.risk.getOptions())}
          </dd>
        </dl>

        <dl className={'selection__panel ' +
        (dataSelection.metric.getActive().key === 'exposure' ? 'disabled' : '')}>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-calendar' />{t('return')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('return', dataSelection.return.getActive(), dataSelection.return.getOptions())}
          </dd>
        </dl>

        <dl className='selection__panel selection__panel--split'>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-select-by' />{t('data by')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('admin', dataSelection.admin.getActive(), dataSelection.admin.getOptions())}
          </dd>
        </dl>

        <dl className='selection__panel'>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-circle' />{t('opacity')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('opacity', dataSelection.opacity.getActive(), dataSelection.opacity.getOptions())}
          </dd>
        </dl>
        <dl className='selection__panel selection__panel--split'>
          <dt className='subtitle selection__panel--attribute'><i className='collecticon collecticon-map' />{t('basemap')}</dt>
          <dd className='selection__panel--drop'>
            {this.renderDropdown('basemap', dataSelection.basemap.getActive(), dataSelection.basemap.getOptions())}
          </dd>
        </dl>
      </section>
    )
  }
})

export default Selection

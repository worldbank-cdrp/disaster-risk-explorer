import React from 'react'

import Dropdown from './dropdown'
import { } from '../actions'

const Selection = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <section className='selection'>
        <dl className='selection__panel'>
          <dt className='selection__panel--feature'>Risk</dt>
          <dd className='selection__panel--drop'>
            <Dropdown
              triggerElement='button'
              triggerClassName='button button--base-unbounded drop__toggle--caret'
              triggerTitle='Show/hide parameter options'
              triggerText={'Hello'} >

              <ul role='menu' className='drop__menu drop__menu--select'>
                <li><a className={'drop__menu-item'} href='#' title='' data-hook='dropdown:close'><span>Value</span></a></li>
              </ul>

            </Dropdown>
          </dd>
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

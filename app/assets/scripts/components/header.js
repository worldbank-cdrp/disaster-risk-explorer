import React from 'react'
import { Link } from 'react-router'
import c from 'classnames'
import { stringify } from 'qs'

import { getLanguage } from '../utils/i18n'

const Header = React.createClass({
  propTypes: {
    queryParams: React.PropTypes.object
  },

  render: function () {
    return (
      <header className='header'>
        <h1 className='header__title'>World Bank Risk Tool</h1>
        <button className='button header__information'><i className='collecticon collecticon-circle-information' /></button>
        <div className='header__language'>
          <Link to={`/en?${stringify(this.props.queryParams)}`} className={c('button header__language--toggle button__leftside', {'button--active': getLanguage() === 'en'})}>EN</Link>
          <Link to={`/es?${stringify(this.props.queryParams)}`} className={c('button header__language--toggle button__rightside', {'button--active': getLanguage() === 'es'})}>ES</Link>
        </div>
      </header>
    )
  }
})

export default Header

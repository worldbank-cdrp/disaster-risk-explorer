import React from 'react'
import { Link } from 'react-router'
import c from 'classnames'
import { stringify } from 'qs'

import { t, getLanguage } from '../utils/i18n'
import { showModalAbout } from '../actions'

const Header = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    queryParams: React.PropTypes.object
  },

  render: function () {
    return (
      <header className='header'>
        <h1 className='header__title'>{t('Disaster Risk Explorer for Central America')}</h1>
        <button className='button button--header-info button__map' onClick={() => this.props.dispatch(showModalAbout())}><span>{t('About')}</span></button>
        <div className='header__language'>
          <Link to={`/en?${stringify(this.props.queryParams)}`} className={c('button header__language--toggle button__leftside button__map', {'button--active': getLanguage() === 'en'})}><span className='header__language--text'>EN</span></Link>
          <Link to={`/es?${stringify(this.props.queryParams)}`} className={c('button header__language--toggle button__rightside button__map', {'button--active': getLanguage() === 'es'})}><span className='header__language--text'>ES</span></Link>
        </div>
      </header>
    )
  }
})

export default Header

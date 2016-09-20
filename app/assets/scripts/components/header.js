import React from 'react'

import { } from '../actions'

const Header = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <header className='header'>
        <h1 className='header__title'>World Bank Risk Tool</h1>
        <button className='button header__information'><i className='collecticon collecticon-circle-information' /></button>
        <div className='header__language'>
          <button className='button header__language--toggle button__leftside button--active'>EN</button><button className='button header__language--toggle button__rightside'>ES</button>
        </div>
      </header>
    )
  }
})

export default Header

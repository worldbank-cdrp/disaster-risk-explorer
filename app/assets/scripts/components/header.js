import React from 'react'

import { } from '../actions'

const Header = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <header id='Header'>
        <h1 className='header__title'>World Bank Risk Tool</h1>
        <div className='header__language'>
          <button className='header__language--toggle'>EN</button> | <button className='header__language--toggle'>ES</button>
        </div>
        <button className='header__information'>I</button>
      </header>
    )
  }
})

export default Header

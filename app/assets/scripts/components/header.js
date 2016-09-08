import React from 'react'

import { } from '../actions'

const Header = React.createClass({
  propTypes: {
  },
  render: function () {
    return (
      <header className='Header'>
        <h1 className='header__title'>World Bank Risk Tool</h1>
        <button className='header__information'>I</button>
        <div className='header__language'>
          <button className='header__language--toggle'>EN</button> | <button className='header__language--toggle'>ES</button>
        </div>
      </header>
    )
  }
})

export default Header

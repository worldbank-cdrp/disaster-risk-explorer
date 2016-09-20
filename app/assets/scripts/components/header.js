import React from 'react'

import { showModalAbout } from '../actions'

const Header = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func
  },

  render: function () {
    return (
      <header className='header'>
        <h1 className='header__title'>World Bank Risk Tool</h1>
        <button className='button button--header-info' onClick={() => this.props.dispatch(showModalAbout())}><span>About the project</span></button>
        <div className='header__language'>
          <button className='button header__language--toggle button__leftside button--active'>EN</button><button className='button header__language--toggle button__rightside'>ES</button>
        </div>
      </header>
    )
  }
})

export default Header

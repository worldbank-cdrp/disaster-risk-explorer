import React from 'react'
import Nouislider from 'react-nouislider'

import { updateOpacity } from '../actions'

const OpacityPanel = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,

    opacity: React.PropTypes.number
  },

  onChangeSlide: function (e) {
    this.props.dispatch(updateOpacity(Number(e[0])))
  },

  render: function () {
    return (
      <section className='opacity-panel'>
        <h2 className='opacity-panel__title'>Adjust Map Opacity</h2>
        <div className='opacity-panel__slider'>
          <Nouislider
            range={{min: 0, max: 100}}
            start={[this.props.opacity]}
            step={1}
            pips={{mode: 'range', density: 20}}
            onSlide={this.onChangeSlide}
          />
        </div>
      </section>
    )
  }
})

export default OpacityPanel

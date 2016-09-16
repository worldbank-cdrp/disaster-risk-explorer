import React from 'react'

const Axis = React.createClass({

  propTypes: {
    scale: React.PropTypes.func,
    labels: React.PropTypes.array,
    orientation: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    margin: React.PropTypes.object
  },

  render: function () {
    const { scale, labels, orientation, height, width, margin } = this.props
    let transform, dy
    switch (orientation) {
      case 'top':
        transform = `translate(${margin.left},${margin.top})`
        dy = '-0.5em'
        break
      case 'left':
        transform = `translate(0,${margin.top})`
        dy = 0
        break
      case 'bottom':
      default:
        transform = `translate(${margin.left},${height - margin.bottom})`
        dy = '1em'
    }

    return (
      <g className='axis' transform={transform}>
        {labels.map(label => {
          return <text
            key={label}
            className='chart__axis-ticks'
            x={orientation === 'left' ? margin.left - 5 : scale(label) + (typeof scale.bandwidth === 'function' ? scale.bandwidth() / 2 : 0)}
            y={orientation === 'left' ? scale(label) + (typeof scale.bandwidth === 'function' ? scale.bandwidth() / 1.5 : 0) : 5 }
            dy={dy}
            textAnchor={orientation === 'left' ? 'end' : 'middle'}
            >
            {label}
          </text>
        })}
      </g>
    )
  }
})

export default Axis

       // {orientation === 'bottom'
       //   ? <line
       //      x1={0}
       //      y1={4}
       //      x2={width - margin.left - margin.right}
       //      y2={4}
       //      stroke={'black'} />
       //    : null }

import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import _ from 'lodash'

import Axis from './axis'

const BarColumnChart = React.createClass({

  propTypes: {
    data: React.PropTypes.array,
    margin: React.PropTypes.object,
    yTitle: React.PropTypes.string,
    xTitle: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      width: 0
    }
  },

  onWindowResize: function () {
    let rect = this.refs.chartContainer.getBoundingClientRect()
    this.setState({ width: rect.width, height: rect.height })
  },

  componentDidMount: function () {
    // Capture initial width (presumably set in css)
    this.onWindowResize()
    // Debounce event.
    this.onWindowResize = _.debounce(this.onWindowResize, 200)
    window.addEventListener('resize', this.onWindowResize)
  },

  componentWillUnmount: function () {
    window.removeEventListener('resize', this.onWindowResize)
  },

  renderBgLines: function (yScale, yLabels) {
    const { width } = this.state
    const {top, right, left} = this.props.margin
    const w = width - left - right

    let rects = yLabels.map((o, i) => {
      if (i === 0) return null
      let currY = yScale(o)
      let prevY = yScale(yLabels[i - 1])
      return <rect
        key={i}
        x={0}
        y={currY}
        width={w}
        height={prevY - currY}
        className={i % 2 ? 'zebra--even' : 'zebra--odd'}
      />
    })

    return (
      <g transform={`translate(${left}, ${top})`} className='zebra'>
        {rects}
      </g>
    )

    // return
    // const { width, height } = this.state
    // const {top, right, bottom, left} = this.props.margin
    // const w = width - left - right
    // const h = height - top - bottom

    // const lineHeight = h / lines

    // let rects = []
    // for (let i = 0; i < lines; i++) {
    //   rects.push(
    //     <rect
    //       key={i}
    //       x={0}
    //       y={i * lineHeight}
    //       width={w}
    //       height={lineHeight}
    //       className={i % 2 ? 'zebra--even' : 'zebra--odd'}
    //     />
    //   )
    // }

    // return (
    //   <g transform={`translate(${left}, ${top})`} className='zebra'>
    //     {rects}
    //   </g>
    // )
  },

  render: function () {
    const { width, height } = this.state
    const { data, margin, yTitle, xTitle } = this.props
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    // short circut if we have too small an area
    if (innerWidth <= 0) return <div className='chart-container' ref='chartContainer' />

    const dataNames = data.map(a => a.name)
    const dataValues = data.map(a => a.value)

    const ordinalScale = scaleBand()
      .paddingInner(0.7)
      .paddingOuter(0.1)

    let xScale = ordinalScale.rangeRound([0, innerWidth]).domain(dataNames)
    let xLabels = dataNames
    let yScale = scaleLinear().range([innerHeight, 0]).domain([0, _.max(dataValues)])
    let yLabels = yScale.ticks(3)
    let rectWidth = xScale.bandwidth()

    return (
      <div className='chart-container' ref='chartContainer'>
        <svg className='chart' width={width} height={height} ref='svg'>
          {this.renderBgLines(yScale, yLabels)}
          <Axis
            scale={xScale}
            labels={xLabels}
            orientation={'bottom'}
            height={height}
            width={width}
            margin={margin}
            />
          <Axis
            scale={yScale}
            labels={yLabels}
            orientation='left'
            height={height}
            width={width}
            margin={margin}
            />
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            {data.map(d => {
              return <rect
                key={d.name}
                className='chart__bar'
                y={yScale(d.value)}
                x={xScale(d.name)}
                fill={'rgba(0,0,0,0.4'}
                height={innerHeight - yScale(d.value)}
                width={rectWidth}
              />
            })}
          </g>
          <text
            x={-(height / 2) + 24}
            y={4}
            dy={'1em'}
            transform={'rotate(-90)'}
            textAnchor={'middle'}
            className={'chart__axis-title'}
            >{yTitle}</text>
          <text
            x={(width - margin.left - margin.right) / 2 + margin.left}
            y={height - 14}
            textAnchor={'middle'}
            className={'chart__axis-title'}
            >{xTitle}</text>
        </svg>
      </div>
    )
  }
})

export default BarColumnChart

import React from 'react'
import mapboxgl from 'mapbox-gl'
import chroma from 'chroma-js'

import { updateHovered, updateSelected } from '../actions'

mapboxgl.accessToken = 'pk.eyJ1IjoibmJ1bWJhcmciLCJhIjoiWG1NN1BlYyJ9.nbifRhdBcN1K-mdtwwi0eQ'

export const Map = React.createClass({
  propTypes: {
    mapData: React.PropTypes.string,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number,
    dispatch: React.PropTypes.func
  },

  componentDidMount: function () {
    this.mapData = this.props.mapData
    this.mapCenter = [-86.066895, 10.821166]
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'
    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv',
      center: this.mapCenter,
      zoom: 3,
      minZoom: 2
    })

    map.on('load', () => {
      let inactiveScale = chroma.scale(['black', 'red'])
      inactiveScale = [
        // [1, inactiveScale(0).hex()],
        // [2, inactiveScale(0.17).hex()],
        // [3, inactiveScale(0.34).hex()],
        // [4, inactiveScale(0.51).hex()],
        // [5, inactiveScale(0.68).hex()],
        // [6, inactiveScale(0.85).hex()],
        // [7, inactiveScale(1).hex()]
      ]
      let hoverScale = chroma.scale(['black', 'blue'])
      hoverScale = [
        // [1, hoverScale(0).hex()],
        // [2, hoverScale(0.17).hex()],
        // [3, hoverScale(0.34).hex()],
        // [4, hoverScale(0.51).hex()],
        // [5, hoverScale(0.68).hex()],
        // [6, hoverScale(0.85).hex()],
        // [7, hoverScale(1).hex()]
      ]

      this._addData('countries', 'ne_10m_admin_0_countries-1mfz41',
                    'MAPCOLOR7', inactiveScale, ['!=', 'MAPCOLOR7', ''])
      this._addData('countries-hover', 'ne_10m_admin_0_countries-1mfz41',
                    'MAPCOLOR7', hoverScale, ['==', 'MAPCOLOR7', ''])
      this._addOutlineData('countries-active', 'ne_10m_admin_0_countries-1mfz41', ['==', 'MAPCOLOR7', ''])
      map.on('mousemove', this._mouseMove)
      map.on('click', this._mapClick)
    })
  },

  componentWillReceiveProps: function (nextProps) {

  },

  _addData: function (id, source, property, scale, filter) {
    this._map.addSource(id, {
      type: 'vector',
      url: this.mapData
    })
    this._map.addLayer({
      'id': id,
      'type': 'fill',
      'source': id,
      'source-layer': source,
      'filter': filter,
      'paint': {
        'fill-color': {
          property: property,
          stops: scale
        },
        'fill-opacity': 1,
        'fill-outline-color': 'white'
      }
    })
  },

  _addOutlineData: function (id, source, filter) {
    this._map.addSource(id, {
      type: 'vector',
      url: this.mapData
    })
    this._map.addLayer({
      'id': id,
      'type': 'line',
      'source': id,
      'source-layer': source,
      'filter': filter,
      'paint': {
        'line-color': 'rgb(255, 255, 255)',
        'line-width': 3
      }
    })
  },

  _mapClick: function (e) {
    const features = this._map.queryRenderedFeatures(e.point, { layers: ['countries', 'countries-hover'] })
    if (features.length) {
      this._selectFeature(features[0].properties['MAPCOLOR7'])
    } else {
      this._deselectFeature()
    }
  },

  _mouseMove: function (e) {
    const features = this._map.queryRenderedFeatures(e.point, { layers: ['countries', 'countries-hover'] })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0].properties['MAPCOLOR7'])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
    }
  },

  _selectFeature: function (filter) {
    this._map.setFilter('countries-active', ['==', 'MAPCOLOR7', filter])
    this.props.dispatch(updateSelected(filter))
  },

  _deselectFeature: function () {
    this._map.setFilter('countries-active', ['==', 'MAPCOLOR7', ''])
    this.props.dispatch(updateSelected(0))
  },

  _highlightFeature: function (filter) {
    this._map.setFilter('countries-hover', ['==', 'MAPCOLOR7', filter])
    this.props.dispatch(updateHovered(filter))
  },

  _unhighlightFeature: function () {
    this._map.setFilter('countries-hover', ['==', 'MAPCOLOR7', ''])
    this.props.dispatch(updateHovered(0))
  },

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

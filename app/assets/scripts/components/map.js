import React from 'react'
import mapboxgl from 'mapbox-gl'

import { mapSources, inactiveLegend, hoverLegend } from '../constants'
import { updateHovered, updateSelected } from '../actions'

mapboxgl.accessToken = 'pk.eyJ1IjoibmJ1bWJhcmciLCJhIjoiWG1NN1BlYyJ9.nbifRhdBcN1K-mdtwwi0eQ'

export const Map = React.createClass({
  propTypes: {
    mapSource: React.PropTypes.object,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number,
    dispatch: React.PropTypes.func
  },

  componentDidMount: function () {
    this.mapCenter = [-94.1629, 34.5133]
    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.mapCenter,
      zoom: 3,
      minZoom: 2
    })
    map.on('load', () => {
      Object.keys(mapSources).forEach((index) => {
        const source = mapSources[index]
        this._addData(index, source.url, source.sourceLayer, source.idProp,
                      inactiveLegend, ['==', source.idProp, ''])

    //
    //   this._addData('countries', 'ne_10m_admin_0_countries-1mfz41',
    //                 'MAPCOLOR7', inactiveScale, ['!=', 'MAPCOLOR7', ''])
    //   this._addData('countries-hover', 'ne_10m_admin_0_countries-1mfz41',
    //                 'MAPCOLOR7', hoverScale, ['==', 'MAPCOLOR7', ''])
    //   this._addOutlineData('countries-active', 'ne_10m_admin_0_countries-1mfz41', ['==', 'MAPCOLOR7', ''])
    //   map.on('mousemove', this._mouseMove)
    //   map.on('click', this._mapClick)
      })
    })
  },

  componentWillReceiveProps: function (nextProps) {
    // this._addData('countries', 'ne_10m_admin_0_countries-1mfz41',
    //               'MAPCOLOR7', inactiveScale, ['!=', 'MAPCOLOR7', ''])
    // this._addData('countries-hover', 'ne_10m_admin_0_countries-1mfz41',
    //               'MAPCOLOR7', hoverScale, ['==', 'MAPCOLOR7', ''])
    // this._addOutlineData('countries-active', 'ne_10m_admin_0_countries-1mfz41', ['==', 'MAPCOLOR7', ''])
  },

  _addData: function (id, url, layer, property, colorscale, filter) {
    console.log(id)
    console.log(url)
    console.log(layer)
    console.log(property)
    console.log(colorscale)
    console.log(filter)

    console.log(JSON.stringify({
      'id': property,
      'type': 'fill',
      'source': id,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'fill-color': {
          property: property,
          stops: colorscale
        },
        'fill-opacity': 1,
        'fill-outline-color': 'white'
      }
    }))
    this._map.addSource(id, {
      type: 'vector',
      url: url
    })
    this._map.addLayer({
      'id': property,
      'type': 'fill',
      'source': id,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'fill-color': {
          property: property,
          stops: colorscale
        },
        'fill-opacity': 1,
        'fill-outline-color': 'white'
      }
    })
  },

  // _addOutlineData: function (id, source, filter) {
  //   this._map.addSource(id, {
  //     type: 'vector',
  //     url: this.mapData
  //   })
  //   this._map.addLayer({
  //     'id': id,
  //     'type': 'line',
  //     'source': id,
  //     'source-layer': source,
  //     'filter': filter,
  //     'paint': {
  //       'line-color': 'rgb(255, 255, 255)',
  //       'line-width': 3
  //     }
  //   })
  // },

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

import React from 'react'
import mapboxgl from 'mapbox-gl'

import { mapSources, inactiveLegend, hoverLegend } from '../constants'
import { updateHovered, updateSelected } from '../actions'

mapboxgl.accessToken = 'pk.eyJ1IjoibmJ1bWJhcmciLCJhIjoiWG1NN1BlYyJ9.nbifRhdBcN1K-mdtwwi0eQ'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    mapSource: React.PropTypes.object,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number
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
      Object.keys(mapSources).forEach((id) => {
        const source = mapSources[id]
        this.activeSource = this.props.mapSource
        let visibility = 'none'
        if (this.activeSource.sourceLayer === source.sourceLayer) {
          visibility = 'visible'
        }
        this._addData(id + '-inactive', source.url, source.sourceLayer, source.idProp,
                      inactiveLegend, ['!=', source.idProp, ''], visibility)
        this._addData(id + '-hover', source.url, source.sourceLayer, source.idProp,
                      hoverLegend, ['==', source.idProp, ''], visibility)
        this._addOutlineData(id + '-active', source.url, source.sourceLayer,
                             ['==', source.idProp, ''], visibility)

        map.on('mousemove', this._mouseMove)
        map.on('click', this._mapClick)
      })
    })
  },

  componentWillReceiveProps: function (nextProps) {
    this._toggleLayer(this.props.mapSource.id, nextProps.mapSource.id)
  },

  _addData: function (id, url, layer, property, colorscale, filter, visibility) {
    this._map.addSource(id, {
      type: 'vector',
      url: url
    })
    this._map.addLayer({
      'id': id,
      'type': 'fill',
      'source': id,
      'source-layer': layer,
      'filter': filter,
      'layout': {
        'visibility': visibility
      },
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

  _addOutlineData: function (id, url, layer, filter, visibility) {
    this._map.addSource(id, {
      type: 'vector',
      url: url
    })
    this._map.addLayer({
      'id': id,
      'type': 'line',
      'source': id,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'line-color': 'rgb(255, 255, 255)',
        'line-width': 3
      }
    })
  },

  _mapClick: function (e) {
    const source = this.props.mapSource
    const features = this._map.queryRenderedFeatures(e.point, { layers: [source.id + '-inactive', source.id + '-hover'] })
    if (features.length) {
      this._selectFeature(features[0].properties[source.idProp])
    } else {
      this._deselectFeature()
    }
  },

  _mouseMove: function (e) {
    const source = this.props.mapSource
    const features = this._map.queryRenderedFeatures(e.point, { layers: [source.id + '-inactive', source.id + '-hover'] })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0].properties[source.idProp])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
    }
  },

  _selectFeature: function (filter) {
    const source = this.props.mapSource
    this._map.setFilter(source.id + '-active', ['==', source.idProp, filter])
    this.props.dispatch(updateSelected(filter))
  },

  _deselectFeature: function () {
    const source = this.props.mapSource
    this._map.setFilter(source.id + '-active', ['==', source.idProp, ''])
    this.props.dispatch(updateSelected(0))
  },

  _highlightFeature: function (filter) {
    const source = this.props.mapSource
    this._map.setFilter(source.id + '-hover', ['==', source.idProp, filter])
    this.props.dispatch(updateHovered(filter))
  },

  _unhighlightFeature: function () {
    const source = this.props.mapSource
    this._map.setFilter(source.id + '-hover', ['==', source.idProp, ''])
    this.props.dispatch(updateHovered(0))
  },

  _toggleLayer: function (prevLayer, nextLayer) {
    if (nextLayer !== prevLayer) {
      this._map.setLayoutProperty(nextLayer + '-inactive', 'visibility', 'visible')
      this._map.setLayoutProperty(nextLayer + '-hover', 'visibility', 'visible')
      this._map.setLayoutProperty(nextLayer + '-active', 'visibility', 'visible')
      this._map.setLayoutProperty(prevLayer + '-inactive', 'visibility', 'none')
      this._map.setLayoutProperty(prevLayer + '-hover', 'visibility', 'none')
      this._map.setLayoutProperty(prevLayer + '-active', 'visibility', 'none')
    }
  },

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

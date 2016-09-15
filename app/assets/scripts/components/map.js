import React from 'react'
import mapboxgl from 'mapbox-gl'

import { mapSources, inactiveLegend, hoverLegend } from '../constants'
import { updateHovered, updateSelected } from '../actions'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    hovered: React.PropTypes.number,
    selected: React.PropTypes.number
  },

  componentDidMount: function () {
    this.mapCenter = [-80, 15]

    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv',
      center: this.mapCenter,
      zoom: 5,
      minZoom: 2
    })
    map.on('load', () => {
      this.sources = {}
      Object.keys(mapSources).forEach((id) => {
        const source = mapSources[id]
        this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
        let visibility = 'none'
        if (this.activeSource.sourceLayer === source.sourceLayer) {
          visibility = 'visible'
        }
        this.sources[id] = {
          id: id,
          url: source.url,
          sourceLayer: source.sourceLayer,
          colorProperty: source.idProp,
          query: ['!=', source.idProp, ''],
          visibility: visibility
        }
        this._addSource(false, id + '-inactive', source.url, source.sourceLayer,
                       ['!=', source.idProp, ''], visibility, inactiveLegend, source.idProp)
        this._addSource(false, id + '-hover', source.url, source.sourceLayer,
                       ['==', source.idProp, ''], visibility, hoverLegend, source.idProp)
        this._addSource(true, id + '-active', source.url, source.sourceLayer,
                       ['==', source.idProp, ''], visibility)

        map.on('mousemove', this._mouseMove)
        map.on('click', this._mapClick)
      })
    })
  },

  componentWillReceiveProps: function (nextProps) {
    this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
    this._toggleSource(this.props.dataSelection.admin.getActive().key,
                       nextProps.dataSelection.admin.getActive().key)

    const prevColorProp = this.props.dataSelection.risk.getActive().key
    const nextColorProp = nextProps.dataSelection.risk.getActive().key
    if (nextColorProp !== prevColorProp) {
      this._toggleLayerProperties(prevColorProp, nextColorProp)
    }
  },

  _toggleLayerProperties: function (prevColorProp, nextColorProp) {
    const activeSource = this.props.dataSelection.admin.getActive().key
    const params = this.sources[activeSource]

    // use dummy data field name mapping for testing
    const dummyColumnMap = {earthquake: 'AAL', hurricane: 'RP_10', flood: 'RP_100'}
    nextColorProp = dummyColumnMap[nextColorProp]
    const states = ['-inactive', '-hover', '-active']
    states.forEach((layerState) => {
      this._map.removeLayer(activeSource + layerState)
    })

    this._addLayer(activeSource + '-inactive', params.sourceLayer, ['!=', params.colorProperty, ''],
                   params.visibility, nextColorProp, inactiveLegend)
    this._addLayer(activeSource + '-hover', params.sourceLayer, ['==', params.colorProperty, ''],
                   params.visibility, nextColorProp, hoverLegend)
    this._addOutlineLayer(activeSource + '-active', params.sourceLayer,
                         ['==', params.colorProperty, ''], params.visibility)
  },

  _addSource: function (outline, id, url, layer, filter, visibility, colorScale, colorProperty) {
    this._map.addSource(id, {
      type: 'vector',
      url: url
    })
    if (!outline) {
      this._addLayer(id, layer, filter, visibility, colorProperty, colorScale)
    } else {
      this._addOutlineLayer(id, layer, filter, visibility)
    }
  },

  _addLayer: function (id, layer, filter, visibility, colorProperty, colorScale) {
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
          property: colorProperty,
          stops: colorScale
        },
        'fill-opacity': 1,
        'fill-outline-color': 'white'
      }
    })
  },

  _addOutlineLayer: function (id, layer, filter, visibility) {
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
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [this.activeSource.id + '-inactive', this.activeSource.id + '-hover'] })
    if (features.length) {
      this._selectFeature(features[0].properties[this.activeSource.idProp])
    } else {
      this._deselectFeature()
    }
  },

  _mouseMove: function (e) {
    const activeSource = this.props.dataSelection.admin.getActive().key
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [activeSource + '-inactive', activeSource + '-hover'] })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0].properties[this.activeSource.idProp])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
    }
  },

  _selectFeature: function (filter) {
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, filter])
    this.props.dispatch(updateSelected(filter))
  },

  _deselectFeature: function () {
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, ''])
    this.props.dispatch(updateSelected(0))
  },

  _highlightFeature: function (filter) {
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, filter])
    this.props.dispatch(updateHovered(filter))
  },

  _unhighlightFeature: function () {
    const activeSource = this.props.dataSelection.admin.getActive().key
    this._map.setFilter(activeSource + '-hover', ['==', this.activeSource.idProp, ''])
    this.props.dispatch(updateHovered(0))
  },

  _toggleSource: function (prevSource, nextSource) {
    if (nextSource !== prevSource) {
      ['-inactive', '-hover', '-active'].forEach((source) => {
        this._map.setLayoutProperty(nextSource + source, 'visibility', 'visible')
        this._map.setLayoutProperty(prevSource + source, 'visibility', 'none')
      })
    }
  },

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

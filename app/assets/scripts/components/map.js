import React from 'react'
import mapboxgl from 'mapbox-gl'

import { mapSources, inactiveLegends, hoverLegend } from '../constants'
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

  getLegendStops: function (risk) {
    return inactiveLegends[risk]
  },

  getColorProperty: function (risk) {
    const columnMap = {earthquake: 'RP_10', hurricane: 'RP_500', flood: 'AAL'}
    return columnMap[risk]
  },

  componentDidMount: function () {
    this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
    console.log('this.activeSource', this.activeSource)
    this.mapCenter = [-80, 15]

    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/devseed/cisuqq8po004b2wvrf05z0qmv',
      center: this.mapCenter,
      zoom: 5,
      minZoom: 2
    })

    map.on('load', () => {
      let risk = this.props.dataSelection.risk.getActive().key
      Object.keys(mapSources).forEach((id) => {
        const source = mapSources[id]
        let visibility = this.activeSource.sourceLayer === source.sourceLayer ? 'visible' : 'none'

        this._map.addSource(id, {
          type: 'vector',
          url: source.url
        })

        this._addLayer(`${id}-inactive`, source.sourceLayer, id, ['!=', id, ''], visibility, this.getColorProperty(risk), this.getLegendStops(risk))
        this._addLayer(`${id}-hover`, source.sourceLayer, id, ['==', id, ''], visibility, this.getColorProperty(risk), hoverLegend)
        this._addOutlineLayer(`${id}-active`, source.sourceLayer, id, ['==', id, ''], visibility)
      })

      map.on('mousemove', this._mouseMove)
      map.on('click', this._mapClick)
    })
  },

  componentWillReceiveProps: function (nextProps) {
    const prevSourceName = this.props.dataSelection.admin.getActive().key
    const nextSourceName = nextProps.dataSelection.admin.getActive().key
    if (nextSourceName !== prevSourceName) {
      this._toggleSource(prevSourceName, nextSourceName)
    }

    const prevColorProp = this.props.dataSelection.risk.getActive().key
    const nextColorProp = nextProps.dataSelection.risk.getActive().key
    if (nextColorProp !== prevColorProp) {
      this._toggleLayerProperties(prevColorProp, nextColorProp, prevSourceName, nextSourceName)
    }

    // Done with switching. Update the active source
    this.activeSource = mapSources[nextSourceName]
  },

  _mapClick: function (e) {
    let sourceId = this.activeSource.id
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._selectFeature(features[0])
    } else {
      this._deselectFeature()
    }
  },

  _selectFeature: function (feature) {
    let propId = this.getColorProperty(this.props.dataSelection.risk.getActive().key)
    this._map.setFilter(this.activeSource.id + '-active', ['==', propId, feature.properties[propId]])
    // this.props.dispatch(updateSelected(feature))
  },

  _deselectFeature: function () {
    let propId = this.getColorProperty(this.props.dataSelection.risk.getActive().key)
    this._map.setFilter(this.activeSource.id + '-active', ['==', propId, ''])
    // this.props.dispatch(updateSelected())
  },

  _mouseMove: function (e) {
    let sourceId = this.activeSource.id
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
    }
  },

  _highlightFeature: function (feature) {
    let propId = this.getColorProperty(this.props.dataSelection.risk.getActive().key)
    this._map.setFilter(this.activeSource.id + '-hover', ['==', propId, feature.properties[propId]])
    // this.props.dispatch(updateHovered(feature))
  },

  _unhighlightFeature: function () {
    let propId = this.getColorProperty(this.props.dataSelection.risk.getActive().key)
    this._map.setFilter(this.activeSource.id + '-hover', ['==', propId, ''])
    // this.props.dispatch(updateHovered())
  },

  _toggleSource: function (prevSource, nextSource) {
    ['-inactive', '-hover', '-active'].forEach((type) => {
      this._map.setLayoutProperty(prevSource + type, 'visibility', 'none')
      this._map.setLayoutProperty(nextSource + type, 'visibility', 'visible')
    })
  },

  _toggleLayerProperties: function (prevColorProp, nextColorProp, prevSourceName, nextSourceName) {
    // Remove old layers
    ['-inactive', '-hover', '-active'].forEach((type) => {
      this._map.removeLayer(prevSourceName + type)
    })

    const nextSource = mapSources[nextSourceName]
    let id = nextSource.id

    this._addLayer(`${id}-inactive`, nextSource.sourceLayer, id, ['!=', id, ''], 'visible', this.getColorProperty(nextColorProp), this.getLegendStops(nextColorProp))
    this._addLayer(`${id}-hover`, nextSource.sourceLayer, id, ['==', id, ''], 'visible', this.getColorProperty(nextColorProp), hoverLegend)
    this._addOutlineLayer(`${id}-active`, nextSource.sourceLayer, id, ['==', id, ''], 'visible')
  },

  _addLayer: function (id, layer, source, filter, visibility, colorProperty, colorScale) {
    this._map.addLayer({
      'id': id,
      'type': 'fill',
      'source': source,
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

  _addOutlineLayer: function (id, layer, source, filter, visibility) {
    this._map.addLayer({
      'id': id,
      'type': 'line',
      'source': source,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'line-color': 'rgb(255, 255, 255)',
        'line-width': 3
      }
    })
  },

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

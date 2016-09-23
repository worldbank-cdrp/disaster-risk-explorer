import React from 'react'
import mapboxgl from 'mapbox-gl'
import { render } from 'react-dom'
import chroma from 'chroma-js'
import centerpoint from 'turf-center'
import _ from 'lodash'

import { updateSelected } from '../actions'
import MapPopup from './map-popup'

import { mapSources, mapSettings, columnMap, inactiveLegends, hoverLegend } from '../constants'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    selected: React.PropTypes.object,
    opacity: React.PropTypes.number
  },

  getLegendStops: function (risk) {
    return inactiveLegends[risk.toLowerCase()]
  },

  getColorProperty: function (risk) {
    return columnMap[risk.toLowerCase()]
  },

  _popup: null,

  //
  // Start life-cycle methods
  //

  componentDidMount: function () {
    this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      style: mapSettings.basemap.basic.url,
      center: mapSettings.centerpoint,
      zoom: mapSettings.zoom,
      minZoom: 2,
      attributionControl: {
        position: 'bottom-left'
      }
    })

    map.on('load', () => {
      const basemap = this.props.dataSelection.basemap.getActive().key
      if (basemap === 'special') this._addBasemap(basemap)
      this._loadLayers()
    })
  },

  _loadLayers: function () {
    this.activeSource = mapSources[this.props.dataSelection.admin.getActive().key]
    let risk = this.props.dataSelection.risk.getActive().key
    Object.keys(mapSources).forEach((id) => {
      const source = mapSources[id]
      let visibility = this.activeSource.sourceLayer === source.sourceLayer ? 'visible' : 'none'

      this._map.addSource(id, {
        type: 'vector',
        url: source.url
      })

      const colorScale = this.getLegendStops(risk)
      const outlineColor = chroma(colorScale[0][1]).darken(4).hex()
      this._addLayer(`${id}-inactive`, source.sourceLayer, id, ['!=', id, ''], visibility, this.getColorProperty(risk), colorScale)
      this._addOutlineLayer(`${id}-hover`, source.sourceLayer, id, ['==', id, ''], visibility, '#fff')
      this._addOutlineLayer(`${id}-active`, source.sourceLayer, id, ['==', id, ''], visibility, outlineColor)
    })

    this._adjustOpacity(this.props.opacity)

    this._map.on('mousemove', this._mouseMove)
    this._map.on('click', this._mapClick)
  },

  componentWillReceiveProps: function (nextProps) {
    const prevBasemap = this.props.dataSelection.basemap.getActive().key
    const nextBasemap = nextProps.dataSelection.basemap.getActive().key
    if (prevBasemap !== nextBasemap && nextBasemap === 'special') {
      this._loadBasemap(nextBasemap)
    } else if (prevBasemap !== nextBasemap && nextBasemap === 'basic') {
      this._removeBasemap(prevBasemap)
    }

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
    const prevId = this.props.selected ? this.props.selected[this.activeSource.idProp] : null
    const nextId = nextProps.selected ? nextProps.selected[this.activeSource.idProp] : null
    if (prevId !== nextId && nextId !== null) {
      this._selectFeature(nextProps.selected)
    } else {
      this._deselectFeature()
    }

    this._adjustOpacity(nextProps.opacity)

    // Done with switching. Update the active source
    this.activeSource = mapSources[nextSourceName]
  },

  //
  // Start helper methods
  //

  // Will be created the first time is needed.
  _showPopupThrottled: null,

  _showPopup: function (lngLat, feature) {
    let popupContent = document.createElement('div')
    render(<MapPopup
             country={feature.properties.NAME_0}
             aal={feature.properties.AAL}
           />, popupContent)

    if (this._popup === null) {
      this._popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 8
      })
    }

    this._popup
      .setLngLat([lngLat.lng, lngLat.lat])
      .setDOMContent(popupContent)
      .addTo(this._map)
  },

  _hidePopup: function () {
    this._popup !== null && this._popup.remove()
  },

  _addBasemap: function (basemapId) {
    this._map.addSource(basemapId, {
      type: 'raster',
      url: mapSettings.basemap[basemapId].url
    })
    this._map.addLayer({
      id: basemapId,
      type: 'raster',
      source: basemapId
    }, 'road-pedestrian-case')
  },

  _removeBasemap: function (basemapId) {
    this._map.removeSource(basemapId)
    this._map.removeLayer(basemapId)
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
        'fill-outline-color': 'rgb(140, 140, 160)'
      }
    })
  },

  _addOutlineLayer: function (id, layer, source, filter, visibility, outlineColor) {
    console.log(outlineColor)
    this._map.addLayer({
      'id': id,
      'type': 'line',
      'source': source,
      'source-layer': layer,
      'filter': filter,
      'paint': {
        'line-color': outlineColor,
        'line-width': 2
      }
    })
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

  _mapClick: function (e) {
    let sourceId = this.activeSource.id
    let features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._map.flyTo({
        center: centerpoint(features[0]).geometry.coordinates,
        zoom: mapSettings.zoomLevel[this.props.dataSelection.admin.getActive().key]
      })
      this.props.dispatch(updateSelected(features[0].properties))
    } else {
      this.props.dispatch(updateSelected(null))
    }
  },

  _selectFeature: function (featureProps) {
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, featureProps[this.activeSource.idProp]])
  },

  _deselectFeature: function () {
    this._map.flyTo({
      center: mapSettings.centerpoint,
      zoom: mapSettings.zoom
    })
    this._map.setFilter(this.activeSource.id + '-active', ['==', this.activeSource.idProp, ''])
  },

  _mouseMove: function (e) {
    let sourceId = this.activeSource.id
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      this._map.getCanvas().style.cursor = 'pointer'
      this._highlightFeature(features[0].properties)

      if (this._showPopupThrottled === null) {
        this._showPopupThrottled = _.throttle(this._showPopup, 30)
      }
      this._showPopupThrottled(e.lngLat, features[0])
    } else {
      this._map.getCanvas().style.cursor = ''
      this._unhighlightFeature()
      this._hidePopup()
    }
  },

  _highlightFeature: function (featureProps) {
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, featureProps[this.activeSource.idProp]])
  },

  _unhighlightFeature: function () {
    console.log(this.activeSource.id)
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, ''])
  },

  _adjustOpacity: function (opacity) {
    // Corrects Mapbox GL bug where labels float over 100% opaque features
    opacity = opacity === 100 ? 99 / 100 : opacity / 100
    const maps = ['admin0', 'admin1', 'km10']
    maps.forEach((map) => {
      this._map.setPaintProperty(map + '-inactive', 'fill-opacity', (opacity))
      this._map.setPaintProperty(map + '-inactive', 'fill-outline-color', `rgba(50, 50, 90, ${opacity})`)
    })
  },

  //
  // Start render methods
  //

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

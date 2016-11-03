import React from 'react'
import mapboxgl from 'mapbox-gl'
import { render } from 'react-dom'
import chroma from 'chroma-js'
import centerpoint from 'turf-center'
import _ from 'lodash'

import { updateSelected } from '../actions'
import MapPopup from './map-popup'

import { mapSources, mapSettings, legends, countryExtents, textLayers } from '../constants'
import { getMapId, getMapDescrip } from '../utils/map-id'
import { t, getLanguage } from '../utils/i18n'

mapboxgl.accessToken = 'pk.eyJ1Ijoid2JnLWNkcnAiLCJhIjoiY2l1Z3pxZDVwMDBxcDMzcDJjYmRpYnBicSJ9.hjlLP5TEVhqbTwzhFA1rZw'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    selected: React.PropTypes.object,
    mapType: React.PropTypes.string
  },

  _popup: null,

  //
  // Start life-cycle methods
  //

  componentDidMount: function () {
    const admin = this.props.dataSelection.admin.getActive().key
    this.activeSource = mapSources[admin]
    const map = this._map = new mapboxgl.Map({
      container: this.refs.map,
      maxBounds: mapSettings.maxBounds,
      style: mapSettings.basemap.basic.url,
      center: mapSettings.centerpoint,
      zoom: mapSettings.initialZoom[admin],
      minZoom: 2,
      dragRotate: false,
      touchZoomRotate: false,
      attributionControl: {
        position: 'bottom-left'
      }
    })

    this._addZoomControls()

    map.on('load', () => {
      const basemap = this.props.dataSelection.basemap.getActive().key
      if (basemap === 'special') this._addBasemap(basemap)
      this._loadLayers()
      this._setMapLanguage()
    })
  },

  _addZoomControls: function () {
    this._map.addControl(new mapboxgl.Navigation({position: 'bottom-right'}))
  },

  _loadLayers: function () {
    const admin = this.props.dataSelection.admin.getActive().key
    this.activeSource = mapSources[admin]
    Object.keys(mapSources).forEach((id) => {
      const source = mapSources[id]
      let visibility = this.activeSource.sourceLayer === source.sourceLayer ? 'visible' : 'none'
      if (admin === 'km10' && id === 'km10Circles') visibility = 'visible'

      this._map.addSource(id, {
        type: 'vector',
        url: source.url
      })

      const mapId = getMapId(this.props.dataSelection)
      const legendId = mapId.substr(mapId.length - 3) === 'AAL' ? mapId : mapId.slice(0, 5)
      const colorScale = legends[this.activeSource.id][legendId]
      const outlineColor = chroma(colorScale[0][1]).darken(4).hex()
      let opacity = this.props.dataSelection.opacity.getActive().key
      opacity = mapSettings.opacityLevels[opacity]
      this._addLayer(`${id}-inactive`, source.sourceLayer, id, ['has', mapId], visibility, mapId, colorScale, opacity, id)
      if (id !== 'km10Circles') {
        this._addActionLayer(`${id}-hover`, source.sourceLayer, id, ['==', mapId, ''], visibility, '#fff')
        this._addActionLayer(`${id}-active`, source.sourceLayer, id, ['==', mapId, ''], visibility, outlineColor)
      }
    })

    this._map.on('mousemove', this._mouseMove)
    this._map.on('click', this._mapClick)
  },

  componentWillReceiveProps: function (nextProps) {
    const prevSelected = this.props.selected
    const nextSelected = nextProps.selected
    const prevSourceName = this.props.dataSelection.admin.getActive().key
    const nextSourceName = nextProps.dataSelection.admin.getActive().key

    const prevBasemap = this.props.dataSelection.basemap.getActive().key
    const nextBasemap = nextProps.dataSelection.basemap.getActive().key
    if (prevBasemap !== nextBasemap && nextBasemap === 'special') {
      this._addBasemap(nextBasemap)
    } else if (prevBasemap !== nextBasemap && nextBasemap === 'basic') {
      this._removeBasemap(prevBasemap)
    }

    const prevOpacityKey = this.props.dataSelection.opacity.getActive().key
    const nextOpacityKey = nextProps.dataSelection.opacity.getActive().key
    const nextOpacity = mapSettings.opacityLevels[nextOpacityKey]
    if (nextOpacityKey !== prevOpacityKey) {
      this._adjustOpacity(nextOpacity)
    }

    let nextMapId = getMapId(nextProps.dataSelection)
    let prevMapId = getMapId(this.props.dataSelection)
    const nextMetric = nextProps.dataSelection.metric.getActive().key
    const prevMetric = this.props.dataSelection.metric.getActive().key
    const nextSuffix = (nextProps.mapType === 'relative' && nextMetric === 'loss') ? '_R' : ''
    const prevSuffix = (this.props.mapType === 'relative' && prevMetric === 'loss') ? '_R' : ''
    nextMapId += nextSuffix
    prevMapId += prevSuffix
    const nextRisk = nextProps.dataSelection.risk.getActive().key
    const prevRisk = this.props.dataSelection.risk.getActive().key
    if (nextMapId !== prevMapId) {
      this._toggleLayerProperties(prevRisk, nextRisk, prevSourceName, nextSourceName, nextOpacity, nextMapId, nextSuffix)
      this._map.setFilter(nextSourceName + '-inactive', ['has', nextMapId])
    }

    if (nextSourceName !== prevSourceName) {
      this.activeSource = mapSources[nextSourceName]
      this._toggleSource(prevSourceName, nextSourceName)
      this._toggleLayerProperties(prevRisk, nextRisk, prevSourceName, nextSourceName, nextOpacity, nextMapId, nextSuffix)
      this._map.setFilter(nextSourceName + '-inactive', ['has', nextMapId])
    }

    const prevId = prevSelected ? prevSelected[this.activeSource.idProp] : null
    const nextId = nextSelected ? nextSelected[this.activeSource.idProp] : null
    if (prevId !== nextId && nextId !== null) {
      this._selectFeature(nextProps.selected, nextSourceName)
    } else if (nextId === null && nextSourceName !== prevSourceName) {
      this._deselectFeature(prevSourceName)
    }

    // Conditional zoom level logic
    // Zoom to and select parent country when switching from admin1 to admin0
    if (nextSelected && prevSourceName === 'admin1' && nextSourceName === 'admin0') {
      const parent = countryExtents.admin1[prevSelected.id].parent
      this._map.fitBounds(countryExtents.admin0[parent].extent, {
        padding: 150
      })
      this._deselectFeature(prevSourceName)
    }
    // When switching from admin1 to admin0, simply deselect the previous source
    if (nextSelected && prevSourceName === 'admin0' && nextSourceName === 'admin1') this._deselectFeature(prevSourceName)

    // Done with switching. Update the active source
    this.activeSource = mapSources[nextSourceName]

    // Check label language
    this._setMapLanguage()
  },

  //
  // Start helper methods
  //

  _setMapLanguage: function () {
    textLayers.forEach(o => {
      this._map.setLayoutProperty(o, 'text-field', '{name_' + getLanguage() + '}')
    })
  },

  // Will be created the first time is needed.
  _showPopupThrottled: null,

  _showPopup: function (lngLat, feature) {
    let popupContent = document.createElement('div')
    const dataSelection = this.props.dataSelection
    const mapId = getMapId(dataSelection)
    const mapDescrip = getMapDescrip(dataSelection)

    let adminId = dataSelection.admin.getActive().key !== 'km10'
      ? feature.properties.id
      : feature.properties.country
    let adminName
    adminId.length === 2
      ? adminName = t(adminId)
      : adminName = `${t(adminId)}, ${t(adminId.substring(0, 2))}`

    render(<MapPopup
             adminName={adminName}
             mapDescrip={mapDescrip}
             metric={dataSelection.metric.getActive().key}
             hazard={dataSelection.risk.getActive().key}
             data={feature.properties[mapId]}
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
    }, 'beneath-label-target')
  },

  _removeBasemap: function (basemapId) {
    this._map.removeSource(basemapId)
    this._map.removeLayer(basemapId)
  },

  _addLayer: function (id, layer, source, filter, visibility, colorProperty, colorScale, opacity, mapId) {
    let type = 'fill'
    let minZoom = 0
    let maxZoom = 22
    let paintProperties = {
      'fill-color': {
        property: colorProperty,
        stops: colorScale
      },
      'fill-opacity': opacity,
      'fill-outline-color': 'rgba(50, 50, 50, 0.2)'
    }
    if (mapId === 'km10') minZoom = 8
    if (mapId === 'km10Circles') {
      type = 'circle'
      minZoom = 0
      maxZoom = 8.5
      paintProperties = {
        'circle-color': {
          property: colorProperty,
          stops: colorScale
        },
        'circle-radius': {
          'stops': [
            [1, 1],
            [8, 7]
          ]
        },
        'circle-opacity': opacity - 0.2
      }
    }
    this._map.addLayer({
      'id': id,
      'type': type,
      'source': source,
      'source-layer': layer,
      'filter': filter,
      'minzoom': minZoom,
      'maxzoom': maxZoom,
      'layout': {
        'visibility': visibility
      },
      'paint': paintProperties
    }, 'waterway-label')
  },

  _addActionLayer: function (id, layer, source, filter, visibility, outlineColor) {
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
    }, 'waterway-label')
  },

  _toggleSource: function (prevSource, nextSource) {
    if (nextSource !== prevSource) {
      ['-inactive', '-hover', '-active'].forEach((type) => {
        this._map.setLayoutProperty(nextSource + type, 'visibility', 'visible')
        this._map.setLayoutProperty(prevSource + type, 'visibility', 'none')
        if (nextSource === 'km10') {
          this._map.setLayoutProperty('km10Circles-inactive', 'visibility', 'visible')
        }
        if (prevSource === 'km10') {
          this._map.setLayoutProperty('km10Circles-inactive', 'visibility', 'none')
        }
      })
    }
  },

  _toggleLayerProperties: function (prevRisk, nextRisk, prevSourceName, nextSourceName, opacity, nextMapId, suffix) {
    const legendId = /AAL/.test(nextMapId) ? nextMapId : nextMapId.slice(0, 5) + suffix
    const colorScale = legends[this.activeSource.id][legendId]
    if (nextSourceName === 'km10') {
      this._map.setPaintProperty('km10Circles-inactive',
        'circle-color', {
          property: nextMapId,
          stops: colorScale
        })
      this._map.setFilter('km10Circles-inactive', ['all', ['has', nextMapId], ['!=', nextMapId, 0]])
    }
    const paintProperties = {
      'fill-color': {
        property: nextMapId,
        stops: colorScale
      },
      'fill-opacity': opacity
    }
    this._map.setPaintProperty(`${nextSourceName}-inactive`, 'fill-color', paintProperties['fill-color'])
    this._map.setPaintProperty(`${nextSourceName}-inactive`, 'fill-opacity', paintProperties['fill-opacity'])
    this._map.setFilter(`${nextSourceName}-inactive`, ['all', ['has', nextMapId], ['!=', nextMapId, 0]])
  },

  _mapClick: function (e) {
    if (this.props.dataSelection.admin.getActive().key !== 'km10') {
      let sourceId = this.activeSource.id
      let features = this._map.queryRenderedFeatures(e.point, {
        layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
      })
      const admin = this.props.dataSelection.admin.getActive().key
      if (features.length) {
        const feature = features[0]
        if (admin === 'admin0' || admin === 'admin1') {
          const idField = this.activeSource.idProp
          const id = feature.properties[idField]
          this._map.fitBounds(countryExtents[admin][id].extent, {
            padding: 150
          })
        } else {
          this._map.flyTo({
            center: centerpoint(feature).geometry.coordinates,
            zoom: mapSettings.selectedZoom[admin]
          })
        }
        this.props.dispatch(updateSelected(feature.properties))
      } else {
        this._deselectFeature(admin)
        this.props.dispatch(updateSelected(null))
      }
    }
  },

  _selectFeature: function (featureProps, admin) {
    this._map.setFilter(admin + '-active', ['==', this.activeSource.idProp, featureProps[this.activeSource.idProp]])
  },

  _deselectFeature: function (admin) {
    this._map.setFilter(admin + '-active', ['==', this.activeSource.idProp, ''])
  },

  _mouseMove: function (e) {
    let sourceId = this.activeSource.id
    const admin = this.props.dataSelection.admin.getActive().key
    const layer = (admin === 'km10' && this._map.getZoom() < 8.5) ? 'km10Circles-inactive' : `${sourceId}-inactive`
    const features = this._map.queryRenderedFeatures(e.point, {
      layers: [layer]
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
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, ''])
  },

  _adjustOpacity: function (opacity) {
    const maps = ['admin0', 'admin1', 'km10']
    maps.forEach((map) => {
      this._map.setPaintProperty(map + '-inactive', 'fill-opacity', (opacity))
    })
    this._map.setPaintProperty('km10Circles-inactive', 'circle-opacity', (opacity))
  },

  //
  // Start render methods
  //

  render: function () {
    return <div id='map' className='map' ref='map'/>
  }
})

export default Map

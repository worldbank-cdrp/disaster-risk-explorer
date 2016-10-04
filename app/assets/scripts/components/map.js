import React from 'react'
import mapboxgl from 'mapbox-gl'
import { render } from 'react-dom'
import chroma from 'chroma-js'
import centerpoint from 'turf-center'
import _ from 'lodash'

import { updateSelected } from '../actions'
import MapPopup from './map-popup'

import { mapSources, mapSettings, legends, countryExtents } from '../constants'
import { getMapId } from '../utils/map-id'

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c2VlZCIsImEiOiJnUi1mbkVvIn0.018aLhX0Mb0tdtaT2QNe2Q'

export const Map = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func,
    dataSelection: React.PropTypes.object,

    mapSource: React.PropTypes.object,
    selected: React.PropTypes.object
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
    Object.keys(mapSources).forEach((id) => {
      const source = mapSources[id]
      let visibility = this.activeSource.sourceLayer === source.sourceLayer ? 'visible' : 'none'

      this._map.addSource(id, {
        type: 'vector',
        url: source.url
      })

      const mapId = getMapId(this.props.dataSelection)
      const colorScale = legends[mapId.slice(0, 5)]
      const outlineColor = chroma(colorScale[0][1]).darken(4).hex()
      let opacity = this.props.dataSelection.opacity.getActive().key
      opacity = mapSettings.opacityLevels[opacity]
      this._addLayer(`${id}-inactive`, source.sourceLayer, id, ['all', ['has', mapId], ['!=', mapId, 0]], visibility, mapId, colorScale, opacity)
      this._addOutlineLayer(`${id}-hover`, source.sourceLayer, id, ['==', mapId, ''], visibility, '#fff')
      this._addOutlineLayer(`${id}-active`, source.sourceLayer, id, ['==', mapId, ''], visibility, outlineColor)
    })

    this._map.on('mousemove', this._mouseMove)
    this._map.on('click', this._mapClick)
  },

  componentWillReceiveProps: function (nextProps) {
    const prevSelected = this.props.selected
    const nextSelected = nextProps.selected

    const prevBasemap = this.props.dataSelection.basemap.getActive().key
    const nextBasemap = nextProps.dataSelection.basemap.getActive().key
    if (prevBasemap !== nextBasemap && nextBasemap === 'special') {
      this._addBasemap(nextBasemap)
    } else if (prevBasemap !== nextBasemap && nextBasemap === 'basic') {
      this._removeBasemap(prevBasemap)
    }

    const prevSourceName = this.props.dataSelection.admin.getActive().key
    const nextSourceName = nextProps.dataSelection.admin.getActive().key
    if (nextSourceName !== prevSourceName) {
      this._toggleSource(prevSourceName, nextSourceName)
    }

    const prevOpacityKey = this.props.dataSelection.opacity.getActive().key
    const nextOpacityKey = nextProps.dataSelection.opacity.getActive().key
    const nextOpacity = mapSettings.opacityLevels[nextOpacityKey]
    if (nextOpacityKey !== prevOpacityKey) {
      this._adjustOpacity(nextOpacity)
    }

    const nextMapId = getMapId(nextProps.dataSelection)
    const prevMapId = getMapId(this.props.dataSelection)

    const nextRisk = nextProps.dataSelection.risk.getActive().key
    const prevRisk = this.props.dataSelection.risk.getActive().key
    if (nextMapId !== prevMapId) {
      this._toggleLayerProperties(prevRisk, nextRisk, prevSourceName, nextSourceName, nextOpacity, nextMapId)
    }

    const prevId = prevSelected ? prevSelected[this.activeSource.idProp] : null
    const nextId = nextSelected ? nextSelected[this.activeSource.idProp] : null
    if (prevId !== nextId && nextId !== null) {
      this._selectFeature(nextProps.selected, nextSourceName)
    } else if (nextId === null) {
      this._deselectFeature(prevSourceName)
    }

    // Conditional zoom level logic
    // Zoom to and select parent country when switching from admin1 to admin0
    if (nextSelected && prevSourceName === 'admin1' && nextSourceName === 'admin0') {
      const parent = countryExtents.admin1[prevSelected.NAME_1].parent
      this._map.fitBounds(countryExtents.admin0[parent].extent, {
        padding: 150
      })
      this._deselectFeature(prevSourceName)
    }
    // When switching from admin1 to admin0, simply deselect the previous source
    if (nextSelected && prevSourceName === 'admin0' && nextSourceName === 'admin1') this._deselectFeature(prevSourceName)
    // Zoom to grid view when switching to grid cells
    if (nextSourceName === 'km10' && prevSourceName !== 'km10') {
      this._deselectFeature(prevSourceName)
      this._map.zoomTo(mapSettings.initialZoom[nextSourceName])
    }

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
    }, 'waterway-label')
  },

  _removeBasemap: function (basemapId) {
    this._map.removeSource(basemapId)
    this._map.removeLayer(basemapId)
  },

  _addLayer: function (id, layer, source, filter, visibility, colorProperty, colorScale, opacity) {
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
        'fill-opacity': opacity,
        'fill-outline-color': 'rgba(100, 100, 100, 0.1)'
      }
    })
  },

  _addOutlineLayer: function (id, layer, source, filter, visibility, outlineColor) {
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

  _toggleLayerProperties: function (prevRisk, nextRisk, prevSourceName, nextSourceName, opacity, nextMapId) {
    // Remove old layers
    const states = ['-inactive', '-hover', '-active']
    states.forEach((type) => {
      this._map.removeLayer(prevSourceName + type)
    })

    const nextSource = mapSources[nextSourceName]
    let id = nextSource.id

    const colorScale = legends[nextMapId.slice(0, 5)]
    const outlineColor = chroma(colorScale[0][1]).darken(4).hex()
    this._addLayer(`${id}-inactive`, nextSource.sourceLayer, id, ['all', ['has', nextMapId], ['!=', nextMapId, 0]], 'visible', nextMapId, colorScale, opacity)
    this._addOutlineLayer(`${id}-hover`, nextSource.sourceLayer, id, ['==', nextMapId, ''], 'visible', 'white')
    this._addOutlineLayer(`${id}-active`, nextSource.sourceLayer, id, ['==', nextMapId, ''], 'visible', outlineColor)
  },

  _mapClick: function (e) {
    let sourceId = this.activeSource.id
    let features = this._map.queryRenderedFeatures(e.point, {
      layers: [`${sourceId}-inactive`, `${sourceId}-hover`]
    })
    if (features.length) {
      const feature = features[0]
      console.log(feature.properties)
      const admin = this.props.dataSelection.admin.getActive().key
      if (admin === 'admin0' || admin === 'admin1') {
        // Temporary fix for lack of country codes in source data. In final
        // version, ID field will be the same for each admin level.
        const idField = admin === 'admin1' ? 'NAME_1' : 'NAME_0'
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
      this.props.dispatch(updateSelected(null))
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
    this._map.setFilter(this.activeSource.id + '-hover', ['==', this.activeSource.idProp, ''])
  },

  _adjustOpacity: function (opacity) {
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

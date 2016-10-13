#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var explode = require('turf-explode')
var ls = require('turf-linestring')
var buffer = require('turf-buffer')
var union = require('turf-union')

var cwd = process.cwd()
var geo = JSON.parse(fs.readFileSync(path.join(cwd, 'countries/countries.geojson')))
var selectedFeatures = geo.features.filter(feature => {
  // we only want these ten countries
  return ['PA', 'NI', 'HN', 'GT', 'SV', 'CR', 'BZ', 'JM', 'GD', 'LC'].indexOf(feature.properties.iso_a2) > -1
}).map(feature => {
  // we only need the id and name properties
  var id = feature.properties.iso_a2
  var name = feature.properties.name
  return Object.assign({}, feature, { properties: { id, name } })
})

selectedFeatures.forEach(feature => {
  fs.writeFileSync(path.join(cwd, `countries/${feature.properties.id}.geojson`), JSON.stringify(feature))
})

var selectedGeo = {
  type: 'FeatureCollection',
  features: selectedFeatures
}

fs.writeFileSync(path.join(cwd, 'countries/all.geojson'), JSON.stringify(selectedGeo))

var borders = selectedGeo.features
  .map(g => explode(g)) // turn into points
  .map(g => ls(g.features.map(feat => feat.geometry.coordinates))) // make lines of these points
  .map(g => buffer(g, 1)) // buffer the line
  .reduce((a, b) => union(a, b))

fs.writeFileSync(path.join(cwd, 'countries/borders.geojson'), JSON.stringify(borders))

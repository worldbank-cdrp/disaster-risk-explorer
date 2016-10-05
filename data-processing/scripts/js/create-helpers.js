#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var cwd = process.cwd()
var geo = JSON.parse(fs.readFileSync(path.join(cwd, 'countries/countries.geojson')))
geo.features.filter(feature => {
  // we only want these ten countries
  return ['PA', 'NI', 'HN', 'GT', 'SV', 'CR', 'BZ', 'JM', 'GD', 'SL'].indexOf(feature.properties.iso_a2) > -1
}).map(feature => {
  // we only need the id property
  var id = feature.properties.iso_a2
  return Object.assign({}, feature, { properties: { id } })
}).forEach(feature => {
  fs.writeFileSync(path.join(cwd, `countries/${feature.properties.id}.geojson`), JSON.stringify(feature))
})

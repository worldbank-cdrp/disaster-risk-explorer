#!/usr/bin/env node

var fs = require('fs')
var path = require('path')

var cwd = process.cwd()
var geo = JSON.parse(fs.readFileSync(path.join(cwd, 'countries/countries.geojson')))
var adminOne = JSON.parse(fs.readFileSync(path.join(cwd, 'countries/admin1.geojson')))

var selectedCountryFeatures = geo.features.filter(feature => {
  // we only want these ten countries
  return ['PA', 'NI', 'HN', 'GT', 'SV', 'CR', 'BZ', 'JM', 'GD', 'LC'].indexOf(feature.properties.iso_a2) > -1
}).map(feature => {
  // we only need the id and name properties
  var id = feature.properties.iso_a2
  var name = feature.properties.name
  return Object.assign({}, feature, { properties: { id, name } })
}).forEach(feature => {
  fs.writeFileSync(path.join(cwd, `countries/${feature.properties.id}.geojson`), JSON.stringify(feature))
})

var selectedCountries = {
  type: 'FeatureCollection',
  features: selectedCountryFeatures
}

fs.writeFileSync(path.join(cwd, 'countries/all.geojson'), JSON.stringify(selectedCountries))

var selectedAdminOneFeatures = adminOne.features.filter(feature => {
  // we only want provinces in these ten countries
  return ['PA', 'NI', 'HN', 'GT', 'SV', 'CR', 'BZ', 'JM', 'GD', 'LC'].indexOf(feature.properties.iso_a2) > -1
}).map(feature => {
  // we only need the id and name properties
  var id = feature.properties.code_hasc.replace('.', '-').toUpperCase()
  var name = feature.properties.name
  return Object.assign({}, feature, { properties: { id, name } })
}).forEach(feature => {
  fs.writeFileSync(path.join(cwd, `countries/${feature.properties.id}.geojson`), JSON.stringify(feature))
})

var selectedAdmins = {
  type: 'FeatureCollection',
  features: selectedAdminOneFeatures
}

fs.writeFileSync(path.join(cwd, 'countries/all-admin.geojson'), JSON.stringify(selectedAdmins))

#!/usr/bin/env node

// Needs to run on node v6+

var fs = require('fs')
var rbush = require('rbush')
var bb = require('turf-bbox')

var pointLayer = JSON.parse(fs.readFileSync('CA-equake-centroids.geojson'))
var gridLayer = JSON.parse(fs.readFileSync('Building_Stock.geojson'))

var tree = rbush()
tree.load(gridLayer.features.map(feature => {
  const [minX, minY, maxX, maxY] = bb(feature)
  return Object.assign({}, feature, { minX, minY, maxX, maxY })
}))

const geojsonOutput = {
  properties: {},
  type: 'FeatureCollection',
  features: []
}

const mergedFeatures = pointLayer.features.map(feature => {
  const [minX, minY, maxX, maxY] = bb(feature)
  const searchResults = tree.search({minX, minY, maxX, maxY})

  const match = searchResults[0]

  const mergedProperties = Object.assign({}, match.properties, feature.properties)

  return Object.assign({}, match, {properties: mergedProperties})
})

geojsonOutput.features = mergedFeatures

fs.writeFileSync('output.geojson', JSON.stringify(geojsonOutput))

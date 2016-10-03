#!/usr/bin/env node

var fs = require('fs')

console.log('Clear geojson')
var geo = JSON.parse(fs.readFileSync(process.argv[2]))

// Only save id
var newFeatures = geo.features
  .map(feature => {
    var id = feature.properties.iso_a2
    return Object.assign({}, feature, { properties: { id } })
  })

var resultGeo = {
  type: 'FeatureCollection',
  features: newFeatures
}

fs.writeFileSync(process.argv[2].replace('.geojson', '_clear.geojson'), JSON.stringify(resultGeo))

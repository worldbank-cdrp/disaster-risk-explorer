#!/usr/bin/env node

var fs = require('fs')
var fc = require('turf-featurecollection')
var union = require('turf-union')
var _ = require('lodash')

var geo = JSON.parse(fs.readFileSync(process.argv[2]))

var finalGeoFeatures = {}

geo.features.forEach(feature => {
  if (finalGeoFeatures.hasOwnProperty(feature.properties.id)) {
    var previousFeature = finalGeoFeatures[feature.properties.id]
    var mergedFeature = union(previousFeature, feature)
    // https://lodash.com/docs/4.16.4#mergeWith
    var mergedProperties = _.mergeWith({}, previousFeature.properties, feature.properties, (a, b) => {
      return isNaN(a)
      ? a
      : a + (b || 0)
    })
    finalGeoFeatures[feature.properties.id] = Object.assign({}, mergedFeature, { properties: mergedProperties })
  } else {
    finalGeoFeatures[feature.properties.id] = feature
  }
})

var finalGeo = fc(Object.keys(finalGeoFeatures).map(a => finalGeoFeatures[a]))

fs.writeFileSync(process.argv[2].replace('.geojson', '_joined.geojson'), JSON.stringify(finalGeo))

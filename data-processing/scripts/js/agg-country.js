#!/usr/bin/env node

var fs = require('fs')
var aggregate = require('geojson-polygon-aggregate')
var flatten = require('geojson-flatten')

console.log('Aggregating data from: ' + process.argv[3])
var group = JSON.parse(fs.readFileSync(process.argv[2]))
var data = JSON.parse(fs.readFileSync(process.argv[3]))

// Aggregate all numeric fields from the data
var aggregator = {}
data.features.map(feature => {
  Object.keys(feature.properties).forEach(key => {
    var match = key.match(/[A-Z]{2}_[A-Z]{2}(_\d+)?|(\d+)|AAL/)
    if (key.match('HZ')) {
      match = false
    }
    if (feature.properties[key] > 0 && !aggregator.hasOwnProperty(key) && match) {
      // only capture numeric keys, 'AAL', or things that already have this "style"
      aggregator[match[0]] = function (s, feat) {
        return (s || 0) + (Number(feat.properties[key]) || 0)
      }
    }
  })
})
console.log('Capturing keys: ' + Object.keys(aggregator).join(', '))

var result = aggregate.groups(flatten(group), data, aggregator)
fs.writeFileSync(process.argv[4], JSON.stringify(result))

#!/usr/bin/env node

var fs = require('fs')
var aggregate = require('geojson-polygon-aggregate')
var flatten = require('geojson-flatten')

console.log('Aggregating data from: ' + process.argv[3])
var group = JSON.parse(fs.readFileSync(process.argv[2]))
var data = JSON.parse(fs.readFileSync(process.argv[3]))

// Aggregate all numeric fields from the data
var allKeys = {}
var aggregator = {}
data.features.map(feature => {
  Object.keys(feature.properties).forEach(key => {
    if (!allKeys.hasOwnProperty(key)) {
      allKeys[key] = true
    }
    // only capture numeric keys, 'AAL', or things that already have this "style"
    var match = key.match(/[A-Z]{2}_[A-Z]{2}(_\d+)?|(\d+)|AAL|HS|_R$/)
    if (key.match('HZ')) {
      match = false
    }
    if (!isNaN(feature.properties[key]) && !aggregator.hasOwnProperty(key) && match) {
      aggregator[key] = function (s, feat) {
        return (s || 0) + (Number(feat.properties[key]) || 0)
      }
    }
  })
})
console.log('Capturing keys: ' + Object.keys(aggregator).join(', '))
console.log('All keys: ' + Object.keys(allKeys).join(', '))

var result = aggregate.groups(flatten(group), data, aggregator)
fs.writeFileSync(process.argv[4], JSON.stringify(result))

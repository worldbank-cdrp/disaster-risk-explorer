#!/usr/bin/env node

var fs = require('fs')
var aggregate = require('geojson-polygon-aggregate')

console.log('Aggregating data from: ' + process.argv[3])
var group = JSON.parse(fs.readFileSync(process.argv[2]))
var data = JSON.parse(fs.readFileSync(process.argv[3]))

// Aggregate all numeric fields from the data
var aggregator = {}
var prependor = (process.argv.length > 5 ? process.argv[5] : '')
data.features.map(feature => {
  Object.keys(feature.properties).forEach(key => {
    if (feature.properties[key] > 0 && !aggregator.hasOwnProperty(key)) {
      // only capture numeric key elements, 'AAL', or things that already have this "style"
      aggregator[prependor + key.match(/[A-Z]{2}_[A-Z]{2}(_\d+)?|\d+|AAL/)[0]] = function (s, feat) {
        return (s || 0) + (Number(feat.properties[key]) || 0)
      }
    }
  })
})
console.log('Capturing keys: ' + Object.keys(aggregator).join(', '))
console.log('Prepending property names with: ' + prependor)

var result = aggregate.groups(group, data, aggregator)
fs.writeFileSync(process.argv[4], JSON.stringify(result))

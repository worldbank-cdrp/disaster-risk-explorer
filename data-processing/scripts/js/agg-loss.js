#!/usr/bin/env node

var fs = require('fs')
var rbush = require('rbush')
var bb = require('turf-bbox')
var centroid = require('turf-centroid')
var prettyMs = require('pretty-ms')

var start = Date.now()
var data = JSON.parse(fs.readFileSync(process.argv[2]))
console.log('Reading data from ' + process.argv[2])
console.log('Grid layer: ' + process.argv[3])
var grid = JSON.parse(fs.readFileSync(process.argv[3]))
var prependor = process.argv[4]
var tree = rbush()
tree.load(data.features.map(feature => {
  const [minX, minY, maxX, maxY] = bb(centroid(feature))
  return Object.assign({}, feature, { minX, minY, maxX, maxY })
}))

grid.features.forEach(feature => {
  const [minX, minY, maxX, maxY] = bb(feature)
  const searchResults = tree.search({minX, minY, maxX, maxY})

  searchResults.forEach(result => {
    Object.keys(result.properties).forEach(key => {
      if (result.properties[key] && key !== 'SUM_PF_T1') {
        var match = key.match(/(\d+|AAL)/)
        feature.properties[prependor + match[1]] = result.properties[key]
      }
    })
  })
})

fs.writeFileSync(process.argv[3], JSON.stringify(grid))
console.log('Wrote to ' + process.argv[3])
console.log(`Processing took ${prettyMs(Date.now() - start)}`)

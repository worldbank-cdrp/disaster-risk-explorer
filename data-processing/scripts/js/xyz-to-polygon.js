#!/usr/bin/env node

var fs = require('fs')
var polygon = require('turf-polygon')
var fc = require('turf-featurecollection')

var xyz = fs.readFileSync(process.argv[2])
var features = xyz.toString().split('\n')

// make the assumption that the distance between the first two features (either
// horizontally or vertically) is constant throughout and the same for x/y
var distance = Math.max(
  Math.abs(features[0].split(' ')[0] - features[1].split(' ')[0]),
  Math.abs(features[0].split(' ')[1] - features[1].split(' ')[1])
) / 2

var geo = fc(xyz.toString().split('\n')
  // ensure the line is truthy and the raster value is not zero
  .filter(a => a && Number(a.split(' ')[2]))
  .map(line => {
    let center = line.split(' ').slice(0, 2).map(a => Number(a))
    let value = Number(line.split(' ')[2])
    return polygon([[
      [center[0] - distance, center[1] - distance],
      [center[0] - distance, center[1] + distance],
      [center[0] + distance, center[1] + distance],
      [center[0] + distance, center[1] - distance],
      [center[0] - distance, center[1] - distance]
    ]], {
      [process.argv[4]]: value
    })
  }))

fs.writeFileSync(process.argv[3], JSON.stringify(geo))

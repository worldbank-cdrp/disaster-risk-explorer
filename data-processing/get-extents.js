'use strict'

/*
Calculates the extent and host country for a geojson feature collection of
state polygons, for either the admin 1 or admin 0 datasets.
*/

const fs = require('fs')
const getExtent = require('turf-bbox')

const fc = JSON.parse(fs.readFileSync(process.argv[1]))
const outputExtents = process.argv[2]
const admin = 0

let extents = {}
fc.features.map((feat) => {
  let extent = getExtent(feat)
  extent = [[extent[0], extent[1]], [extent[2], extent[3]]]
  if (admin === 0) {
    extents[feat.properties.CODE] = {
      extent: extent
    }
  } else {
    extents[feat.properties.CODE] = {
      parent: feat.properties.CODE.substr(0, 2),
      extent: extent
    }
  }
})

console.log(extents)
fs.writeFile(outputExtents, JSON.stringify(extents))

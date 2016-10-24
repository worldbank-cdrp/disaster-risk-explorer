'use strict'

/*
Calculates the extent and host country for a geojson feature collection of
state polygons, for either the admin 1 or admin 0 datasets.
*/

const fs = require('fs')
const getExtent = require('turf-bbox')

const fc = JSON.parse(fs.readFileSync('../../data/recalculate-extents/saint-lucia-states.geojson'))
const outputExtents = '../../data/recalculate-extents/saint-lucia-extents.geojson'
const admin = 1

let extents = {}
fc.features.map((feat) => {
  let extent = getExtent(feat)
  extent = [[extent[0], extent[1]], [extent[2], extent[3]]]
  if (admin === 0) {
    extents[feat.properties.id] = {
      extent: extent
    }
  } else {
    extents[feat.properties.id] = {
      parent: feat.properties.id.substr(0, 2),
      extent: extent
    }
  }
})

console.log(extents)
fs.writeFile(outputExtents, JSON.stringify(extents))

// node get-extents.js ../../data/recalculate-extents/jamaica-states.geojson ../../data/recalculate-extents/jamaica-extents.geojson

'use strict'

/*
Transforms a feature collection of grid cells to a feature collection of points.
*/

const fs = require('fs')
const centerpoint = require('turf-center')

const inPath = process.argv[1]
const outPath = process.argv[2]

let gridFc = JSON.parse(fs.readFileSync(inPath))

const pointFc = {
  'type': 'FeatureCollection',
  'features': gridFc.features.map((feat) => {
    const props = feat.properties
    delete props.Id
    return {
      type: 'Feature',
      properties: props,
      geometry: centerpoint(feat).geometry
    }
  })
}

console.log(pointFc)
fs.writeFile(outPath, JSON.stringify(pointFc))

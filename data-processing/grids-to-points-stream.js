#!/usr/bin/env node\
'use strict'

/*
Transforms a feature collection of grid cells to a feature collection of points.
*/

const log = require('single-line-log').stderr
const geojsonStream = require('geojson-stream')
const through2 = require('through2')
const centerpoint = require('turf-center')
const fs = require('fs')

// inputs ----------
const inPath = './merged-grid-2.geojson'
const outPath = './grid-points-2.geojson'
// ----

const cwd = process.cwd()
const geoParse = geojsonStream.parse()
const geoStringify = geojsonStream.stringify()
const w = fs.createWriteStream(outPath)

let results = 0
const c = through2({ objectMode: true }, function (feat, enc, callback) {
  results++
  log('Processing result: ' + results)

  const props = feat.properties
  delete props.Id

  this.push({
    type: 'Feature',
    properties: props,
    geometry: centerpoint(feat).geometry
  })

  callback()
})

fs.createReadStream(inPath).pipe(geoParse).pipe(c).pipe(geoStringify).pipe(w)

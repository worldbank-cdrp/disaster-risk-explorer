#!/usr/bin/env node

var fs = require('fs')
var geojsonStream = require('geojson-stream')
var through2 = require('through2')
var intersect = require('turf-intersect')
var bbox = require('turf-bbox')
var rbush = require('rbush')
var log = require('single-line-log').stdout

var clipGeo = JSON.parse(fs.readFileSync('../countries/all.geojson'))
var tree = rbush()
tree.load(clipGeo.features.map(cg => {
  const [ minX, minY, maxX, maxY ] = bbox(cg)
  return { minX, minY, maxX, maxY }
}))

var r = fs.createReadStream('../raw/Base layer Grid/grid.geojson')
var geoParse = geojsonStream.parse()
var geoStringify = geojsonStream.stringify()
var w = fs.createWriteStream('../raw/Base layer Grid/clipped-grid.geojson')

var results = 0
var c = through2({ objectMode: true }, function (result, enc, callback) {
  results++
  log('Processing result: ' + results)
  const [ minX, minY, maxX, maxY ] = bbox(result)
  if (tree.collides({ minX, minY, maxX, maxY })) {
    var intersectsClipGeo = clipGeo.features.some(clip => {
      return intersect(result, clip)
    })
    if (intersectsClipGeo) {
      this.push(result)
    }
  }
  callback()
})

r.pipe(geoParse).pipe(c).pipe(geoStringify).pipe(w)

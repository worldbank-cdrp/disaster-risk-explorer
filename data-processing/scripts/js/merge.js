#!/usr/bin/env node

var StreamConcat = require('stream-concat')
var geojsonStream = require('geojson-stream')
var path = require('path')
var glob = require('glob')
var fs = require('fs')
var log = require('single-line-log').stderr
var through2 = require('through2')
// var inside = require('turf-inside')
// var centroid = require('turf-centroid')

var cwd = process.cwd()
var geoParse = geojsonStream.parse()
var geoStringify = geojsonStream.stringify()
var w = fs.createWriteStream(path.join(cwd, 'merged-grid.geojson'))
// var borders = JSON.parse(fs.readFileSync(path.join(cwd, 'countries/borders.geojson')))

var borderTest = new Set()
var results = 0
var c = through2({ objectMode: true }, function (result, enc, callback) {
  results++
  log('Processing result: ' + results)
  // don't pass on duplicate geometries
  if (!borderTest.has(JSON.stringify(result.geometry))) {
    borderTest.add(JSON.stringify(result.geometry))
    this.push(result)
  }
  callback()
})

glob(path.join(cwd, '/countries/*_grid_all.geojson'), function (er, files) {
  var streams = files.map(file => {
    return fs.createReadStream(file)
  })
  var streamIndex = 0
  var nextStream = function () {
    if (streamIndex === streams.length) {
      return null
    }
    return streams[streamIndex++]
  }

  var combinedStream = new StreamConcat(nextStream, { objectMode: true })

  combinedStream.pipe(geoParse).pipe(c).pipe(geoStringify).pipe(w)
})

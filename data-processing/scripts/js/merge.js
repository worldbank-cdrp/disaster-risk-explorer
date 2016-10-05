#!/usr/bin/env node

var StreamConcat = require('stream-concat')
var geojsonStream = require('geojson-stream')
var path = require('path')
var glob = require('glob')
var fs = require('fs')
var log = require('single-line-log').stderr
var through2 = require('through2')

var cwd = process.cwd()
var geoParse = geojsonStream.parse()
var geoStringify = geojsonStream.stringify()
var w = fs.createWriteStream(path.join(cwd, 'merged-grid.geojson'))

var results = 0
var c = through2({ objectMode: true }, function (result, enc, callback) {
  results++
  log('Processing result: ' + results)
  this.push(result)
  callback()
})

glob(path.join(cwd, '/countries/*_grid.geojson'), function (er, files) {
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

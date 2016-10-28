#!/usr/bin/env node

var geojsonStream = require('geojson-stream')
var fs = require('fs')
var log = require('single-line-log').stderr
var through2 = require('through2')

var r = fs.createReadStream(process.argv[2])
var geoParse = geojsonStream.parse()
var geoStringify = geojsonStream.stringify()
var w = fs.createWriteStream(process.argv[2].replace('_grid', '_grid_all'))

var results = 0
var c = through2({ objectMode: true }, function (result, enc, callback) {
  results++
  log('Processing result: ' + results)
  // calculate relative values for losses
  Object.keys(result.properties).forEach(key => {
    if (key.match('LS') && result.properties['EX_BS']) {
      result.properties[key + '_R'] = result.properties[key] / result.properties['EX_BS']
    }
  })
  this.push(result)
  callback()
})

r.pipe(geoParse).pipe(c).pipe(geoStringify).pipe(w)

#!/usr/bin/env node

var fs = require('fs')
var geojsonStream = require('geojson-stream')
var through2 = require('through2')
var intersect = require('turf-intersect')
var bbox = require('turf-bbox')
var rbush = require('rbush')
var log = require('single-line-log').stdout
var prettyMs = require('pretty-ms')

var start = Date.now()

console.log('Clip file: ' + process.argv[2])
var clipGeo = JSON.parse(fs.readFileSync(process.argv[2]))
var tree = rbush()
tree.load(clipGeo.features.map(cg => {
  const [ minX, minY, maxX, maxY ] = bbox(cg)
  return { minX, minY, maxX, maxY }
}))

console.log('Read file: ' + process.argv[3])
var r = fs.createReadStream(process.argv[3])
var geoParse = geojsonStream.parse()
var geoStringify = geojsonStream.stringify()
console.log('Write file: ' + process.argv[4])
var w = fs.createWriteStream(process.argv[4])
w.on('finish', () => {
  console.log(' in ' + prettyMs(Date.now() - start))
})

let results = 0
var c = through2({ objectMode: true }, function (result, enc, callback) {
  results++
  log('Processing result: ' + results)
  const [ minX, minY, maxX, maxY ] = bbox(result)
  if (tree.collides({ minX, minY, maxX, maxY })) {
    var intersectsClipGeo = clipGeo.features.some(clip => {
      return intersect(result, clip)
    })
    if (intersectsClipGeo) {
      let properties
      // only add codes if this parameter is given
      if (process.argv.length > 5) {
        properties = Object.assign({}, result.properties, {
          country: process.argv[5],
          code: process.argv[5] + results
        })
      } else {
        properties = result.properties
      }
      this.push(Object.assign({}, result, { properties }))
    }
  }
  callback()
})

r.pipe(geoParse).pipe(c).pipe(geoStringify).pipe(w)

'use strict'

/*
Generates an object of quantile legends given a geojson file, an array of
attributes to target, the desired number of legend stops, and an array of
gradients to use for particular categories. Quantile legends are designed to
maximize contrast by attempting to evenly distribute the range of values
contained within each breakpoint.

This version generates breakpoints based on the spread of all risk return period
values, rather than legends unique to each period.
*/

const geojsonStream = require('geojson-stream')
const fs = require('fs')
const log = require('single-line-log').stderr
const through2 = require('through2')
const Geostats = require('geostats')
const geoParse = geojsonStream.parse()

const makeLegends = (features, targets, numSteps) => {
  let legends = {}
  Object.keys(targets).forEach((target) => {
    log('Processing: ' + target)
    const cols = targets[target]
    let values = []
    cols.forEach((col) => {
      const colValues = features.map((feat, i) => {
        log(`Processing column ${col}; Cell #${i}`)
        return feat.properties[col]
      }).filter(function (value) {
        if (typeof value === 'undefined' || value === 0) {
          return false
        }
        return true
      })
      values = values.concat(colValues)
    })
    if (values.length) {
      let legend = new Geostats(values)
      legend = legend.getClassQuantile(numSteps).map((step, i) => {
        return [Math.floor(step), `eqColors[${i}]`]
      })
      legend.splice(-1, 1)
      legends[target] = legend
    }
  })
  return legends
}

// ==========================
// ----- inputs
const targets = {
  LS_EQ: [],
  LS_EQ_AAL: ['LS_EQ_AAL'],
  HZ_EQ: ['HZ_EQ_100', 'HZ_EQ_250', 'HZ_EQ_500', 'HZ_EQ_1000', 'HZ_EQ_2500'],

  LS_FL: ['LS_FL_05', 'LS_FL_10', 'LS_FL_25', 'LS_FL_50', 'LS_FL_100', 'LS_FL_250', 'LS_FL_500', 'LS_FL_1000'],
  LS_FL_AAL: ['LS_FL_AAL'],
  HZ_FL: ['HZ_FL_100', 'HZ_FL_250', 'HZ_FL_500', 'HZ_FL_1000'],

  LS_WS: ['LS_WS_25', 'LS_WS_50', 'LS_WS_100', 'LS_WS_250', 'LS_WS_500', 'LS_WS_1000'],
  LS_WS_AAL: ['LS_WS_AAL'],
  HZ_WS: ['HZ_WS_100', 'HZ_WS_250', 'HZ_WS_500', 'HZ_WS_1000'],

  EX_GD: ['EX_GD'],
  EX_BS: ['EX_BS']
}

const numSteps = 6
let features = []
let results = 0
var c = through2({ objectMode: true }, function (feat, enc, callback) {
  results++
  log('Loading feature: ' + results)
  if (results % 3 === 0) features.push(feat)
  callback()
}).on('finish', () => {
  const legends = makeLegends(features, targets, numSteps)
  console.log(legends)
})

const inPath = process.argv[1]
fs.createReadStream(inPath).pipe(geoParse).pipe(c)

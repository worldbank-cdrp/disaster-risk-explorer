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
const chroma = require('chroma-js')

const geoParse = geojsonStream.parse()

const makeLegends = (features, targets, numSteps, gradients) => {
  let legends = {}
  Object.keys(targets).forEach((target) => {
    log('Processing: ' + target)
    const cols = targets[target]
    let values = []
    cols.forEach((col) => {
      let colValues = []
      features.forEach((feat, i) => {
        log('Processing cell: ' + i)
        if (i % 3 === 0) colValues.push(feat.properties[col])
      }).filter(function (value) {
        if (typeof value === 'undefined' || value === 0) {
          return false
        }
        return true
      })
      values = values.concat(colValues)
    })
    const gradient = gradients[target]
    let legend = new Geostats(values)
    legend = legend.getClassQuantile(numSteps).map((step, i) => {
      return [step, gradient(i / (numSteps - 1)).hex()]
    })
    legend.splice(-1, 1)
    legends[target] = legend
  })
  return legends
}

// ==========================
// ----- inputs
const targets = {
  HZ_EQ: ['HZ_EQ_1000', 'HZ_EQ_100', 'HZ_EQ_2500', 'HZ_EQ_5000', 'HZ_EQ_500', 'HZ_EQ_250'],
  HZ_FL: ['HZ_FL_1000', 'HZ_FL_1000_R', 'HZ_FL_100', 'HZ_FL_100_R', 'HZ_FL_10', 'HZ_FL_10_R', 'HZ_FL_250', 'HZ_FL_250_R', 'HZ_FL_25', 'HZ_FL_25_R', 'HZ_FL_500', 'HZ_FL_500_R', 'HZ_FL_50', 'HZ_FL_50_R', 'HZ_FL_5', 'HZ_FL_5_R'],
  // HZ_WS: [],

  EX_GD: ['EX_GD'],
  EX_IN: ['EX_IN'],
  EX_BS: ['EX_BS']
}
const numSteps = 6
const gradients = {
  HZ_EQ: chroma.scale(['rgb(253, 226, 145)', 'rgb(139, 48, 28)']),
  HZ_FL: chroma.scale(['rgb(224, 239, 218)', 'rgb(60, 96, 91)']),
  // HZ_WS: chroma.scale(['rgb(224, 239, 218)', 'rgb(29, 48, 91)']),

  EX_GD: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_IN: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_BS: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)'])
}

// const geoStringify = geojsonStream.stringify()
// const w = fs.createWriteStream('../../../data/merged-grid-processed.geojson')

let features = []
let results = 0
var c = through2({ objectMode: true }, function (feat, enc, callback) {
  results++
  log('Loading result: ' + results)
  // console.log(feat)
  features.push(feat)
  callback()
}).on('finish', () => {
  const legends = makeLegends(features, targets, numSteps, gradients)
  console.log(legends)
})

const inPath = '../../../data/merged-grid-3.geojson'
fs.createReadStream(inPath).pipe(geoParse).pipe(c) // .pipe(geoStringify).pipe(w)

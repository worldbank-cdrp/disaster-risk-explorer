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

const fs = require('fs')
const Geostats = require('geostats')

const makeLegends = (data, targets, numSteps) => {
  let legends = {}
  Object.keys(targets).forEach((target) => {
    const cols = targets[target]
    let values = []
    cols.forEach((col) => {
      let colValues = input.features.map((feat) => {
        return feat.properties[col]
      }).filter(function (value) {
        if (typeof value === 'undefined' || value === 0 || value === null) {
          return false
        }
        return true
      })
      values = values.concat(colValues)
    })
    if (values.length) {
      values = values.map((v) => {
        return Math.round(v * 100000)
      })
      let legend = new Geostats(values)
      legend = legend.getClassJenks(numSteps).map((step, i) => {
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
const input = JSON.parse(fs.readFileSync(process.argv[1]))
const targets = {
  LS_EQ: ['LS_EQ_10', 'LS_EQ_50', 'LS_EQ_100', 'LS_EQ_250', 'LS_EQ_500', 'LS_EQ_1000'],
  LS_EQ_AAL: ['LS_EQ_AAL'],
  LS_EQ_HS: ['LS_EQ_HS'],
  HZ_EQ: ['HZ_EQ_100', 'HZ_EQ_500', 'HZ_EQ_1000', 'HZ_EQ_2500', 'HZ_EQ_5000'],

  LS_EQ_R: ['LS_EQ_10_R', 'LS_EQ_50_R', 'LS_EQ_100_R', 'LS_EQ_250_R', 'LS_EQ_500_R', 'LS_EQ_1000_R'],
  LS_EQ_AAL_R: ['LS_EQ_AAL_R'],
  LS_EQ_HS_R: ['LS_EQ_HS_R'],
  HZ_EQ_R: ['HZ_EQ_100_R', 'HZ_EQ_500_R', 'HZ_EQ_1000_R', 'HZ_EQ_2500_R', 'HZ_EQ_5000_R'],

  LS_FL: ['LS_FL_05', 'LS_FL_10', 'LS_FL_25', 'LS_FL_50', 'LS_FL_100', 'LS_FL_250', 'LS_FL_500', 'LS_FL_1000'],
  LS_FL_AAL: ['LS_FL_AAL'],
  LS_FL_HS: ['LS_FL_HS'],
  HZ_FL: ['HZ_FL_5', 'HZ_FL_10', 'HZ_FL_25', 'HZ_FL_50', 'HZ_FL_100', 'HZ_FL_250', 'HZ_FL_500', 'HZ_FL_1000'],

  LS_FL_R: ['LS_FL_05_R', 'LS_FL_10_R', 'LS_FL_25_R', 'LS_FL_50_R', 'LS_FL_100_R', 'LS_FL_250_R', 'LS_FL_500_R', 'LS_FL_1000_R'],
  LS_FL_AAL_R: ['LS_FL_AAL_R'],
  LS_FL_HS_R: ['LS_FL_HS_R'],
  HZ_FL_R: ['HZ_FL_5_R', 'HZ_FL_10_R', 'HZ_FL_25_R', 'HZ_FL_50_R', 'HZ_FL_100_R', 'HZ_FL_250_R', 'HZ_FL_500_R', 'HZ_FL_1000_R'],

  LS_WS: ['LS_WS_25', 'LS_WS_50', 'LS_WS_100', 'LS_WS_250', 'LS_WS_500', 'LS_WS_1000'],
  LS_WS_AAL: ['LS_WS_AAL'],
  LS_WS_HS: ['LS_WS_HS'],
  HZ_WS: ['LS_WS_25', 'LS_WS_50', 'LS_WS_100', 'LS_WS_250', 'LS_WS_500', 'LS_WS_1000'],

  LS_WS_R: ['LS_WS_25_R', 'LS_WS_50_R', 'LS_WS_100_R', 'LS_WS_250_R', 'LS_WS_500_R', 'LS_WS_1000_R'],
  LS_WS_AAL_R: ['LS_WS_AAL_R'],
  LS_WS_HS_R: ['LS_WS_HS_R'],
  HZ_WS_R: ['LS_WS_25_R', 'LS_WS_50_R', 'LS_WS_100_R', 'LS_WS_250_R', 'LS_WS_500_R', 'LS_WS_1000_R'],

  EX_GD: ['EX_GD'],
  EX_BS: ['EX_BS']
}
const numSteps = 6

const legends = makeLegends(input, targets, numSteps)
console.log(legends)

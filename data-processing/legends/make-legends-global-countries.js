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
const chroma = require('chroma-js')

const makeLegends = (data, targets, numSteps, gradients) => {
  let legends = {}
  Object.keys(targets).forEach((target) => {
    const cols = targets[target]
    let values = []
    cols.forEach((col) => {
      let colValues = input.features.map((feat) => {
        return feat.properties[col]
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
const input = JSON.parse(fs.readFileSync('../../data/countries.geojson'))
const targets = {
  LS_EQ: ['LS_EQ_10', 'LS_EQ_50', 'LS_EQ_100', 'LS_EQ_250', 'LS_EQ_500', 'LS_EQ_1000'],
  LS_EQ_AAL: ['LS_EQ_AAL'],
  HZ_EQ: ['HZ_EQ_100', 'HZ_EQ_500', 'HZ_EQ_1000', 'HZ_EQ_2500', 'HZ_EQ_5000'],

  LS_FL: ['LS_FL_05', 'LS_FL_10', 'LS_FL_10', 'LS_FL_25', 'LS_FL_50', 'LS_FL_100', 'LS_FL_250', 'LS_FL_500', 'LS_FL_1000'],
  LS_FL_AAL: ['LS_FL_AAL'],
  HZ_FL: ['HZ_FL_5', 'HZ_FL_10', 'HZ_FL_25', 'HZ_FL_50', 'HZ_FL_100', 'HZ_FL_250', 'HZ_FL_500', 'HZ_FL_1000'],

  LS_WS: ['LS_WS_25', 'LS_WS_50', 'LS_WS_100', 'LS_WS_250', 'LS_WS_500', 'LS_WS_1000'],
  LS_WS_AAL: ['LS_WS_AAL'],
  // HZ_FL: [],

  EX_GD: ['EX_GD'],
  EX_IN: ['EX_IN'],
  EX_BS: ['EX_BS']
}
const numSteps = 6
const gradients = {
  LS_EQ: chroma.scale(['rgb(253, 226, 145)', 'rgb(139, 48, 28)']),
  LS_EQ_AAL: chroma.scale(['rgb(253, 226, 145)', 'rgb(139, 48, 28)']),
  HZ_EQ: chroma.scale(['rgb(253, 226, 145)', 'rgb(139, 48, 28)']),

  LS_FL: chroma.scale(['rgb(224, 239, 218)', 'rgb(60, 96, 91)']),
  LS_FL_AAL: chroma.scale(['rgb(224, 239, 218)', 'rgb(60, 96, 91)']),
  HZ_FL: chroma.scale(['rgb(224, 239, 218)', 'rgb(60, 96, 91)']),

  LS_WS: chroma.scale(['rgb(224, 239, 218)', 'rgb(29, 48, 91)']),
  LS_WS_AAL: chroma.scale(['rgb(224, 239, 218)', 'rgb(29, 48, 91)']),
  // HZ_WS: chroma.scale(['rgb(224, 239, 218)', 'rgb(29, 48, 91)']),

  EX_GD: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_IN: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_BS: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)'])
}

const legends = makeLegends(input, targets, numSteps, gradients)
console.log(legends)

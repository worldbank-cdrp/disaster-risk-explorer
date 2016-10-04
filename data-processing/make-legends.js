'use strict'

/*
Generates an object of quantile legends given a geojson file, an array of
attributes to target, the desired number of legend stops, and an array of
gradients to use for particular categories. Quantile legends are designed to
maximize contrast by attempting to evenly distribute the range of values
contained within each breakpoint.
*/

const fs = require('fs')
const Geostats = require('geostats')
const chroma = require('chroma-js')

const makeLegends = (data, targetCols, numSteps, gradients) => {
  let legends = {}
  targetCols.forEach((col) => {
    let values = input.features.map((feat) => {
      return feat.properties[col]
    }).filter(function (value) {
      if (typeof value === 'undefined' || value === 0) {
        return false
      }
      return true
    })
    const gradient = gradients[col.slice(0, 5)]
    let legend = new Geostats(values)
    legend = legend.getClassQuantile(numSteps).map((step, i) => {
      return [step, gradient(i / (numSteps - 1)).hex()]
    })
    legend.splice(-1, 1)
    legends[col] = legend
  })
  return legends
}

// ==========================
// ----- inputs
const input = JSON.parse(fs.readFileSync('../../data/merged-grid.geojson'))
const targetCols = ['HZ_EQ_1000', 'HZ_EQ_100', 'HZ_EQ_2500', 'HZ_EQ_5000', 'HZ_EQ_500', 'HZ_EQ_250', 'EX_GD', 'EX_IN', 'EX_BS', 'HZ_FL_1000', 'HZ_FL_1000_R', 'HZ_FL_100', 'HZ_FL_100_R', 'HZ_FL_10', 'HZ_FL_10_R', 'HZ_FL_250', 'HZ_FL_250_R', 'HZ_FL_25', 'HZ_FL_25_R', 'HZ_FL_500', 'HZ_FL_500_R', 'HZ_FL_50', 'HZ_FL_50_R', 'HZ_FL_5', 'HZ_FL_5_R']
const numSteps = 6
const gradients = {
  HZ_EQ: chroma.scale(['rgb(253, 226, 145)', 'rgb(139, 48, 28)']),
  HZ_FL: chroma.scale(['rgb(224, 239, 218)', 'rgb(60, 96, 91)']),
  HZ_WS: chroma.scale(['rgb(224, 239, 218)', 'rgb(29, 48, 91)']),
  EX_GD: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_IN: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)']),
  EX_BS: chroma.scale(['rgb(200, 200, 200)', 'rgb(40, 40, 40)'])
}

const legends = makeLegends(input, targetCols, numSteps, gradients)
console.log(legends)

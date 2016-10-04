'use strict'

/*
Generates an object of quantile legends given a geojson file, an array of
attributes to target, the desired number of legend stops, and a gradient.
Quantile legends are designed to maximize contrast by attempting to evenly
distribute the range of values contained within each breakpoint.
*/

const fs = require('fs')
const Geostats = require('geostats')
const chroma = require('chroma-js')

const makeLegends = (data, targetCols, numSteps, gradient) => {
  let legends = {}
  targetCols.forEach((col) => {
    let values = input.features.map((feat) => {
      return feat.properties[col]
    }).filter((value) => {
      return typeof value !== 'undefined'
    })

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
const gradient = chroma.scale(['rgb(200, 200, 255)', 'rgb(40, 40, 80)'])

const legends = makeLegends(input, targetCols, numSteps, gradient)
console.log(legends)

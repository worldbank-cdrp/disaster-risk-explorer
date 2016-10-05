#!/usr/bin/env node

var fs = require('fs')
var buildings = JSON.parse(fs.readFileSync('buildings.json'))
var buildingsInfo = JSON.parse(fs.readFileSync('buildings-info.json'))

// this mutates the object in place
Object.keys(buildings).forEach(k => {
  if (buildingsInfo[k.slice(0, 2)]) {
    buildings[k] = Object.assign(buildings[k], buildingsInfo[k.slice(0, 2)])
  }
})

fs.writeFileSync('building-data.json', JSON.stringify(buildings))

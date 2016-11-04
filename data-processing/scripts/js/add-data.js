#!/usr/bin/env node

var fs = require('fs')

var baseData = JSON.parse(fs.readFileSync(process.argv[2]))
var dataToAdd = JSON.parse(fs.readFileSync(process.argv[3]))
var prependor = process.argv.length > 4 ? process.argv[4] : ''

dataToAdd.features.forEach(feature => {
  console.log(feature.properties.NAME_0)
  const match = baseData.features.find(f => (feature.properties.NAME_1 || feature.properties.NAME_0) === f.properties.name)
  if (match) {
    console.log('Joining data from: ' + match.properties.name)
    Object.keys(feature.properties).filter(a => !a.match(/NAME|Country|ISO|Province/)).forEach(key => {
      const gridKey = prependor + (key === 'AAL' ? key : key.match(/\d+/)[0])
      if (!match.properties.hasOwnProperty(gridKey)) {
        console.log('adding property: ' + gridKey)
        match.properties[gridKey] = feature.properties[key]
      }
    })
  }
})

fs.writeFileSync(process.argv[2], JSON.stringify(baseData))

#!/usr/bin/env node

var fs = require('fs')
var aggregate = require('geojson-polygon-aggregate')
var prettyMs = require('pretty-ms')

var start = Date.now()
var dataLayer = JSON.parse(fs.readFileSync(process.argv[2]))
console.log('Reading data from ' + process.argv[2])
console.log('Grid layer: ' + process.argv[3])
var gridLayer = JSON.parse(fs.readFileSync(process.argv[3]))

function pathArrayElementToKeyInfo (el) {
  if (el.match('.geojson')) {
    // from files we need the return period
    return (el.match(/\d+/) && el.match(/\d+/)[0]) || ''
  } else {
    // from folders we shorten the name
    switch (el) {
      case 'earthquake_hazard_probabilistic':
        return 'HZ_EQ_'
      case 'windstorm_hazard_probabilistic':
        return 'HZ_WS_'
      case 'flood_hazard_probabilistic':
        return 'HZ_FL_'
      case 'building_stock':
        return 'EX_BS'
      case 'gdp':
        return 'EX_GD'
      case 'infrastructure':
        return 'EX_IN'
      default:
        return 'Unknownkey'
    }
  }
}

function folderToTifProperty (folder) {
  switch (folder) {
    case 'earthquake_hazard_probabilistic':
    case 'windstorm_hazard_probabilistic':
    case 'flood_hazard_probabilistic':
      return 'risk'
    case 'building_stock':
      return 'assetval'
    case 'gdp':
      return 'gdp'
    case 'infrastructure':
      return 'inf'
    default:
      return 'Unknownkey'
  }
}

const propertyName = process.argv[2] // full path
  .split('/')
  .slice(2) // only take folder name and file name
  .map(a => pathArrayElementToKeyInfo(a))
  .join('')
console.log('Adding property: ' + propertyName)

const tifProperty = folderToTifProperty(process.argv[2].split('/')[2])

var aggregatedGrid = aggregate.groups(gridLayer, dataLayer, {
  [propertyName]: function (s, feature) {
    return feature.properties[tifProperty]
  },
  [propertyName + '_R']: function (s, feature) {
    return feature.properties[tifProperty]
  }
})

fs.writeFileSync(process.argv[3], JSON.stringify(aggregatedGrid))
console.log('')
console.log('Wrote to ' + process.argv[3])
console.log(`Processing took ${prettyMs(Date.now() - start)}`)

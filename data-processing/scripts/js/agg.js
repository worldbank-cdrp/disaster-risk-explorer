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
      case 'Hazard':
        return 'HZ_'
      case 'Loss':
        return 'LS_'
      case 'Exposure':
        return 'EX_'
      case 'Earthquake':
        return 'EQ_'
      case 'Windstorm':
        return 'WS_'
      case 'Flood':
        return 'FL_'
      case 'GDP':
        return 'GD'
      case 'Infrastructure':
        return 'IN'
      case 'Building Stock':
        return 'BS'
      case 'probabilistic':
        return ''
      default:
        return 'Unknownkey'
    }
  }
}

function folderToTifProperty (folder) {
  switch (folder) {
    case 'Earthquake':
    case 'Windstorm':
    case 'Flood':
      return 'risk'
    case 'GDP':
      return 'gdp'
    case 'Infrastructure':
      return 'inf'
    case 'Building Stock':
      return 'assetval'
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

const tifProperty = folderToTifProperty(process.argv[2].split('/')[3])

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

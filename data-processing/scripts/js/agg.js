#!/usr/bin/env node

var fs = require('fs')
var rbush = require('rbush')
var bb = require('turf-bbox')
var prettyMs = require('pretty-ms')

var start = Date.now()
var dataLayer = JSON.parse(fs.readFileSync(process.argv[2]))
console.log('Reading data from ' + process.argv[2])
console.log('Grid layer: ' + process.argv[3])
var gridLayer = JSON.parse(fs.readFileSync(process.argv[3]))

if (process.argv.length > 4) {
  var prependor = process.argv[4]
  console.log('Prepending properties with: ' + prependor)
} else {
  var propertyName = process.argv[2] // full path
    .split('/')
    .slice(2) // only take folder name and file name
    .map(a => pathArrayElementToKeyInfo(a))
    .join('')
  console.log('Adding property: ' + propertyName)

  var tifProperty = folderToTifProperty(process.argv[2].split('/')[3])
}

var tree = rbush()
tree.load(dataLayer.features.map(feature => {
  const [minX, minY, maxX, maxY] = bb(feature)
  return Object.assign({}, feature, { minX, minY, maxX, maxY })
}))

gridLayer.features.forEach(feature => {
  const [minX, minY, maxX, maxY] = bb(feature)
  const searchResults = tree.search({minX, minY, maxX, maxY})

  searchResults.forEach(result => {
    // separate procedures when grabbing multiple properties or just one
    if (process.argv.length > 4) {
      Object.keys(result.properties).forEach(key => {
        if (result.properties[key] && key !== 'SUM_PF_T1') {
          var match = key.match(/(\d+|AAL)/)
          feature.properties[prependor + match[1]] = result.properties[key]
        }
      })
    } else if (process.argv[2].match('_ws_rp')) {
      Object.keys(result.properties).forEach(key => {
        if (result.properties[key]) {
          // get the return period from the property, 1000 is abbreviated as 1k
          // and will parse as NaN
          var rp = Number(key.replace('Vg', ''))
          rp = isNaN(rp) ? 1000 : rp
          feature.properties['HZ_WS_' + rp] = result.properties[key]
        }
      })
    } else {
      feature.properties[propertyName] = result.properties[tifProperty]
    }
  })
})

fs.writeFileSync(process.argv[3], JSON.stringify(gridLayer))
console.log('')
console.log('Wrote to ' + process.argv[3])
console.log(`Processing took ${prettyMs(Date.now() - start)}`)

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

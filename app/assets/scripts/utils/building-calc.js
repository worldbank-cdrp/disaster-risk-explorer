import buildingData from '../../data/buildings.json'

/**
 * takes four arguments (last is optional)
 * country, conversion type, slider value (conversion %), user-input "unit cost of conversion"
 * returns object with necessary data for building calculator display
 */

export function getBuildingData (regionCode, conversion, sliderValue, ucc) {
  // get building selection from the country level
  const startBuildingSel = buildingData[regionCode.slice(0, 2)][`${conversion}Start`].split(', ')
  const endBuildingSel = buildingData[regionCode.slice(0, 2)][`${conversion}End`].split(', ')

  // from all the region keys, filter on the buildings that match our selection
  const startBuildingMatch = Object.keys(buildingData[regionCode]).filter(building => {
    return startBuildingSel.some(sb => building.match(sb))
  }).map(b => buildingData[regionCode][b])
  let endBuildingMatch = Object.keys(buildingData[regionCode]).filter(building => {
    return endBuildingSel.some(eb => building.match(eb))
  }).map(b => buildingData[regionCode][b])

  // check for later null conditions and overwrite if necessary with country level
  if (endBuildingMatch.some(a => a['Value in USD T'] === '0')) {
    endBuildingMatch = Object.keys(buildingData[regionCode.slice(0, 2)]).filter(building => {
      return endBuildingSel.some(eb => building.match(eb))
    }).map(b => buildingData[regionCode.slice(0, 2)][b])
  }

  // used in multiple calculations
  const sumBuildingValue = startBuildingMatch.reduce((a, b) => a + Number(b['Value in USD T']), 0)

  // get distribution data from the country level
  const oldCost = getBuildingCost(startBuildingMatch, buildingData[regionCode.slice(0, 2)]) // 1
  let newCost = getBuildingCost(endBuildingMatch, buildingData[regionCode.slice(0, 2)]) // 2

  const demolitionCost = oldCost * (conversion === 'retrofit' ? 0.05 : 0.10) // 3
  // accept user input value if it is provided
  if (ucc !== null) {
    // "back into" newCost based on user input ucc
    newCost = ucc - demolitionCost + (conversion === 'retrofit' ? oldCost : 0)
  } else {
    ucc = newCost + demolitionCost - (conversion === 'retrofit' ? oldCost : 0) // 4
  }

  const ratioNewToOld = ucc / oldCost // 5
  const totalBuiltCost = ratioNewToOld * sumBuildingValue / 1000 * sliderValue // 6
  const totalBuiltValue = newCost / oldCost * sumBuildingValue / 1000 * sliderValue// 6a
  const oldAAL = startBuildingMatch.reduce((a, b) => a + Number(b['AAL in USD T']), 0) / 1000 * sliderValue// 7
  const newAAL = totalBuiltValue * getAALWeight(endBuildingMatch)// 8
  const diffAAL = oldAAL - newAAL // 9

  const totalBuildingAAL = Object.keys(buildingData[regionCode]).filter(building => {
    // only want building types, not other keys
    return typeof buildingData[regionCode][building] === 'object'
  }).reduce((a, b) => a + Number(buildingData[regionCode][b]['AAL in USD T']), 0)

  // METRICS & Descriptions (everything for calculator)

  const topFiveAAL = Object.keys(buildingData[regionCode]).filter(building => {
    // only want building types, not other keys
    return typeof buildingData[regionCode][building] === 'object'
  }).map(a => buildingData[regionCode][a]).sort((a, b) => {
    // sort by relative/absolute depending upon conversion type
    if (conversion === 'retrofit') {
      return Number(b['AAL as % of Value']) - Number(a['AAL as % of Value'])
    } else {
      return Number(b['AAL in USD T']) - Number(a['AAL in USD T'])
    }
  }).slice(0, 5)

  return {
    unitCostOfConstruction: ucc,
    buildingChangeAAL: (1 - newAAL / oldAAL) || 0,
    overallChangeAAL: diffAAL / totalBuildingAAL * 1000,
    breakEven: totalBuiltCost / diffAAL || 0,
    buildingFrom: getDescription(startBuildingMatch),
    buildingTo: getDescription(endBuildingMatch),
    conversionValue: totalBuiltCost * 1000000,
    topFiveAAL
  }
}
window.getBuildingData = getBuildingData

function getBuildingCost (buildingArray, distribution) {
  return buildingArray.map(b => {
    return (Number(distribution['distributionUrban']) * Number(b['costUrban']) +
            Number(distribution['distributionRural']) * Number(b['costRural']) +
            Number(distribution['distributionMetro']) * Number(b['costMetro'])) *
            Number(b['Value in USD T'])
  }).reduce((a, b) => {
    return a + b
  }, 0) / buildingArray.reduce((a, b) => a + Number(b['Value in USD T']), 0)
}

function getAALWeight (buildingArray) {
  return buildingArray.map(b => {
    return Number(b['Value in USD T'] * Number(b['AAL as % of Value']))
  }).reduce((a, b) => {
    return a + b
  }, 0) / buildingArray.reduce((a, b) => a + Number(b['Value in USD T']), 0)
}

function getDescription (buildingArray) {
  return buildingArray[0]['Description'] + (buildingArray.length > 1 ? ' + others ' : '')
}

import buildingData from '../../data/buildings.json'

/**
 * takes four arguments (last is optional)
 * country, conversion type, slider value (conversion %), user-input "unit cost of conversion"
 * returns object with necessary data for building calculator display
 */

export function getBuildingData (regionCode, conversion, sliderValue, ucc) {
  const startBuildingSel = buildingData[regionCode][`${conversion}Start`].split(', ')
  const endBuildingSel = buildingData[regionCode][`${conversion}End`].split(', ')

  // from all the keys, filter on the buildings that match our selection
  const startBuildingMatch = Object.keys(buildingData[regionCode]).filter(building => {
    return startBuildingSel.some(sb => building.match(sb))
  }).map(b => buildingData[regionCode][b])
  const endBuildingMatch = Object.keys(buildingData[regionCode]).filter(building => {
    return endBuildingSel.some(eb => building.match(eb))
  }).map(b => buildingData[regionCode][b])

  // used in multiple calculations
  const sumBuildingValue = startBuildingMatch.reduce((a, b) => a + Number(b['Value in USD T']), 0)

  // get distribution data from the country level
  const oldCost = getBuildingCost(startBuildingMatch, buildingData[regionCode.slice(0, 2)]) // 1
  const newCost = getBuildingCost(endBuildingMatch, buildingData[regionCode.slice(0, 2)]) // 2

  const demolitionCost = oldCost * (conversion === 'retrofit' ? 0.05 : 0.10) // 3
  // accept user input value if it is provided
  ucc = ucc || newCost + demolitionCost - (conversion === 'retrofit' ? oldCost : 0) // 4

  const ratioNewToOld = ucc / oldCost // 5
  const totalBuiltCost = ratioNewToOld * sumBuildingValue / 1000 // 6
  const totalBuiltValue = newCost / oldCost * sumBuildingValue / 1000 // 6a
  const oldAAL = startBuildingMatch.reduce((a, b) => a + Number(b['AAL in USD T']), 0) / 1000 // 7
  const newAAL = totalBuiltValue * getAALWeight(endBuildingMatch) // 8
  const diffAAL = oldAAL - newAAL // 9

  const totalBuildingAAL = Object.keys(buildingData[regionCode]).filter(building => {
    // only want building types, not other keys
    return typeof buildingData[regionCode][building] === 'object'
  }).map(a => {
    return a
  }).reduce((a, b) => a + Number(buildingData[regionCode][b]['AAL in USD T']), 0)

  // METRICS & Descriptions (everything for calculator)
  return {
    unitCostOfConstruction: ucc,
    buildingChangeAAL: (1 - newAAL / oldAAL),
    overallChangeAAL: diffAAL / totalBuildingAAL * 1000,
    breakEven: totalBuiltCost / diffAAL
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

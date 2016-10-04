import buildingData from '../../data/buildings.json'
console.log(buildingData);
/**
 * takes four arguments (last is optional)
 * country, conversion type, slider value (conversion %), user-input "unit cost of conversion"
 * returns object with necessary data for building calculator display
 */

export function getBuildingData (regionCode, conversion, sliderValue, ucc) {
  // for user supplied ucc, skip the first portion
  if (ucc === undefined) {
    const startBuildingSel = buildingData[regionCode][`${conversion}Start`].split(', ')
    const endBuildingSel = buildingData[regionCode][`${conversion}End`].split(', ')

    // from all the keys, filter on the buildings that match our selection
    const startBuildingMatch = Object.keys(buildingData[regionCode]).filter(building => {
      return startBuildingSel.some(sb => building.match(sb))
    }).map(b => buildingData[regionCode][b])

    // get distribution data from the country level
    const oldCost = getBuildingCost(startBuildingMatch, buildingData[regionCode.slice(0, 2)])
    console.log(oldCost);
  }
  return {}
}
window.getBuildingData = getBuildingData

function getBuildingCost (buildingArray, distribution) {
  return buildingArray.map(b => {
    console.log(b['costUrban'], b['costRural'], b['costMetro']);
    return (Number(distribution['distributionUrban']) * Number(b['costUrban']) +
            Number(distribution['distributionRural']) * Number(b['costRural']) +
            Number(distribution['distributionMetro']) * Number(b['costMetro'])) *
            Number(b['Value in USD T'])
  }).reduce((a, b) => {
    return a + b
  }, 0) / buildingArray.reduce((a, b) => a + Number(b['Value in USD T']), 0)
}

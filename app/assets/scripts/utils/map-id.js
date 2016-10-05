// Returns the proper data column given the metric, risk, and return period selections

export function getMapId (dataSelection) {
  const riskCode = dataSelection.risk.getActive().value
  const metric = dataSelection.metric.getActive().key
  const rp = dataSelection.return.getActive().value

  let mapId = ''
  if (metric === 'risk') mapId += `HZ_${riskCode}_${rp}`
  if (metric === 'loss') mapId += `LS_${riskCode}_${rp}`
  if (metric === 'exposure') mapId = 'EX_IN'

  return mapId
}

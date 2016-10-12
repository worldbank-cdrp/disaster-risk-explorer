// Returns the proper data column given the metric, risk, and return period selections

export function getMapId (dataSelection) {
  const riskCode = dataSelection.risk.getActive().value
  const metric = dataSelection.metric.getActive().key
  const rp = dataSelection.return.getActive().value

  let mapId = ''
  if (metric === 'risk') mapId += `HZ_${riskCode}_${rp}`
  if (metric === 'loss') mapId += `LS_${riskCode}_${rp}`
  if (metric === 'exposure') mapId += 'EX_BS'

  return mapId
}

export function getMapDescrip (dataSelection) {
  let risk = dataSelection.risk.getActive().key
  risk = risk.charAt(0).toUpperCase() + risk.slice(1)
  const metric = dataSelection.metric.getActive().value
  const rp = dataSelection.return.getActive().value

  let descrip = ''
  if (metric === 'Exposure') descrip = 'Building Stock Exposure'
  else descrip = `${risk} ${metric}, ${rp}-Year Return Period`

  return descrip
}

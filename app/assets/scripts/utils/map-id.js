import { t } from '../utils/i18n'
// Returns the proper data column given the metric, risk, and return period selections

export function getMapId (dataSelection) {
  const riskCode = dataSelection.risk.getActive().value
  const metric = dataSelection.metric.getActive().key
  let rp = dataSelection.return.getActive().value

  let mapId = ''
  if (rp === 'Historic') rp = 'HS'
  if (metric === 'risk') mapId += `HZ_${riskCode}_${rp}`
  if (metric === 'loss') mapId += `LS_${riskCode}_${rp}`
  if (metric === 'exposure') mapId += 'EX_BS'

  return mapId
}

export function getMapDescrip (dataSelection) {
  let risk = dataSelection.risk.getActive().key
  risk = (risk.charAt(0).toUpperCase() + risk.slice(1)).toLowerCase()
  const metric = (dataSelection.metric.getActive().value).toLowerCase()
  const mapId = getMapId(dataSelection)

  if (mapId.substr(mapId.length - 3) === 'AAL') {
    return t(risk) + ' ' + t(metric) + ', ' + t('Average Annual Loss')
  } else if (metric === 'exposure') {
    return t('Building Stock Exposure')
  } else return `${t(risk)} - ${t(metric)}`
}

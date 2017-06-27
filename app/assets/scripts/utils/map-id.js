import { t } from '../utils/i18n'
// Returns the proper data column given the metric, risk, and return period selections

export function getMapId (dataSelection, mapType) {
  const riskCode = dataSelection.risk.getActive().value
  const metric = dataSelection.metric.getActive().key
  let rp = dataSelection.return.getActive().value

  let mapId = ''
  if (rp === 'Historic') rp = 'HS'
  if (metric === 'risk') mapId += `HZ_${riskCode}_${rp}`
  if (metric === 'loss') mapId += `LS_${riskCode}_${rp}`
  if (mapType === 'relative' && metric === 'loss') mapId += '_R'
  if (metric === 'exposure') mapId += 'EX_BS'

  return mapId
}

export function getMapDescrip (dataSelection) {
  let risk = dataSelection.risk.getActive().key
  risk = (risk.charAt(0).toUpperCase() + risk.slice(1)).toLowerCase()
  const rp = dataSelection.return.getActive().value
  const metric = (dataSelection.metric.getActive().value).toLowerCase()

  if (metric === 'exposure') {
    return t('Building Stock Exposure')
  } else if (rp === 'AAL') {
    return t(risk) + ' ' + t(metric) + ', ' + t('Average Annual Loss')
  } else if (rp === 'Historic') {
    return t(risk) + ' ' + t(metric) + ', ' + t('Historic')
  } else return `${t(risk)} - ${t(metric)}`
}

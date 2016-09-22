'use strict'
import { stringify } from 'qs'

const paramFactory = function (options, active = null) {
  let param = {}

  param.getOptions = () => options

  param.getDefault = () => param.getOptions()[0]

  param.getActive = () => {
    let val = param.getOptions().find(o => o.key === active)
    return val || param.getDefault()
  }

  param.isActive = (key) => {
    let val = param.getActive()
    return val.key === key
  }

  param.setActive = (key) => {
    let val = param.getOptions().find(o => o.key === key)
    active = val ? key : param.getDefault().key
  }

  return param
}

// Export factory for testing.
export function DataSelectionFactory (availableParams) {
  const paramsKeys = Object.keys(availableParams)

  return function (query) {
    let box = {}
    // Clean flag removes the default options from the returned object.
    // Cleaner for the query string.
    box.getSelection = (clean) => {
      const keys = paramsKeys

      let res = {}
      keys.forEach(k => {
        if (!clean || box[k].getActive().key !== box[k].getDefault().key) {
          res[k] = box[k].getActive().key
        }
      })
      return res
    }

    box.getQS = (current = {}) => {
      let sel = Object.assign({}, current, box.getSelection(true))
      return stringify(sel)
    }

    // Construct
    let k
    for (k in availableParams) {
      box[k] = paramFactory(availableParams[k], query[k])
    }

    return box
  }
}

// Export version ready with the actual available parameters

let availableParams = {
  risk: [
    {key: 'earthquake', value: 'Earthquake'},
    {key: 'hurricane', value: 'Hurricane'}
  ],
  display: [
    {key: 'exposure', value: 'Exposure'},
    {key: 'loss', value: 'Loss'},
    {key: 'risk', value: 'Risk'}
  ],
  admin: [
    {key: 'admin0', value: 'Admin Level 0'},
    {key: 'admin1', value: 'Admin Level 1'},
    {key: 'km10', value: '0km Grids'}
  ],
  basemap: [
    {key: 'basic', value: 'Basic'},
    {key: 'special', value: 'Special'}
  ]
}

export default DataSelectionFactory(availableParams)

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
    // Clean flag removes the default options from the returned object.
    // Cleaner for the query string.
    this.getSelection = (clean) => {
      const keys = paramsKeys

      let res = {}
      keys.forEach(k => {
        if (!clean || this[k].getActive().key !== this[k].getDefault().key) {
          res[k] = this[k].getActive().key
        }
      })
      return res
    }

    this.getQS = (current = {}) => {
      let sel = Object.assign({}, current, this.getSelection(true))
      return stringify(sel)
    }

    // Construct
    let k
    for (k in availableParams) {
      this[k] = paramFactory(availableParams[k], query[k])
    }
  }
}

// Export version ready with the actual available parameters

let availableParams = {
  risk: [
    {key: 'earthquake', value: 'Earthquake'},
    {key: 'hurricane', value: 'Hurricane'},
    {key: 'flood', value: 'Flood'}
  ],
  year: [
    {key: '2000', value: '2000'},
    {key: '2001', value: '2001'}
  ],
  building: [
    {key: 'retrofitted', value: 'Retrofitted'},
    {key: 'opt2', value: 'Normal'}
  ],
  admin: [
    {key: 'country', value: 'Country'},
    {key: 'region', value: 'Region'}
  ],
  basemap: [
    {key: 'basic', value: 'Basic'},
    {key: 'special', value: 'Special'}
  ]
}

export default DataSelectionFactory(availableParams)

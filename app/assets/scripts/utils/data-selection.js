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

let availableParams = {
  metric: [
    {key: 'loss', value: 'Loss'},
    {key: 'risk', value: 'Hazard'},
    {key: 'exposure', value: 'Exposure'}
  ],
  risk: [
    {key: 'windstorm', value: 'WS'},
    {key: 'earthquake', value: 'EQ'},
    {key: 'flood', value: 'FL'}
  ],
  return: [
    {key: 'AAL', value: 'AAL'},
    {key: '5 Years', value: '05'},
    {key: '10 Years', value: '10'},
    {key: '25 Years', value: '25'},
    {key: '50 Years', value: '50'},
    {key: '100 Years', value: '100'},
    {key: '250 Years', value: '250'},
    {key: '500 Years', value: '500'},
    {key: '1000 Years', value: '1000'},
    {key: '2500 Years', value: '2500'}
  ],
  admin: [
    {key: 'admin0', value: 'Admin Level 0'},
    {key: 'admin1', value: 'Admin Level 1'},
    {key: 'km10', value: '10km Grids'}
  ],
  opacity: [
    {key: 'full', value: 'Full'},
    {key: 'medium', value: 'Medium'},
    {key: 'low', value: 'Low'}
  ],
  basemap: [
    {key: 'basic', value: 'Basic'},
    {key: 'special', value: 'Satellite'}
  ]
}

export default DataSelectionFactory(availableParams)

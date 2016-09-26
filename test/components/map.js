import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import proxyquire from 'proxyquire'
import mockboxGL from 'mapbox-gl-js-mock'
import DataSelection from '../../app/assets/scripts/utils/data-selection'

const { Map } = proxyquire.noCallThru().load('../../app/assets/scripts/components/map', {
  'mapbox-gl': mockboxGL
})

test('map test', t => {
  const dataSelection = DataSelection({})
  const component = shallow(<Map dataSelection={dataSelection} />)

  t.truthy(component.hasClass('map'))

  // mock mount
  let instance = component.instance()
  instance._adjustOpacity = () => {}
  t.notThrows(() => instance.componentDidMount())
})

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import proxyquire from 'proxyquire'
import mockboxGL from 'mapbox-gl-js-mock'

const { Map } = proxyquire.noCallThru().load('../../app/assets/scripts/components/map', {
  'mapbox-gl': mockboxGL
})

test('map test', t => {
  const component = shallow(<Map />)

  t.truthy(component.hasClass('map'))

  // mock mount
  const instance = component.instance()
  t.notThrows(() => instance.componentDidMount())
})

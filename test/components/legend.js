import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Legend from '../../app/assets/scripts/components/legend'

test('legend test', t => {
  const component = shallow(<Legend />)

  t.truthy(component.hasClass('legend'))
})

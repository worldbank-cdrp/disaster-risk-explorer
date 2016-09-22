import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Header from '../../app/assets/scripts/components/header'

test('header test', t => {
  const component = shallow(<Header />)

  t.truthy(component.hasClass('header'))
})

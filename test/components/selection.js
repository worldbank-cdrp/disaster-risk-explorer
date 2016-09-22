import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Selection from '../../app/assets/scripts/components/selection-panel'

test('selection test', t => {
  const component = shallow(<Selection queryParams={{}} />)

  t.truthy(component.hasClass('selection'))
})

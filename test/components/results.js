import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'

import Results from '../../app/assets/scripts/components/results-panel'

test('results test', t => {
  const component = shallow(<Results data={null}/>)

  t.truthy(component.hasClass('results'))
})

import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import DataSelection from '../../app/assets/scripts/utils/data-selection'

import Legend from '../../app/assets/scripts/components/legend'

test('legend test', t => {
  const dataSelection = DataSelection({})
  const component = shallow(<Legend dataSelection={dataSelection} />)

  t.truthy(component.hasClass('legend'))
})

import test from 'ava'
import { DataSelectionFactory } from '../../app/assets/scripts/utils/data-selection'

const DataSelection = DataSelectionFactory({
  risk: [
    {key: 'earthquake', value: 'Earthquake'},
    {key: 'hurricane', value: 'Hurricane'},
    {key: 'flood', value: 'Flood'}
  ],
  building: [
    {key: 'retrofitted', value: 'Retrofitted'},
    {key: 'opt2', value: 'Normal'}
  ]
})

test('return default option for risk when not in query', function (t) {
  let mockQuery = {}
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.risk.getActive(), {key: 'earthquake', value: 'Earthquake'})
})

test('return default option for risk is invalid', function (t) {
  let mockQuery = { risk: 'nothing' }
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.risk.getActive(), {key: 'earthquake', value: 'Earthquake'})
})

test('return correct option for valid risk', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.risk.getActive(), {key: 'flood', value: 'Flood'})
})

test('return correct boolean for active option', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.true(selection.risk.isActive('flood'))
  t.false(selection.risk.isActive('nothing'))
  t.false(selection.risk.isActive('earthquake'))
})

test('set the correct option as active', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.true(selection.risk.isActive('flood'))
  t.false(selection.risk.isActive('nothing'))
  selection.risk.setActive('hurricane')
  t.true(selection.risk.isActive('hurricane'))
})

test('set the default option as active when invalid provided', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.true(selection.risk.isActive('flood'))
  selection.risk.setActive('invalid')
  t.true(selection.risk.isActive('earthquake'))
})

test('get the default option', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.risk.getActive(), {key: 'flood', value: 'Flood'})
  t.deepEqual(selection.risk.getDefault(), {key: 'earthquake', value: 'Earthquake'})
})

test('get the correct options', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.getSelection(), {
    risk: 'flood',
    building: 'retrofitted'
  })

  selection.risk.setActive('hurricane')
  t.deepEqual(selection.getSelection(), {
    risk: 'hurricane',
    building: 'retrofitted'
  })
  selection.risk.setActive('invalid')
  t.deepEqual(selection.getSelection(), {
    risk: 'earthquake',
    building: 'retrofitted'
  })
})

test('get the correct options with clean flag', function (t) {
  let mockQuery = { risk: 'flood' }
  let selection = DataSelection(mockQuery)

  t.deepEqual(selection.getSelection(true), {
    risk: 'flood'
  })

  selection.risk.setActive('hurricane')
  t.deepEqual(selection.getSelection(true), {
    risk: 'hurricane'
  })
  selection.risk.setActive('invalid')
  t.deepEqual(selection.getSelection(true), {})
})

test('get the correct query string', function (t) {
  let mockQuery = {}
  let selection = DataSelection(mockQuery)

  t.is(selection.getQS(), '')

  selection.risk.setActive('flood')
  t.is(selection.getQS(), 'risk=flood')

  t.is(selection.getQS({risk: 'earthquake', another: 'key'}), 'risk=flood&another=key')
})

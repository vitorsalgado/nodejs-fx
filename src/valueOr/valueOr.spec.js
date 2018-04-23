'use strict'

const valueOr = require('./')

describe('ValueOr', () => {
  it('should validate provided value and return a default if value is null or undefined', () => {
    expect(valueOr('test', 'fallback')).toEqual('test')
    expect(valueOr(null, 'fallback')).toEqual('fallback')
    expect(valueOr(undefined, 'oi')).toEqual('oi')
  })
})

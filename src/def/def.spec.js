'use strict'

const def = require('./')

describe('Def', () => {
  it('should check if value is not null or undefined', () => {
    expect(def('test')).toBeTruthy()
    expect(def(null)).toBeFalsy()
    expect(def(undefined)).toBeFalsy()
  })
})

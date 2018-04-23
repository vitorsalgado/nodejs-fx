'use strict'

const not = require('./')

describe('Not', () => {
  it('should check if provided function evaluates to false with source', () => {
    const fn = x => x === 3

    expect(not(fn)(3)).toBeFalsy()
  })
})

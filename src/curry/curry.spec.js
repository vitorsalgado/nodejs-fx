'use strict'

const curry = require('./')

describe('Curry', () => {
  it('should reduce a function of multiple arguments into a function with one argument', () => {
    const add = (a, b) => a + b
    const add10 = curry(add)(10)

    expect(add10(2)).toEqual(12)
  })
})

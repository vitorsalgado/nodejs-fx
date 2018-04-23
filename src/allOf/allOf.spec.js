'use strict'

const allOf = require('./')

describe('AllOf', () => {
  it('should validate if all functions evaluates to TRUE', () => {
    const isTwo = x => x === 2
    const isThree = x => x === 3

    const res = allOf(isTwo, isThree)(2)

    expect(res).toBeFalsy()
  })

  it('should accept multiple arguments', () => {
    const f1 = (a, b) => a === 1 && typeof b === 'number'
    const f2 = (a, b) => a === 1 && typeof b === 'number'

    const res = allOf(f1, f2)(1, 2)

    expect(res).toBeTruthy()
  })
})

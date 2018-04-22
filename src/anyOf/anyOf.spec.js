'use strict'

const anyOf = require('./')

describe('AnyOf', () => {
  it('should validate if any function evaluates to TRUE with the provided context', () => {
    const is401 = err => err.status === 401
    const is404 = err => err.status === 404

    const err = { status: 401 }

    const res = anyOf(is404, is401)(err)

    expect(res).toBeTruthy()
  })

  it('should accept multiple arguments', () => {
    const f1 = (a, b) => a === 1 && b === 2
    const f2 = (a, b) => a === 3 && b === 4

    const res = anyOf(f1, f2)(1, 2)

    expect(res).toBeTruthy()
  })
})

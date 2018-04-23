'use strict'

const compose = require('./')

describe('Compose', () => {
  it('should compose all functions from right to left', () => {
    const f1 = x => `${x}:1`
    const f2 = x => `${x}:2`
    const f3 = x => `${x}:3`

    const result = compose(f1, f2, f3)('compose')

    expect(result).toEqual('compose:3:2:1')
  })

  it('should accept the rightmost function witth multiple arguments', () => {
    const sum = (x, y) => x + y
    const addTwo = x => x + 2
    const addFive = x => x + 5

    const x = compose(addTwo, addFive, sum)(4, 2)

    expect(x).toEqual(13)
  })
})

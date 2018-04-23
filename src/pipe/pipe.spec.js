'use strict'

const pipe = require('./')

describe('Pipe', () => {
  it('should compose all functions from left to right', () => {
    const f1 = x => `${x}:1`
    const f2 = x => `${x}:2`
    const f3 = x => `${x}:3`

    const result = pipe(f1, f2, f3)('compose')

    expect(result).toEqual('compose:1:2:3')
  })

  it('should accept the leftmost function witth multiple arguments', () => {
    const sum = (x, y) => x + y
    const addTwo = x => x + 2
    const addFive = x => x + 5

    const x = pipe(sum, addTwo, addFive)(4, 2)

    expect(x).toEqual(13)
  })
})

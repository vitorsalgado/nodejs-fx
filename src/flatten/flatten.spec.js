'use strict'

const flatten = require('./')

describe('Flatten', () => {
  it('should flatten an fuzzy array with sub-arrays', () => {
    const arr = [1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const result = flatten(arr)

    expect(result).toEqual(expected)
  })
})

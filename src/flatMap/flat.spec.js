'use strict'

const flatMap = require('./')

describe('FlatMap', () => {
  it('should flatten array items mapping it with provided function', () => {
    const arr = [
      { x: '2018', items: [{ a: '1', b: 1 }, { a: '2', b: 2 }] },
      { x: '2018', items: [{ a: '3', b: 3 }, { a: '4', b: 4 }] },
      { x: '2018', items: [{ a: '5', b: 5 }, { a: '6', b: 6 }] }
    ]

    const result = flatMap(x => x.items)(arr).filter(x => x.a === '1')

    expect(result).toEqual([{ a: '1', b: 1 }])
  })
})

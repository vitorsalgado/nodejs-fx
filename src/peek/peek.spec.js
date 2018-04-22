'use strict'

const peek = require('./')

describe('Peek', () => {
  it('should run the provided function on source and return source unchanged', () => {
    const fn = jest.fn()
    const source = { name: 'nodejs-fx' }

    const result = peek(fn)(source)

    expect(result).toEqual(source)
    expect(fn).toHaveBeenCalled()
  })
})

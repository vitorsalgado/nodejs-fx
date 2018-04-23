'use strict'

const maybe = require('./')

describe('Maybe', () => {
  it('should wrap a provided value', () => {
    const m = maybe(undefined)

    expect(m).toBeDefined()
    expect(m.value()).toBeUndefined()
    expect(m.isPresent()).toBeFalsy()
  })

  it('should allow to map source', () => {
    const m = maybe('test').map(x => x + ' working')

    expect(m).toBeDefined()
    expect(m.isPresent()).toBeTruthy()
    expect(m.value()).toEqual('test working')
  })

  it('should return fallback when value is not present', () => {
    const m = maybe(undefined)

    expect(m.valueOrDefault('fallback')).toEqual('fallback')
  })
})

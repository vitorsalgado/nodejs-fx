'use strict'

const check = require('./')

describe('Check', () => {
  it('should take a value and execute the function if predicate passes', () => {
    const on = jest.fn()
    const otherwise = jest.fn()

    check('test')
      .on(x => x === 'test', on)
      .otherwise(otherwise)

    expect(on).toHaveBeenCalled()
    expect(otherwise).not.toHaveBeenCalled()
  })

  it('should not break if first predicate evaluates to true in a chain of multiple predicates', () => {
    const on = jest.fn()
    const otherwise = jest.fn()

    check('test')
      .on(x => x === 'test', on)
      .on(x => x === 'non-test', on)
      .on(x => x === 'invalid', on)
      .otherwise(otherwise)

    expect(on).toHaveBeenCalled()
    expect(otherwise).not.toHaveBeenCalled()
  })

  it('should execute the following "on" if the previous ones fails', () => {
    const on1 = jest.fn()
    const on2 = jest.fn()
    const on3 = jest.fn()
    const otherwise = jest.fn()

    check('test2')
      .on(x => x === 'test', on1)
      .on(x => x === 'test1', on2)
      .on(x => x === 'test2', on3)
      .otherwise(otherwise)

    expect(on1).not.toHaveBeenCalled()
    expect(on2).not.toHaveBeenCalled()
    expect(on3).toHaveBeenCalled()
    expect(otherwise).not.toHaveBeenCalled()
  })

  it('should execute the "otherwise" if no predicate passes', () => {
    const on1 = jest.fn()
    const on2 = jest.fn()
    const on3 = jest.fn()
    const otherwise = jest.fn()

    check('test4')
      .on(x => x === 'test1', on1)
      .on(x => x === 'test2', on2)
      .on(x => x === 'test3', on3)
      .otherwise(otherwise)

    expect(on1).not.toHaveBeenCalled()
    expect(on2).not.toHaveBeenCalled()
    expect(on3).not.toHaveBeenCalled()
    expect(otherwise).toHaveBeenCalled()
  })

  it('should perform a map after a predicate when it does not pass', () => {
    const res =
      check(5)
        .on(x => x === 4, () => 1)
        .map(x => x + 5)
        .map(x => x + 10)
        .fold()

    expect(res).toEqual(20)
  })

  it('should allow a chain with mappings followed by other checks and mappings in an unordered way', () => {
    const res =
      check(5)
        .on(x => x === 4, () => 1)
        .map(x => x + 5)
        .on(x => x === 10, () => 30)
        .map(x => x + 10)
        .fold()

    expect(res).toEqual(30)
  })
})

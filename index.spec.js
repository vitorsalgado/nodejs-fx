'use strict'

const NodeFX = require('./')

describe('Node.js FX', () => {
  it('should correctly initialize of library functions', () => {
    isFunction(
      NodeFX.allOf,
      NodeFX.anyOf,
      NodeFX.check,
      NodeFX.compose,
      NodeFX.curry,
      NodeFX.def,
      NodeFX.flatten,
      NodeFX.maybe,
      NodeFX.not,
      NodeFX.peek,
      NodeFX.pipe,
      NodeFX.valueOr
    )
  })

  const isFunction = (...fns) => fns.forEach(fn => expect(fn).toBeInstanceOf(Function))
})

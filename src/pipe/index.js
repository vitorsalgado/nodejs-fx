'use strict'

/**
 * Performs left-to-right function composition.
 * The leftmost function may accept multiple arguments.
 * The remaining ones must accept only one.
 *
 * @param {...Function} fns - the functions to be composed
 * @return {Function}
 *
 * @example
 *  const x = pipe(sum, addTwo, addFive)(4, 2)
 *  expect(x).toEqual(13)
 */
module.exports = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))

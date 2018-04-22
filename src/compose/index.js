'use strict'

/**
 * Performs right-to-left function composition.
 * The rightmost function may accept multiple arguments.
 * The remaining ones must accept only one.
 *
 * @param {...Function} fns - the functions to be composed
 * @return {Function}
 *
 * @example
 *  const x = compose(addTwo, addFive, sum)(4, 2)
 *  expect(x).toEqual(13)
 */
module.exports = (...fns) =>
  fns.reduceRight((f, g) => (...args) => g(f(...args)))

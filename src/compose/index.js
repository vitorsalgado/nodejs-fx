'use strict'

/**
 * Performs right-to-left function composition.
 * The rightmost function may accept multiple arguments.
 * The remaining ones must accept only one.
 *
 * @param {...function} fns - the functions to be composed
 * @return {function}
 *
 * @example
 *
 *  const x = compose(addTwo, addFive, sum)(4, 2)
 *  // 13
 *
 */
module.exports = (...fns) =>
  fns.reduceRight((f, g) => (...args) => g(f(...args)))

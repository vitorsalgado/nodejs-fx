'use strict'

/**
 * Performs left-to-right function composition.
 * The leftmost function may accept multiple arguments.
 * The remaining ones must accept only one.
 *
 * @param {...function} fns - the functions to be composed
 * @return {function}
 * @example
 *
 *  const x = pipe(sum, addTwo, addFive)(4, 2)
 *  // 13
 *
 */
module.exports = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

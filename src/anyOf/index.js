'use strict'

/**
 * Check if any predicate function matches with provided contexts
 * @param {...function: boolean} fns - predicate functions to check if any evaluates to true
 * @returns {function(...[*]): boolean}
 * @example
 *
 *  const is401 = err => err.status === 401
 *  const is404 = err => err.status === 404
 *  const err = { status: 401 }
 *
 *  const res = any(is404, is401)(err) // true
 *
 */
module.exports = (...fns) => (...args) => fns.some(f => f(...args))

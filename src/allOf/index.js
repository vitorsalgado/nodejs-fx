'use strict'

/**
 * Check if all functions evaluates to true with provided source
 * @param {...function: boolean} fns - predicate functions
 * @returns {function(...[*]): boolean}
 * @example
 *
 * const f1 = (a, b) => a === 1 && typeof b === 'number'
 * const f2 = (a, b) => a === 1 && typeof b === 'number'
 *
 * const res = allOf(f1, f2)(1, 2) // true
 *
 */
module.exports = (...fns) => (...args) => fns.every(f => f(...args))

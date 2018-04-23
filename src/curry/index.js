'use strict'

/**
 * Break down source function, which must be one that accepts multiple arguments,
 * into curried version that accepts one argument
 *
 * @param {function} f
 * @returns {function(*=): function(*=): *}
 * @example
 *
 * const add = (a, b) => a + b
 * const addTen = curry(add)(10)
 *
 * const res = addTen(10)
 * // 20
 *
 */
module.exports = f => a => b => f(a, b)

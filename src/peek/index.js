/* eslint-disable fp/no-unused-expression */

'use strict'

/**
 * Runs the provided function on source and then return the source
 * Useful to log or debug operations
 *
 * @param {function} fn
 * @example
 *
 * arr
 *  .map(mapProducts)
 *  .map(peek(x => console.log(`product is ${x.id}`)))
 *  .map(additionalMap)
 *
 */
module.exports = fn => x => {
  fn(x)
  return x
}

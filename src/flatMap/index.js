'use strict'

/**
 * Map and then flatten array elements into a new one dimensional array
 * @param {function} fn - map function
 * @returns {function([]): Array}
 * @example
 *
 * const arr = [
 *  { x: '2018', items: [{ a: '1', b: 1 }, { a: '2', b: 2 }] },
 *  { x: '2018', items: [{ a: '3', b: 3 }, { a: '4', b: 4 }] },
 *  { x: '2018', items: [{ a: '5', b: 5 }, { a: '6', b: 6 }] }
 * ]
 *
 * const flattened = flatMap(x => x.items)(arr)
 * // [ { a: '1', b: 1 }, { a: '2', b: 2 }, { a: '3', b: 3 }, { a: '4', b: 4 }, { a: '5', b: 5 }, { a: '6', b: 6 } ]
 *
 * const filtered = flattened.filter(x => x.a === '1')
 * // [ { a: '1', b: 1 } ]
 *
 */
module.exports = fn => arr => [].concat(...arr.map(fn))

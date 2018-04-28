'use strict'

/**
 * Pulls every items from provided array including sub-arrays
 * and returns a new flat collection
 * @param {Array} arr - array to be flattened
 * @return {Array}
 * @example
 *
 * const arr = [1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]
 * const flattened = flatten(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 *
 */
const flatten = arr => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

module.exports = flatten

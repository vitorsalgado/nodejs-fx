'use strict'

/**
 * Check if source is valid and if not, returns provided fallback
 * @param source
 * @param fallback - fallback if source is invalid
 * @example
 *
 * valueOr('test', 'fallback') // test
 * valueOr(null, 'fallback') // fallback
 *
 */
module.exports = (source, fallback) => source || fallback

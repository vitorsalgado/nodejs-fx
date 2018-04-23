'use strict'

const valueOr = require('../valueOr')

/**
 * A container object that may or may not contain a non-null/defined value
 * It enables consumers to safelly perform mapping operations and check if the source is present or not
 *
 * @param [x] - nullable source to wrap on
 */
const maybe = x =>
  ({
    /**
     * Check if source is no-null or defined
     * @return {Boolean}
     */
    isPresent: () => !!x,

    /**
     * @param {function} fn - function to apply on source
     */
    map: fn => maybe(fn(x)),

    /**
     * Returns the raw source
     * @return x
     */
    value: () => x,

    /**
     * Returns the source if it is valid or a provided fallback
     * @param def - fallback if source is null or undefined
     */
    valueOrDefault: def => valueOr(x, def)
  })

module.exports = maybe

'use strict'

/**
 * Creates a function context for the provided source, allowing to map it using any number of functions.
 * It can be an alternative to the if-else, switch statements.
 *
 * @param x - source
 */
const check = x =>
  ({
    /**
     * Predicate to apply on source.
     * If it passes the predicate, fn will be called with source as argument
     *
     * @param {Function} pred - predicate to apply on source
     * @param {Function} fn - function that will be returned if pred passes
     */
    on: (pred, fn) => (pred(x) ? checked(fn(x)) : check(x)),

    /**
     * @param fn - function to apply on source
     */
    otherwise: fn => fn(x),

    /**
     * Map the source value with the provided function
     *
     * @param {Function} fn - function to map the source
     */
    map: fn => check(fn(x)),

    /**
     * Returns the raw value
     */
    fold: () => x
  })

/**
 * Guard wrapper for main 'check'
 */
const checked = x => (
  {
    on: () => checked(x),
    otherwise: () => x,
    map: fn => checked(x),
    fold: () => x
  })

module.exports = check

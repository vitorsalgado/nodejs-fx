'use strict'

module.exports = (...fns) => (...args) => fns.every(f => f(...args))

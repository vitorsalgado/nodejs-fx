'use strict'

const allOf = require('./src/allOf')
const anyOf = require('./src/anyOf')
const check = require('./src/check')
const compose = require('./src/compose')
const curry = require('./src/curry')
const def = require('./src/def')
const flatMap = require('./src/flatMap')
const flatten = require('./src/flatten')
const maybe = require('./src/maybe')
const not = require('./src/not')
const peek = require('./src/peek')
const pipe = require('./src/pipe')
const valueOr = require('./src/valueOr')

module.exports = {
  allOf,
  anyOf,
  check,
  compose,
  curry,
  def,
  flatMap,
  flatten,
  maybe,
  not,
  peek,
  pipe,
  valueOr
}

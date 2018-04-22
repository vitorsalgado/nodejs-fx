/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable global-require */
/* eslint-disable security/detect-non-literal-require */

'use strict'

const FileSystem = require('fs')
const { check, flatten } = require('../')

module.exports.readDirRecursiveAndSync = (root, fileFilter, acc = []) =>
  flatten(
    FileSystem
      .readdirSync(root)
      .map(directory => `${root}/${directory}`)
      .map(file =>
        check(file)
          .on(isDirectory, x => acc.concat(exports.readDirRecursiveAndSync(x, fileFilter, acc)))
          .on(fileFilter, x => acc.concat(require(x)))
          .otherwise(() => acc))
      .filter(notEmpty)
  )

const isDirectory = value =>
  check(value)
    .map(FileSystem.statSync)
    .on(stat => stat && stat.isDirectory(), () => true)
    .otherwise(() => false)

const notEmpty = arr => arr && arr.length > 0

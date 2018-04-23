# Node FX
[![Build Status](https://travis-ci.org/vitorsalgado/nodejs-fx.svg?branch=master)](https://travis-ci.org/vitorsalgado/nodejs-fx) 
[![Coverage Status](https://coveralls.io/repos/github/vitorsalgado/nodejs-fx/badge.svg?branch=master)](https://coveralls.io/github/vitorsalgado/nodejs-fx?branch=master)
[![Code Climate](https://codeclimate.com/github/vitorsalgado/nodejs-fx/badges/gpa.svg)](https://codeclimate.com/github/vitorsalgado/nodejs-fx)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![npm](https://img.shields.io/npm/dt/nodejs-fx.svg)](https://www.npmjs.com/package/nodejs-fx)

Small functional utility library for JavaScript.

## Installation
```
npm install nodejs-fx --save
```
or 
```
yarn add nodejs-fx
```

## Usage
```
const NodeFx = require('nodejs-fx')

const is401 = err => err.status === 401
const is404 = err => err.status === 404
const err = { status: 401 }

const res = NodeFx.anyOf(is404, is401)(err)
```

or using destructuring

```
const { pipe, curry } = require('nodejs-fx')

const sum = (x, y) => x + y
const addTwo curry(sum)(2)
const addFive = curry(sum)(5)

const x = pipe(sum, addTwo, addFive)(4, 2)
```

## API
- [allOf](src/allOf/index.js)
- [anyOf](src/anyOf/index.js)
- [check](src/check/index.js)
- [compose](src/compose/index.js)
- [curry](src/curry/index.js)
- [def](src/def/index.js)
- [flatten](src/flatten/index.js)
- [maybe](src/maybe/index.js)
- [not](src/not/index.js)
- [peek](src/peek/index.js)
- [pipe](src/pipe/index.js)

## License
This project is available under MIT License. See [LICENSE](LICENSE).

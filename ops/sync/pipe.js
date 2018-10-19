'use strict';

const compose = require('./compose');

module.exports = function pipe(...ops) {
  return compose.call(ops[Symbol.iterator](), this);
};

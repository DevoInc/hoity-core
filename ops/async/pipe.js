'use strict';

const compose = require('./compose');

module.exports = async function pipe(...ops) {
  return compose.call(ops[Symbol.iterator](), this);
};

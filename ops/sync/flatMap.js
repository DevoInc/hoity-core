'use strict';

const map = require('./map');
const flat = require('./flat');

module.exports = function flatMap(fn) {
  return flat.call(map.call(this, fn));
};

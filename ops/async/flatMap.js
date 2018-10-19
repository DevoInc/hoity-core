'use strict';

const map = require('./map');
const flat = require('./flat');

module.exports = async function flatMap(fn) {
  return flat.call(map.call(this, fn));
};

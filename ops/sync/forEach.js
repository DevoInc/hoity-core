'use strict';

module.exports = function forEach(fn) {
  for (const x of this) fn(x);
};

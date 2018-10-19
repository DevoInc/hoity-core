'use strict';

module.exports = function* map(fn) {
  for (const x of this) yield fn(x);
};

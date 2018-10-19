'use strict';

module.exports = function* find(fn) {
  for (const x of this) if (fn(x)) {yield x; return;}
};

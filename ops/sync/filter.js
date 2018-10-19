'use strict';

module.exports = function* filter(test) {
  for (const x of this) if (test(x)) yield x;
};

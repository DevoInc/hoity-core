'use strict';

module.exports = function at(n) {
  let i = 0;
  for (const x of this) {
    if (n <= i) return x;
    i++;
  }
  return undefined;
};

'use strict';

module.exports = function every(p) {
  for (const x of this) if (!p(x)) return false;
  return true;
};

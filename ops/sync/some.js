'use strict';

module.exports = function some(p) {
  for (const x of this) {
    const ok = p(x);
    if (ok) return ok;
  }
  return undefined;
};

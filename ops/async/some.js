'use strict';

module.exports = async function some(p) {
  for await (const x of this) {
    const ok = p(x);
    if (ok) return ok;
  }
  return undefined;
};

'use strict';

module.exports = function join(sep=",") {
  let s = "";
  let effsep = "";
  for (const x of this) {
    s += effsep + x;
    effsep = sep;
  }
  return s;
};

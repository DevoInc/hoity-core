'use strict';

module.exports = async function join(sep=",") {
  let s = "";
  let effsep = "";
  for await (const x of this) {
    s += effsep + x;
    effsep = sep;
  }
  return s;
};

'use strict';

module.exports = async function last() {
  var last = undefined;
  for await (const x of this) last = x;
  return last;
};

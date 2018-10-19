'use strict';

module.exports = function last() {
  var last = undefined;
  for (const x of this) last = x;
  return last;
};

'use strict';

const {return1} = require('../../util/return');

module.exports = function* zip(it, fn) {
  let done2 = false;
  try {
    for (const v1 of this) {
      let v2;
      ({done: done2, value: v2} = it.next());
      if (done2) break;
      yield fn(v1, v2);
    }
  } finally {
    if (!done2) return1(it);
  }
};

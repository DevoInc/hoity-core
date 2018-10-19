'use strict';

const {return1} = require('../../util/return');

module.exports = function* take(n) {
  let done = false;
  try {
    for (let i = 0; i < n; i++) {
      let value;
      ({done, value} = this.next());
      if (done) break;
      yield value;
    }
  } finally {
    if (!done) return1(this);
  }
};

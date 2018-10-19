'use strict';

const {return1} = require('../../util/return');

module.exports = async function* take(n) {
  let done = false;
  try {
    for (let i = 0; i < n; i++) {
      let value;
      ({done, value} = await this.next());
      if (done) break;
      yield value;
    }
  } finally {
    if (!done) return1(this);
  }
};

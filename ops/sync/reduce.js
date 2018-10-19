'use strict';

module.exports = function* reduce(fn, init) {
  let last = init;
  yield last;
  for (const x of this) {
    last = fn(last, x);
    yield last;
  }
};

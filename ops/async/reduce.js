'use strict';

module.exports = async function* reduce(fn, init) {
  let last = init;
  yield last;
  for await (const x of this) {
    last = fn(last, x);
    yield last;
  }
};

'use strict';

module.exports = async function* map(fn) {
  for await (const x of this) yield fn(x);
};

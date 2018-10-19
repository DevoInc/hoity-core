'use strict';

module.exports = async function* find(fn) {
  for await (const x of this) if (await fn(x)) {yield x; return;}
};

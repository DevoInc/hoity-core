'use strict';

module.exports = async function* filter(test) {
  for await(const x of this) if (await test(x)) yield x;
};

'use strict';

module.exports = async function forEach(fn) {
  for await (const x of this) fn(x);
};

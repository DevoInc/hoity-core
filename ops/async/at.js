'use strict';

module.exports = async function at(n) {
  let i = 0;
  for await (const value of this) {
    if (i === n) return value;
    i++;
  }
  return undefined;
};

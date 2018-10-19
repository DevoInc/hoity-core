'use strict';

module.exports = async function every(p) {
  for await (const x of this) if (!await p(x)) return false;
  return true;
};

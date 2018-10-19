'use strict';

module.exports = async function first() {
  for await (const x of this) return x;
};

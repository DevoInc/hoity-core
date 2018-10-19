'use strict';

module.exports = function first() {
  //return this.next().value;
  for (const x of this) return x;
};

'use strict';

module.exports = function drop(n) {
  for (let i = 0; i < n && !this.next().done; i++);
  return this;
};

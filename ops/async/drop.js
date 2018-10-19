'use strict';

module.exports = async function drop(n) {
  for (let i = 0; i < n && !(await this.next()).done; i++);
  return this;
};

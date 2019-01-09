'use strict';

module.exports = function async() {
  const it = this;
  return {
    async *[Symbol.asyncIterator]() {
      for (const x of it) yield x;
    }
  }
};

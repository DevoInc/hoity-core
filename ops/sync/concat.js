'use strict';

const {returnAll} = require('../../util/return');

module.exports = function* concat(...its) {
  let i = 0;
  try {
    yield* this;
    while (i < its.length) yield* its[i++];
  } finally {
    returnAll(its, i);
  }
};

'use strict';

const fmerge = require('../../funs/async/merge');

module.exports = function merge(...moreIts) {
  return fmerge(...[this].concat(moreIts));
};

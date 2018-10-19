'use strict';

const {returnAll} = require('../../util/return');

module.exports = async function* merge(...its) {
  try {
    while (0 < its.length) {
      let someDone = false;
      for (let i = 0; i < its.length; i++) {
        const result = await its[i].next();
        if (result.done) {its[i] = undefined; someDone = true;}
        else yield result.value;
      }
      if (someDone) {
        let i = 0;
        for (let j = 0; j < its.length; j++) {
          if (its[j] === undefined) continue;
          if (i < j) its[i] = its[j];
          i++;
        }
        its.length = i;
      }
    }
  } finally {
    returnAll(its);
  }
};

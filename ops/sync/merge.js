'use strict';

const fmerge = require('../../funs/sync/merge');

// This code doesn't keep the iterator order.
// In fact, it doesn't pass the current tests.
// module.exports = function* merge(...its) {
//   const iterators = [ this ].concat(its);
//   while (iterators.length !== 0) {
//     for (const it of iterators) {
//       const result = it.next();

//       // When iterator is done we remove it from array to avoid iterate again
//       if (result.done) {
//         const index = iterators.indexOf(it);
//         iterators.splice(index, 1);
//         break;
//       }

//       yield result.value;
//     }
//   }
// };

module.exports = function merge(...moreIts) {
  return fmerge(...[this].concat(moreIts));
};

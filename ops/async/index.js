'use strict';

function pipable(method) {
  return (...args) => me => method.call(me, ...args);
}

module.exports = {
  pipe: pipable(require('./pipe')),

  //Producing another Iterator
  compose: pipable(require('./compose')),
  concat: pipable(require('./concat')),
  drop: pipable(require('./drop')),
  filter: pipable(require('./filter')),
  find: pipable(require('./find')),
  flat: pipable(require('./flat')),
  flatMap: pipable(require('./flatMap')),
  map: pipable(require('./map')),
  merge: pipable(require('./merge')),
  reduce: pipable(require('./reduce')),
  take: pipable(require('./take')),
  zip: pipable(require('./zip')),

  //Producing a final value (including undefined for nothing)
  array: pipable(require('./array')),
  at: pipable(require('./at')),
  every: pipable(require('./every')),
  first: pipable(require('./first')),
  join: pipable(require('./join')),
  last: pipable(require('./last')),
  some: pipable(require('./some')),

  forEach: pipable(require('./forEach'))
};

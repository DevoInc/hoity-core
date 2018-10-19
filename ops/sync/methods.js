"use strict";

module.exports = {
  pipe: require('./pipe'),

  //Producing another Iterator
  compose: require('./compose'),
  concat: require('./concat'),
  drop: require('./drop'),
  filter: require('./filter'),
  find: require('./find'),
  flat: require('./flat'),
  flatMap: require('./flatMap'),
  map: require('./map'),
  merge: require('./merge'),
  take: require('./take'),
  reduce: require('./reduce'),
  zip: require('./zip'),

  //Producing a final value (including undefined for nothing)
  array: require('./array'),
  at: require('./at'),
  every: require('./every'),
  first: require('./first'),
  join: require('./join'),
  last: require('./last'),
  some: require('./some'),

  forEach: require('./forEach')
};

'use strict';

module.exports = function compose(init) {
  var value = init;
  for (const f of this) value = f(value);
  return value;
};

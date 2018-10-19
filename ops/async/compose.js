'use strict';

module.exports = async function compose(init) {
  var value = init;
  for await (const f of this) value = await f(value);
  return value;
};

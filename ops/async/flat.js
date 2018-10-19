'use strict';

module.exports = async function* flat() {
  for await (const it of this) yield* it;
};

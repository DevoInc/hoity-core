'use strict';

module.exports = function* flat() {
  for (const it of this) yield* it;
};

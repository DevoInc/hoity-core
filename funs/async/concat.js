'use strict';

module.exports = async function* concat(...its) {
  for await (const it of its) yield* it;
};

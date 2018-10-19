'use strict';

module.exports = async function array() {
  const buff = [];
  for await (const chunk of this) buff.push(chunk);
  return buff;
};

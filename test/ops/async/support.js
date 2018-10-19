'use strict';

function iterator(obj) {return obj[Symbol.asyncIterator]();}

async function* seq(init, end, inc=1) {
  for (let i = init; i < end; i+=inc) yield i;
}

async function ait2array(it) {
  const buff = [];
  for await (const chunk of it) buff.push(chunk);
  return buff;
}

async function* generateAsyncIterator(...its) {
  for (const it of its) {
    yield it;
  }
}

module.exports = {
  iterator,
  seq,
  ait2array,
  generateAsyncIterator
};

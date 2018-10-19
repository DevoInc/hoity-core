'use strict';

function iterator(obj) {return obj[Symbol.iterator]();}

function* seq(init, end, inc=1) {
  for (let i = init; i < end; i+=inc) yield i;
}

module.exports = {
  iterator,
  seq
};

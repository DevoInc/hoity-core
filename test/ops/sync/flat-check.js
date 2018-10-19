'use strict';

const {iterator, seq} = require('./support');

module.exports = function(expect, mode, flat) {
  it(`in mode ${mode}`, function() {
    expect(flat(iterator([seq(0,4), seq(4,8), seq(8,12)])))
      .to.be.iterator.eql(seq(0,12));
  });
};

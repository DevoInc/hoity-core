'use strict';

const {iterator, seq} = require('./support');

module.exports = function(expect, mode, merge) {
  it(`in mode ${mode}`, function() {
    expect(merge(seq(0,12,3), seq(1,12,3), seq(2,12,3)))
      .to.be.iterator.eql(seq(0,12));

    expect(merge(seq(0,1), seq(0,2), seq(0,3), seq(0,1), seq(0,4)))
      .to.be.iterator.eql([0,0,0,0,0, 1,1,1, 2,2, 3]);
  });
};

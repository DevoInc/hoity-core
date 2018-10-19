'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, reduce) {
  it(`in mode ${mode}`, function() {
    expect(reduce(seq(0,5), (x,y) => x+y, 0))
      .to.be.iterator.eql([0,0,1,3,6,10]);
  });
};

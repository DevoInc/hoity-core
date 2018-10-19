'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, zip) {
  it(`in mode ${mode}`, function() {
    expect(zip(seq(0,10), seq(10,20), (x,y) => x+y))
      .to.be.iterator.eql(seq(10,30,2));
  });
};

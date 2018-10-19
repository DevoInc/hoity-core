'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, take) {
  it(`in mode ${mode}`, function() {
    expect(take(seq(0,1000), 10)).to.be.iterator.eql(seq(0,10));
  });
};

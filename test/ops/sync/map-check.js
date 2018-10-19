'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, map) {
  it(`in mode ${mode}`, function() {
    expect(map(seq(0,4), n => 3*n))
      .to.be.iterator.eql(seq(0,12,3));
  });
};

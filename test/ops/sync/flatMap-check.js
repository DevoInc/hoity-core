'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, flatMap) {
  it(`in mode ${mode}`, function() {
    expect(flatMap(seq(0,4), n => seq(4*n,4*n+4)))
      .to.be.iterator.eql(seq(0,4*4));
  });
};

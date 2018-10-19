'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, at) {
  it(`in mode ${mode}`, function() {
    expect(at(seq(0,9), 5)).to.be.eq(5);
    expect(at(seq(0,9), 10)).to.be.undefined;
  });
};

'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, first) {
  it(`in mode ${mode}`, function() {
    expect(first(seq(0,5))).to.be.eq(0);
  });
};

'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, last) {
  it(`in mode ${mode}`, function() {
    expect(last(seq(0,10))).to.be.eq(9);
  });
};

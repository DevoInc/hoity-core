'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, some) {
  it(`in mode ${mode}`, function() {
    expect(some(seq(0,10), x => x === 5)).to.be.true;
    expect(some(seq(0,10), x => x === 10)).to.be.undefined;
  });
};

'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, at) {
  it(`in mode ${mode}`, async function() {
    const result1 = await at(seq(0,9), 5);
    const result2 = await at(seq(0,9), 10);
    expect(result1).to.be.eq(5);
    expect(result2).to.be.undefined;
  });
};

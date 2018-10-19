'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, last) {
  it(`in mode ${mode}`, async function() {
    const result1 = await last(seq(0,10));
    expect(result1).to.be.eq(9);
  });
};

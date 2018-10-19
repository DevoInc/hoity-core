'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, every) {
  it(`in mode ${mode}`, async function() {
    const result1 = await every(seq(0,8), x => x < 10);
    const result2 = await every(seq(0,11), x => x < 10);
    expect(result1).to.be.eq(true);
    expect(result2).to.be.eq(false);
  });
};

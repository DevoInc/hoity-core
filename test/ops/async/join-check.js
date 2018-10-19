'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, join) {
  it(`in mode ${mode}`, async function() {
    const result1 = await join(seq(0,5));
    const result2 = await join(seq(0,5), " - ");
    expect(result1).to.be.eq('0,1,2,3,4');
    expect(result2).to.be.eq('0 - 1 - 2 - 3 - 4');
  });
};

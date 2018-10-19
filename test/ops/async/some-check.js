'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, some) {
  it(`in mode ${mode}`, async function() {
    const result1 = await some(seq(0,10), x => x === 5);
    const result2 = await some(seq(0,10), x => x === 10);
    expect(result1).to.be.true;
    expect(result2).to.be.undefined;
  });
};

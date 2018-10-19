'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, find) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await find(seq(0,1000), x => x >= 100);
    const result = await ait2array(resultIt);
    expect(result).to.be.eql([100]);
  });
};

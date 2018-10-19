'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, take) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await take(seq(0,1000), 10);
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(0, 10));
    expect(result).to.be.eql(expected);
  });
};

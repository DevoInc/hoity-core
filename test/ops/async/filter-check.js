'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, filter) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await filter(seq(0, 8), x => (x&1) === 0);
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(0, 8, 2));
    expect(result).to.be.eql(expected);
  });
};

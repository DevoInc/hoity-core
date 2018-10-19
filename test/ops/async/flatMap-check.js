'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, flatMap) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await flatMap(seq(0,4), n => seq(4*n,4*n+4));
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(0, 4*4));
    expect(result)
      .to.be.eql(expected);
  });
};

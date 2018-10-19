'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, map) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await map(seq(0,4), n => 3*n);
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(0, 12, 3));
    expect(result)
      .to.be.eql(expected);
  });
};

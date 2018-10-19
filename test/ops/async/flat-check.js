'use strict';

const {generateAsyncIterator, seq, ait2array} = require('./support');

module.exports = function(expect, mode, flat) {
  it(`in mode ${mode}`, async function() {

    const resultIt = await flat(generateAsyncIterator(seq(0,4), seq(4,8), seq(8,12)));
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(0,12));
    expect(result)
      .to.be.eql(expected);
  });
};

'use strict';

const {ait2array, seq} = require('./support');

module.exports = function(expect, mode, merge) {
  it(`in mode ${mode}`, async function() {
    const resultIt1 = await merge(seq(0,12,3), seq(1,12,3), seq(2,12,3));
    const result1 = await ait2array(resultIt1);
    const expect1 = await ait2array(seq(0, 12));
    expect(result1)
      .to.be.eql(expect1);

    const resultIt2 = await merge(seq(0,1), seq(0,2), seq(0,3), seq(0,1), seq(0,4));
    const result2 = await ait2array(resultIt2);
    expect(result2)
      .to.be.eql([0,0,0,0,0, 1,1,1, 2,2, 3]);
  });
};

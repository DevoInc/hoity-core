'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, reduce) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await reduce(seq(0,5), (x,y) => x+y, 0);
    const result = await ait2array(resultIt)
    expect(result)
      .to.be.eql([0,0,1,3,6,10]);
  });
};

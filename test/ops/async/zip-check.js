'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, zip) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await zip(seq(0,10), seq(10,20), (x,y) => x+y);
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(10,30,2))
    expect(result)
      .to.be.eql(expected);
  });
};

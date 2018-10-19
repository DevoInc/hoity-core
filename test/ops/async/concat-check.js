'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, concat) {
  it(`in mode ${mode}`, async function() {
    const itResult = await concat(seq(0,4), seq(4,8));
    const result = await ait2array(itResult);
    const expected = await ait2array(seq(0, 8));
    expect(result).to.be.eql(expected);
  });
};

'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, drop) {
  it(`in mode ${mode}`, async function() {
    const resultIt = await drop(seq(0,8), 4);
    const result = await ait2array(resultIt);
    const expected = await ait2array(seq(4,8));
    expect(result).to.be.eql(expected);
  });
};

'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, array) {
  it(`in mode ${mode}`, async function() {
    const result = await array(seq(0,8));
    const expected = await ait2array(seq(0,8));
    expect(result).to.be.eql(expected);
  });
};

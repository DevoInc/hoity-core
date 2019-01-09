'use strict';

const {seq} = require('./support');
const { ait2array } = require('../async/support');

module.exports = function(expect, mode, async) {
  it(`in mode ${mode}`, async function() {
    const from = 0;
    const to = 10;
    const result = await ait2array(async(seq(0, 10)));
    const expected = Array(to - from).fill(null).map((x, i) => i + from);
    expect(result).to.be.eql(expected);
  });
};

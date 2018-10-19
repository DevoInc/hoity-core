'use strict';

const {seq, ait2array} = require('./support');

module.exports = function(expect, mode, forEach) {
  it(`in mode ${mode}`, async function() {
    const expected = await ait2array(seq(0,8));
    const xs = [];
    await forEach(seq(0,8), x => xs.push(x));
    expect(xs).to.be.eql(expected);
  });
};

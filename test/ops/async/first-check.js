'use strict';

const {seq} = require('./support');

module.exports = async function(expect, mode, first) {
  const result = await first(seq(0,5));
  it(`in mode ${mode}`, function() {
    expect(result).to.be.eq(0);
  });
};

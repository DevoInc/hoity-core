'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, join) {
  it(`in mode ${mode}`, function() {
    expect(join(seq(0,5))).to.be.eq('0,1,2,3,4');
    expect(join(seq(0,5), " - ")).to.be.eq('0 - 1 - 2 - 3 - 4');
  });
};

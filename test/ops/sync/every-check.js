'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, every) {
  it(`in mode ${mode}`, function() {
    expect(every(seq(0,8), x => x < 10)).to.be.eq(true);
    expect(every(seq(0,11), x => x < 10)).to.be.eq(false);
  });
};

'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, find) {
  it(`in mode ${mode}`, function() {
    expect(find(seq(0,1000), x => x >= 100)).to.be.iterator.eql([100]);
  });
};

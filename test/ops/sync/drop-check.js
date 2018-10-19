'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, drop) {
  it(`in mode ${mode}`, function() {
    expect(drop(seq(0,8), 4)).to.be.iterator.eql(seq(4,8));
  });
};

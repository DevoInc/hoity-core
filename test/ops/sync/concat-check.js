'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, concat) {
  it(`in mode ${mode}`, function() {
    expect(concat(seq(0,4), seq(4,8))).to.be.iterator.eql(seq(0,8));
  });
};

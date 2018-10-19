'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, filter) {
  it(`in mode ${mode}`, function() {
    expect(filter(seq(0,8), x => (x&1) === 0)).to.be.iterator.eql(seq(0,8,2));
  });
};

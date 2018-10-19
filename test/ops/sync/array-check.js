'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, array) {
  it(`in mode ${mode}`, function() {
    expect(array(seq(0,8))).to.be.eql([...seq(0,8)]);
  });
};

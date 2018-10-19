'use strict';

const {seq} = require('./support');

module.exports = function(expect, mode, forEach) {
  it(`in mode ${mode}`, function() {
    const xs = [];
    forEach(seq(0,8), x => xs.push(x));
    expect(xs).to.be.eql([...seq(0,8)]);
  });
};

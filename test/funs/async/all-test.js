'use strict';

const chai = require('chai');
chai.use(require('@devo/hoity-chai'));

const hoity = require('../../..');
const funs = hoity.funs.async;

function fun(f) {
  describe(f.name, function() {
    const check = require(`../../ops/async/${f.name}-check`);
    check(chai.expect, 'function', f);
  });
}

describe('Hoity sync operator', function() {
  [ funs.concat,
    funs.merge,
  ].map(fun);
});

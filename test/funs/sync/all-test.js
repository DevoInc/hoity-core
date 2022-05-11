'use strict';

const chai = require('chai');
chai.use(require('@devoinc/hoity-chai'));

const {Iterator} = require('@devoinc/hoity-grasp');
const hoity = require('../../..');
const funs = hoity.funs.sync;

function fun(f) {
  describe(f.name, function() {
    const check = require(`../../ops/sync/${f.name}-check`);
    check(chai.expect, 'function', f);
  });
}

describe('Hoity sync operator', function() {
  [ funs.concat,
    funs.merge,
  ].map(fun);
});

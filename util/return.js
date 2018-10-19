'use strict';

exports.return1 = return1;
function return1(it) {
  if (typeof it.return === "function") it.return();
}

exports.returnAll = returnAll;
function returnAll(its, init = 0, end = its.length) {
  let errors = 0, firstError = undefined;
  try {
    for (let i = init; i < end; i++) return1(its[i]);
  } catch (e) {
    if (errors === 0) firstError = e;
    errors++;
  }
  if (0 < errors) throw firstError;
}

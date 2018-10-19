"use strict";

const {Iterator, AsyncIterator} = require('@devo/hoity-grasp');

const allSyncMethods = require('../ops/sync/methods');
const allAsyncMethods = require('../ops/async/methods');

function install(opts) {
  const effopts = opts || {};
  return effopts.all ? installAll()
    : (opts === undefined || effopts.pipe) ? installPipe()
    : installNothing();
}

function deinstallNothing() {}
function installNothing() {return deinstallNothing;}

function installAll() {
  return installMethods(allSyncMethods, allAsyncMethods);
}

function installPipe() {
  return installMethods(
    {pipe: allSyncMethods.pipe}, {pipe: allAsyncMethods.pipe});
}

function installMethods(syncMethods, asyncMethods) {
  const syncDeinstall = installOn(syncCounters, Iterator, syncMethods);
  const asyncDeinstall = installOn(asyncCounters, AsyncIterator, asyncMethods);
  var called = false;
  return () => {
    if (!called) {
      called = true;
      syncDeinstall();
      asyncDeinstall();
    }
  };
}

const syncCounters = {};
const asyncCounters = {};
for (const name in allSyncMethods) syncCounters[name] = 0;
for (const name in allAsyncMethods) asyncCounters[name] = 0;

function installOn(counters, klass, methods) {
  const toRemove = [];
  for (const name in methods) {
    toRemove.push(name);
    const c = counters[name]++;
    if (c !== 0) continue;
    Object.defineProperty(klass.prototype, name, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: methods[name]
    });
  }
  return deinstaller(counters, klass, toRemove);
}

function deinstaller(counters, klass, toRemove) {
  return () => {
    for (const name of toRemove) {
      const c = --counters[name];
      if (c !== 0) continue;
      delete klass.prototype[name];
    }
  };
}

module.exports = install;

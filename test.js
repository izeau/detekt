'use strict';

const assert = require('assert');
const detekt = require('./index');

// Mocks
global.setTimeout = fn => fn();
global.document = {
  createElement: () => ({
    set src(url) {
      if (url.indexOf('reddit') >= 0) {
        this.onload();
      } else {
        this.onerror();
      }
    },
  }),
};

detekt(null, err => {
  assert(err, 'detekt should call back with an error for unsupported services');
});

detekt('reddit', (err, loggedIn) => {
  assert.ifError(err);
  assert.equal(loggedIn, true, 'detekt should call back with true if the user is logged in');
});

detekt('twitter', (err, loggedIn) => {
  assert.ifError(err);
  assert.equal(loggedIn, false, 'detekt should call back with false if the user is not logged in');
});

console.log('All tests ok');

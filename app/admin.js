var backbone = require('backbone');

// var moment = require('moment');

const t = 1 + 5;


//Dynamic import: import()
function determineDate() {
  import('moment').then(function(moment) {
    console.log(moment().format());
  }).catch(function(err) {
    console.log('Failed to load moment', err);
  });
}

determineDate();

//If you use import() with older browsers, remember to shim Promise using a polyfill such as es6-promise or promise-polyfill.

import Es6Promise from 'es6-promise';
Es6Promise.polyfill();
// or
import 'es6-promise/auto';
// or
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}


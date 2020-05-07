exports.command = function(message, callback) {
  'use strict';
  return this.perform(function(browser, done) {
    console.log('\x1B[34m ¡ \x1B[0m' + message);
    done();
  })
}

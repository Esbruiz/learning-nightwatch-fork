var config = require('../../nightwatch.conf.js');

/**
 * Checks login page in both cases, successful and restricted
 * @type {{'@tags': [string], 'Login Test': Login Test}}
 */
module.exports = {
  '@tags': ['LoginTest'],
  'Login Test': function(browser) {
    browser
      .url('http://the-internet.herokuapp.com/login')
      .waitForElementVisible('#username', 3000)
      .assert.title('The Internet')
      .saveScreenshot(config.imgpath(browser) + 'prefilling-loginpage.png')
      .setValue('#username', 'invalidUsername')
      .setValue('#password', 'invalidPassword!')
      .waitForXHR('', 10000, () => {browser.click('button')}, (xhr) => {
        // should do some assertion like it was a post request and returned a 401 Unauthorized - 303 See Other (In the case of the heroku app)
      })
      .saveScreenshot(config.imgpath(browser) + 'postfilling-invalidloginpage.png')
      .assert.containsText('#flash', 'invalid')
      .clearValue('#username')
      .setValue('#username', 'tomsmith')
      .clearValue('#password')
      .setValue('#password', 'SuperSecretPassword!')
      .waitForXHR('', 10000, () => {
        browser.click('button')
      }, (xhr) => {
        // should do some assertion like it was a post request and returned a 200 OK response
      })
      .saveScreenshot(config.imgpath(browser) + 'postfilling-loginpage.png')
      .assert.containsText('body', 'Secure Area')
      .end();
  }
};

var conf = require('../../nightwatch.conf.js');

module.exports = {

  // after - before / after each - before each
  afterEach: function (client, done) {
    client.end(function () {
      done();
    });
  },

  beforeEach: function (client) {},

  'Demo test GitHub using PO': function (browser) {
    //part one
    const githubPO = browser.page.githubPO() // create the page Object
    githubPO.navigate() // visit the url
    githubPO.waitForElementVisible('@body') // wait for the body to be rendered
    // check if we are seeing the Mobile Version of GitHub
    browser.element('css selector', '.switch-to-desktop', function(result) {
      if(result.status != -1) { //Element exists, do something
        githubPO.click('@switchToDesktop')
        githubPO.waitForElementVisible('@body') // wait for the body to be rendered
      }
    })
    // part two:
    githubPO
      .assert.containsText('@body', 'Zemoga Inc') // assert body contains text
      .saveScreenshot(conf.imgpath(browser) + 'zemoga.png')
      .end();
  },

  'Demo test GitHub': function (browser) {
    browser
      .url('https://github.com/zemoga')   // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      });
    // part two:
    browser
      .assert.containsText('body', 'Zemoga Inc') // assert body contains text
      .saveScreenshot(conf.imgpath(browser) + 'zemoga.png')
      .end();
    }
  };

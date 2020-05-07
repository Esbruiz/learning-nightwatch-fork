var conf = require('../../nightwatch.conf.js');

module.exports = {

  // after - before / after each - before each
  afterEach: function (client, done) {
    client.end(function () {
      done();
    });
  },

  beforeEach: function (client) {},

  'Demo test google': function (browser) {
    const googlePO = browser.page.googlePO()
    googlePO.navigate()
    googlePO.waitForElementVisible('@searchInput')
    googlePO.setValue('@searchInput', 'Zemoga')
    googlePO.click('@body')
    googlePO.waitForXHR('', 10000, () => {
      googlePO.click('@searchButton')
    }, (xhr) => {
      console.log(xhr)
      googlePO.waitForElementVisible('@searchContainer') // wait for the body to be rendered
      googlePO.assert.containsText('@body', 'www.zemogauuuyyttt.com')
    })
  },
};

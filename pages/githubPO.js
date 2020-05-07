module.exports = {
  url: function () {
    return 'https://github.com/zemoga';
  },
  elements: {
    body: {
      selector: 'body'
    },
    switchToDesktop: {
      selector:  '.switch-to-desktop'
    },
    firstRepoLink: {
      selector: `#org-repositories > ul > li:nth-child(1) > h3 > a`
    }
  },
  commands:[{
    selectFirstRepo: function(childNumber) {
      return `div:nth-child(${childNumber})`
    }
  }]
};


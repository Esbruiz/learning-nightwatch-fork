module.exports = {
  url: function () {
    return 'https://google.com';
  },
  elements: {
    body: {
      selector: 'body'
    },
    searchContainer: {
      selector: '#cnt'
    },
    searchInput: {
      selector:  'input[name="q"]'
    },
    firstLink: {
      selector: '//body/div/div/p[1]'
    },
    searchButton: {
      selector: '#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.tfB0Bf > center > input.gNO89b'
    },
    zemogaLink: {
      selector: '#rso > div:nth-child(1) > div > div > div.r > div > div'
    }
  },
  commands:[{}]
};


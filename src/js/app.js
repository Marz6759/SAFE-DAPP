App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    // HERE
    return App.initContract();
  },

  initContract: function () {
    $.getJSON('Safe.json', function (data) {
      var SafeArtifact = data;
      App.contracts.Safe = TruffleContract(SafeArtifact);
      App.contracts.Safe.setProvider(App.web3Provider);
      return App.getData();
    })
    // HERE
    return App.bindEvents();
  },

  bindEvents: function () {
    $(document).on('click', '#getData', App.getData);
    $(document).on('click', '#setData', App.setData);
  },

  
  
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
App = {
  web3Provider: null,
  contracts: {},

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    // Modern dapp browsers...
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    return App.initContract();
  },

  initContract: function () {
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
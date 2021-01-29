
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {

    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },

    sokol: {
    provider: () => new HDWalletProvider(mnemonic, sokol),
    network_id: 77,
    }
  },

  compilers: {
    solc: {
      version: "0.8.1",
    }
  }
};

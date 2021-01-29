
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const sokol = 'https://sokol.poa.network';

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
      version: "0.6.0",
    }
  }
};


const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const core = 'https://core.poa.network'
const sokol = 'https://sokol.poa.network';

module.exports = {

  networks: {

    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },

    core: {
      provider: () => new HDWalletProvider(mnemonic, core),
      network_id: 99,
    },

    sokol: {
      provider: () => new HDWalletProvider(mnemonic, sokol),
      network_id: 77,
    }
  },

  compilers: {
    solc: {
      version: "0.7.1",
    }
  }
};
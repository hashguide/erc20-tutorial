const HashGuideCoin = artifacts.require("./HashGuideCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(HashGuideCoin);
};
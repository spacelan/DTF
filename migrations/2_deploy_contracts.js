var SafeMath = artifacts.require("SafeMath");
var Owned = artifacts.require("Owned");
var Kyber = artifacts.require("Kyber");
var DTF = artifacts.require("DTF");
var ERC20 = artifacts.require("ERC20");

module.exports = function(deployer) {
  deployer.deploy(DTF);
};

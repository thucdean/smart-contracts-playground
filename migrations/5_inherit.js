const MostDerived1 = artifacts.require('MostDerived1');
const MostDerived2 = artifacts.require('MostDerived2');

module.exports = function (deployer) {
  deployer.deploy(MostDerived1);
  deployer.deploy(MostDerived2);
}
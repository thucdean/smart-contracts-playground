const Call = artifacts.require("Call");
const Called = artifacts.require("Called");

module.exports = function (deployer) {
  deployer.deploy(Call);
  deployer.deploy(Called);
};

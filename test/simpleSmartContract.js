const SimpleSmartContract = artifacts.require('SimpleSmartContract');

contract('SimpleStorageContract', () => {
  it('Should deploy smart contract properly', async () => {
    // const c = await SimpleSmartContract.new();
    const simpleSmartContract = await SimpleSmartContract.deployed();
    console.log(simpleSmartContract.address);
    assert(simpleSmartContract.address != '');
  })
})
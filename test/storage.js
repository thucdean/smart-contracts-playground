const Storage = artifacts.require('Storage');

contract('Storage', () => {
  it('Should set the value of variable', async () => {
    const storage = await Storage.deployed();
    await storage.set('Fuck');
    const get = await storage.get();

    assert(get == 'Fuck');
  })
})
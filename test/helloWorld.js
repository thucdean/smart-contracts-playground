const HelloWorld = artifacts.require('HelloWorld'); // Same as name

contract('HelloWorld', () => {
  it('Should return hello world', async () => {
    const helloWorld = await HelloWorld.deployed(); // H represents truffle artifacts, h represents an instance.
    const result = await helloWorld.hello();
    assert(result == 'hello, world');
  });
});
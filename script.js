const Web3 = require('web3');
const daiabi = require('./daiabi.json');

const recipientAddress = '0x27920c36c32a4ec7ffae657c03b17a5327033c0c'; // rand
const unlockedAddress = '0xfc2eE3bD619B7cfb2dE2C797b96DeeCbD7F68e46'; // whale
const daiAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // dai

const w3 = new Web3('http://localhost:8545');
const dai = new w3.eth.Contract(daiabi, daiAddress);

async function run() {
	let unlockedBalance, recipientBalance;

	([unlockedBalance, recipientBalance] = await Promise.all([
		dai.methods.balanceOf(unlockedAddress).call(),
		dai.methods.balanceOf(recipientAddress).call()
	]));

	console.log(`Balance unlocked: ${unlockedBalance}`);
	console.log(`Balance recipient: ${recipientBalance}`);

	await dai.methods.transfer(recipientAddress, 1000).send({ from: unlockedAddress });

	([unlockedBalance, recipientBalance] = await Promise.all([
		dai.methods.balanceOf(unlockedAddress).call(),
		dai.methods.balanceOf(recipientAddress).call()
	]));

	console.log(`Balance unlocked: ${unlockedBalance}`);
	console.log(`Balance recipient: ${recipientBalance}`);

}

run();
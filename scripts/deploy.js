import hardhat from 'hardhat';

const main = async() => {
	const Triangle = await hardhat.ethers.getContractFactory("Triangle");
	const triangle = await Triangle.deploy();
	await triangle.deployed();

	console.log("Triangle deployed to:", triangle.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
});

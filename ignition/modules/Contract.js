const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const contractFactory = await hre.ethers.getContractFactory("Contract");
  const contractInstance = await contractFactory.deploy();

  // method deprecated in ethers v6
  // await contractInstance.deployed();

  console.log(`Contract deployed to: ${contractInstance.target}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

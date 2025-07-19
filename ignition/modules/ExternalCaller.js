const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const contractFactory = await hre.ethers.getContractFactory("ExternalCaller");
  const contractInstance = await contractFactory.deploy();

  console.log(`Contract deployed to: ${contractInstance.target}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

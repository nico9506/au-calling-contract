const hre = require("hardhat");

async function main() {
  // hardhat-ethers
  const winnerFactory = await hre.ethers.getContractFactory("WinnerContract");
  const winnerInstance = await winnerFactory.deploy();

  // method deprecated in ethers v6
  // await contractInstance.deployed();

  console.log(`Contract deployed to: ${winnerInstance.target}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

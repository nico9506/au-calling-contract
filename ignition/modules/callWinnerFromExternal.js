const hre = require("hardhat");

// ExternalCaller contract
const CALLER_CONTRACT_ADDR = "0x9DAEc38b18097cF76012fce36f5a7d38a8ce7C0F";

// Winner contract
const WINNER_CONTRACT_ADDR = "0x56366c49024311Dc482fdb8f7398BBBEa95f1420";

async function main() {
  // hardhat-ethers
  const contractInstance = await hre.ethers.getContractAt(
    "ExternalCaller",
    CALLER_CONTRACT_ADDR
  );

  // It should pass as the contract is being
  // called from a different EOA than the deployer one.
  const tx = await contractInstance.callWinner(WINNER_CONTRACT_ADDR);
  await tx.wait();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

const hre = require("hardhat");

// Winner contract
const CONTRACT_ADDR = "0x56366c49024311Dc482fdb8f7398BBBEa95f1420";

async function main() {
  // hardhat-ethers
  const contractInstance = await hre.ethers.getContractAt(
    "WinnerContract",
    CONTRACT_ADDR
  );

  const tx = await contractInstance.attempt();
  await tx.wait();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

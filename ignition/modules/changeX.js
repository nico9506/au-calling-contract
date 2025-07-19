const hre = require("hardhat");

const CONTRACT_ADDR = "0x6AC1206b29FB08a22B814052c685177e1408B949";

async function main() {
  // hardhat-ethers
  const contractInstance = await hre.ethers.getContractAt(
    "Contract",
    CONTRACT_ADDR
  );

  const tx = await contractInstance.changeX(123);

  // wait until the transaction 'tx' is minted in the blockchain
  await tx.wait();
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

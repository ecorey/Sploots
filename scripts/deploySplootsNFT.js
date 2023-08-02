
const hre = require("hardhat");

async function main() {
  const SplootsNFT = await hre.ethers.getContractFactory("SplootsNFT");
  const splootsNFT = await SplootsNFT.deploy();

  await splootsNFT.deployed();
  
  console.log("SplootsNFT deployed to:", splootsNFT.address);
}
 

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

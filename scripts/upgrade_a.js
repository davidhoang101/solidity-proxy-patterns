/*
npx hardhat run scripts/deploy.js --network <network-name>
*/
const { ethers } = require('hardhat');

async function main() {
  const proxyAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
  
  const [owner] = await ethers.getSigners();
  console.log("Onwer/caller", owner.address);

  const A1 = await ethers.getContractFactory('A1');
  const newContract = await upgrades.upgradeProxy(proxyAddress, A1);
  console.log("Your upgraded proxy is done!", newContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
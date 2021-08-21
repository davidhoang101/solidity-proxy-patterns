/*
npx hardhat run scripts/deploy.js --network <network-name>
npx hardhat run scripts/deploy_mytoken.js --network rinkeby 
*/
const hre = require('hardhat');
// const ethers = require('ethers');

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", owner.address);

  const A = await hre.ethers.getContractFactory('A');
  const contract = await hre.upgrades.deployProxy(A, {kind:'uups'});

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
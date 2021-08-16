/*
npx hardhat run scripts/deploy.js --network <network-name>
npx hardhat run scripts/deploy_mytoken.js --network rinkeby 
*/
const hre = require('hardhat');
// const ethers = require('ethers');

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", owner.address);
  console.log("Owner account:", owner.address);
  console.log("Owner Account balance:", (await owner.getBalance()).toString());

  const MyTokenV1 = await hre.ethers.getContractFactory('MyTokenV1');
  const token = await hre.upgrades.deployProxy(MyTokenV1, {kind:'uups'});

  console.log("Token contract deployed to:", token.address);

  const balanceOfOwner = await token.balanceOf(owner.address);
  console.log("Balance of Onwer:", balanceOfOwner.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
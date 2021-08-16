/*
npx hardhat run scripts/deploy.js --network <network-name>
*/
// const { ethers } = require('hardhat');
// const hre = require('hardhat');
// const ethers = require('ethers');

// const { upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0x244343470B9E1f9EF1485c3A9456CDa56d436Eab";
  const [owner] = await ethers.getSigners();
  console.log("Start upgrading", owner.address);
  
  const TokenV2 = await ethers.getContractFactory('MyTokenV2');
  const V2 = await upgrades.upgradeProxy(proxyAddress, TokenV2);
  console.log("Your upgraded proxy is done!", V2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
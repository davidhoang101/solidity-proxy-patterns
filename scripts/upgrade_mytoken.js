/*
npx hardhat run scripts/deploy.js --network <network-name>
*/
const { ethers } = require('hardhat');
// const hre = require('hardhat');
// const ethers = require('ethers');

// const { upgrades } = require("hardhat");

async function main() {
  const proxyAddress = "0x6957a76BA2C12359E1Ea0F75Ec302F0c27ba4972";

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
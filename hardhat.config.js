require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

const dotenv = require('dotenv');
dotenv.config();

const RINKEBY_URL = process.env.RINKEBY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

console.log(PRIVATE_KEY);
module.exports = {
  solidity: "0.8.3",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [PRIVATE_KEY],
    }
  },
  mocha: {
    timeout: 100000
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
}
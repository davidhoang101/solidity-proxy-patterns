# UUPS proxies are implemented using an ERC1967Proxy. 
Note that this proxy is not by itself upgradeable. 
It is the role of the implementation to include, alongside the contract’s logic, all the code necessary to update the implementation’s address that is stored at a specific slot in the proxy’s storage space. This is where the UUPSUpgradeable contract comes in. 
Inheriting from it (and overriding the _authorizeUpgrade function with the relevant access control mechanism) will turn your contract into a UUPS compliant implementation.

# Steps
1. Test smart contracts
=> npx hardhat test

2. Deploy 
=> npx hardhat run scripts/deploy_mytoken.js --network rinkeby

2.1 Verify
- Open proxy address on etherscan, click on More options => Is this a proxy? then verify
- Navigate to event tab, grab the implementation contract address then 
npx hardhat verify --network rinkeby 0x6957a76BA2C12359E1Ea0F75Ec302F0c27ba4972

- Then verify proxy contract manually on etherscan
e.g
https://testnet.bscscan.com/proxyContractChecker?a=0x114963a4b9B8ba6f3Af4F628B0ADAd53A7A3031E
The proxy contract verification completed with the message:
The proxy's (0x114963a4b9B8ba6f3Af4F628B0ADAd53A7A3031E) implementation contract is found at: 0x534d5d544b5c10b21dfc12275e1f38d7c7a8bf5f


3. Upgrade
=> npx hardhat run scripts/upgrade_mytoken.js --network rinkeby

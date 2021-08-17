# UUPS proxies are implemented using an ERC1967Proxy. 
Note that this proxy is not by itself upgradeable. 
It is the role of the implementation to include, alongside the contract’s logic, all the code necessary to update the implementation’s address that is stored at a specific slot in the proxy’s storage space. This is where the UUPSUpgradeable contract comes in. 
Inheriting from it (and overriding the _authorizeUpgrade function with the relevant access control mechanism) will turn your contract into a UUPS compliant implementation.

# Steps
1. Test smart contracts
=> npx hardhat test
2. Deploy 
=> npx hardhat run scripts/deploy_mytoken.js --network rinkeby
3. Upgrade
=> npx hardhat run scripts/upgrade_mytoken.js --network rinkeby

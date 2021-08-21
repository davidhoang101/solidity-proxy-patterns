//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Run intializer only once, replacing constructor
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
//UUPS proxy
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract A is Initializable, UUPSUpgradeable{
  string aData;
  address deployer;

  function initialize() public initializer {
    deployer = msg.sender;
  }

  function _authorizeUpgrade(address) internal 
      override 
      {
    } 


  function retrieveAData() public returns(string memory) {
    aData = 'This data from A Contract';
    return aData;
  }
}

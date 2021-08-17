//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Run intializer only once, replacing constructor
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
//Token functions
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
//UUPS proxy
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyTokenV1 is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    string v1Data;
    function initialize() public initializer {
        __ERC20_init("My Token", "MTK");
        __Ownable_init();
        
        _mint(msg.sender, 10 * 1000 * 1000 * 1000 * 10**decimals());
    }

    function _authorizeUpgrade(address) internal 
      override 
      onlyOwner {
    } 

    function setV1Data() public {
        v1Data = 'This is v1 data';
    }

    function getV1Data() public view returns(string memory) {
        return v1Data;
    }

    function commonFunction() public view returns(string memory) {
        return "this is a common function";
    }

    function getImplementation()  public returns (address) {
        return _getImplementation();
    }

}




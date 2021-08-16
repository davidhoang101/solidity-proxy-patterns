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
        _mint(msg.sender, 100 * 10**decimals());
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
}

contract MyTokenV2 is MyTokenV1{
    string v2Data;

    function setV2Data() public {
        v2Data = 'This string from V2';
    }

    function getV2Data() public view returns(string memory) {
        return v2Data;
    }
}

contract MyTokenV3 is MyTokenV2 {
    // string v2Data; //Now data storage in V2 must remain if V3 is inherited from V1
    string v3Data;

    function setV3Data() public {
        v3Data = 'This string from V3';
    }

    function getV3Data() public view returns(string memory) {
        return v3Data;
    }
}




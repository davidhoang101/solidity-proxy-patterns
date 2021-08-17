//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenV1.sol";
contract MyTokenV3 is MyTokenV1 {
    string v2Data; //Now data storage in V2 must remain if V3 is inherited from V1
    string v3Data;

    function setV3Data() public {
        v3Data = 'This string from V3';
    }

    function getV3Data() public view returns(string memory) {
        return v3Data;
    }
}




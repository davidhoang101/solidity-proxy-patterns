//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./TokenV1.sol";

contract MyTokenV2 is MyTokenV1{
    string v2Data;

    function setV2Data() public {
        v2Data = 'This string from V2';
    }

    function getV2Data() public view returns(string memory) {
        return v2Data;
    }
}



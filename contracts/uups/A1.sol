//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./A.sol";

contract A1 is A{
  string a1Data;

  function retrieveA1Data() public returns(string memory) {
    a1Data = 'This data from A1 Contract';
    return a1Data;
  }
}
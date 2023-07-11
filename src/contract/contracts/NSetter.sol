// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract NSetter {
    event SetN(uint n);

    uint private _n;

    constructor(uint n) {
        _n = n;
    }


    function setN (uint n) public {
        _n = n;
        emit SetN(n);
    }

    function getN() public view returns (uint) {
        return _n;
    }
}

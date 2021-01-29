// SPDX-License-Identifier: MIT
pragma solidity >=0.4.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HashGuideCoin is ERC20 {
    constructor () public ERC20("HashGuideCoin", "HGC") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
    }
}
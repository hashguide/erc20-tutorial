// SPDX-License-Identifier: MIT

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

pragma solidity >=0.4.0 <0.9.0;

contract HashGuideCoin is ERC20 {
    constructor () public ERC20("HashGuideCoin", "HGC") {
        _mint(msg.sender, 100000 * (10 ** uint256(decimals())));
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract WinnerContract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

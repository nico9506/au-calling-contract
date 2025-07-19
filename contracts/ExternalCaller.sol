// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface Winner {
    function attempt() external;
}

contract ExternalCaller {
    function callWinner(address winnerContractAddress) external {
        Winner(winnerContractAddress).attempt();
    }
}

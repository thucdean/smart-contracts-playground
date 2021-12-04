pragma solidity ^0.8.0;

contract Called {
    bytes public faildata;
    uint256 public number;

    constructor() public {
        number = 0;
    }

    fallback() external {
        faildata = msg.data;
    }

    function abc(uint256 num) external {
        number = num;
    }
}

contract Call {
    function callCalled(address contractAddress) public returns (bool) {
        (bool success, ) = contractAddress.call{value: 1000}(
            abi.encodeWithSelector(bytes4(keccak256("abc(uint256)")), 256)
        );
        return success;
    }

    function callSuccess() public returns (bool) {
        return true;
    }
}

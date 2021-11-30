pragma solidity ^0.8.0;

contract Base1 {
    function data1() public pure returns (uint256) {
        return 1;
    }
}

contract Base2 {
    function data2() public pure returns (uint256) {
        return 2;
    }
}

contract MostDerived1 is Base1, Base2 {
    function call() public pure returns (uint256) {
        return data2();
    }
}

contract MostDerived2 is Base2, Base1 {
    function call() public pure returns (uint256) {
        return data1();
    }
}

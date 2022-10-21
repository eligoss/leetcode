/**
 * Runtime: 80 ms
 * Memory Usage: 46.4 MB
 * Link: https://leetcode.com/problems/fibonacci-number/submissions/826998657/
 //-----------------------------------------------------------------------------
 1. Check if n is less or equal 1, return n;
 2. Return the sum of last and step before last.
 //-----------------------------------------------------------------------------
 /**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    // 1. Check if n is less or equal 1, return n;
    if(n <= 1){
        return n;
    }

    // 2. Return the sum of last and step before last.
    return fib(n - 1) + fib(n - 2);
};
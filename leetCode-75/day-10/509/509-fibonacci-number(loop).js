/**
 * Runtime: 590 ms
 * Memory Usage: 46.4 MB
 * Link: https://leetcode.com/problems/validate-binary-search-tree/submissions/826989910/
 //-----------------------------------------------------------------------------
 1. Check if n is less or equal 1, return n;
 2. Set the current to 0
 3. Set first and second Fibonacci numbers.
 4. Loop while haven't get to the target
 5. Calculate new fibonachi number.
 6. Update prev to latest
 6. Update prev to latest
 7. Set latest prev to current.
 8. Return the result
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

    // 2. Set the current to 0
    let current = 0;

    // 3. Set first and second Fibonacci numbers.
    let prev1 = 1, prev2 = 0;

    // 4. Loop while haven't get to the target
    for(let i = 2; i<= n; i++)
    {
        // 5. Calculate new fibonachi number.
        current = prev1 + prev2;

        // 6. Update prev to latest
        prev2 = prev1;

        // 7. Set latest prev to current.
        prev1 = current;
    }

    // 8. Return the result
    return current;
};
/**
 * Runtime: 59 ms
 * Memory Usage: 41.5 MB
 * Link: https://leetcode.com/problems/climbing-stairs/submissions/827181527/
 //-----------------------------------------------------------------------------
 1. If Stairs not so many return constant
 2. Set last step, before last step and result.
 3. Loop while haven't get to the target
 4.     Calculate new fibonachi number.
 5.     Update prev to latest
 6.     Set latest prev to current.
 7. Return the results
 //-----------------------------------------------------------------------------
 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    //1. If Stairs not so many return constant
    if(n < 3){
        return n;
    }

    // 2. Set last step, before last step and result.
    let lastStep = 1, beforeLastStep = 1, result = 0;

    // 3. Loop while haven't get to the target
    for(let i = 1; i < n; i++)
    {
        // 4. Calculate new fibonachi number.
        result = lastStep + beforeLastStep;

        // 5. Update prev to latest
        lastStep = beforeLastStep;

        // 6. Set latest prev to current.
        beforeLastStep = result;
    }

    // 7. Return the result
    return result;
};
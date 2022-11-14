/**
 * Runtime: 150 ms
 * Memory Usage: 50.8 MB
 * Link: https://leetcode.com/submissions/detail/756472704/
 * //-----------------------------------------------------------------------------
 *    1. Set the max as the first element. It always will be the value.
 *    2. Set the current sum as 0.
 *    3. Loop over all elements of array.
 *    4.    If the current sum is negative we should remove that part of array from the calculation.
 *    5.    Add the current element to the current sum.
 *    6.    Find the max of the array.
 *    7. Return the max;
 * //-----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    // 1. Set the max as the first element. It always will be the value.
    let max = nums[0];

    // 2. Set the current sum as 0.
    let currentSum = 0;

    // 3. Loop over all elements of array.
    for(let i of nums) {

        // 4. If the current sum is negative we should remove that part of array from the calculation.
        if ( currentSum < 0) {
            currentSum = 0;
        }

        // 5. Add the current element to the current sum.
        currentSum += i;

        // 6. Find the max of the array.
        max = Math.max(max, currentSum);
    }

    // 7. Return the max
    return max;
};
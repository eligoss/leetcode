/**
 * Runtime: 150 ms
 * Memory Usage: 50.8 MB
 * Link: https://leetcode.com/submissions/detail/756472704/
 * //-----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    // Set the max as the first element. It always will be the value.
    let max = nums[0];

    // Set the current sum as 0.
    let currentSum = 0;

    // Loop over all elements of array.
    for(let i of nums) {

        // If the current sum is negative we should remove that part of array from the calculation.
        if ( currentSum < 0) {
            currentSum = 0;
        }

        // Add the current element to the current sum.
        currentSum += i;

        //Find the nex max of the array.
        max = Math.max(max, currentSum);
    }

    //Return the max
    return max;
};
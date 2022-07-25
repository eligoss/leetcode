/**
 * Runtime: 112 ms
 * Memory Usage: 44.3 MB
 * Link: https://leetcode.com/submissions/detail/756426597/
 * //-----------------------------------------------------------------------------
 *    1. Find sum of all elements
 *    2. Loop over the nums
 *    3.    If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
 *    4.    Increment leftSum to nums[i]
 *    5. Return -1;
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
var pivotIndex = function (nums) {

    let sum = nums.reduce((a, b) => a + b);

    let leftSum = 0;
    for(let i = 0; i < nums; i++) {
        if(leftSum === sum - leftSum - nums[i])
        {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};
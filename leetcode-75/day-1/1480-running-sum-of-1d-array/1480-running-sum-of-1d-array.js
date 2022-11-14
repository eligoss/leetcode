/**
 * Runtime: 59ms
 * Memory Usage: 31.3 MB
 * Link: https://leetcode.com/submissions/detail/756400353/
 * //-----------------------------------------------------------------------------
 *    1. Loop over the nums
 *    2.    Add to nums[i] previous element
 *    3. return nums
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    // 1. Loop over the nums
    for(let i = 1; i < nums.length; i++) {

        // 2. Add to nums[i] previous element
        nums[i]  += nums[i - 1];
    }

    // 3. return nums
    return nums;
};
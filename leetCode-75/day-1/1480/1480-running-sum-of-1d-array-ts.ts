/**
 * Runtime: 123 ms
 * Memory Usage: 44.1 MB
 * Link: https://leetcode.com/submissions/detail/756418246/
 * //-----------------------------------------------------------------------------
 *    1. Loop over the nums
 *    2.    Add to nums[i] previous element
 *    3. return nums
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
function runningSum(nums: number[]): number[] {

    for(let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
}
/**
 * Runtime: 148 ms
 * Memory Usage: 43.4 MB
 * Link: https://leetcode.com/submissions/detail/756419665/
//-----------------------------------------------------------------------------
   1. Loop over the nums
   2.    Add to nums[i] previous element
   3. return nums
//-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
public class Solution {
    public int[] RunningSum(int[] nums) {

        for(int i = 1; i < nums.Length; i++)
        {
            nums[i] += nums[i - 1];
        }

        return nums;
    }
}
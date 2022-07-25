/**
 * Runtime: 105 ms
 * Memory Usage: 46 MB
 * Link: https://leetcode.com/submissions/detail/744421304/
//-----------------------------------------------------------------------------
   1. Find sum of all elements
   2. Loop over the nums
   3.    If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
   4.    Increment leftSum to nums[i]
   5. Return -1;
//-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
public class Solution {
    public int PivotIndex(int[] nums) {
        int sum = nums.Sum();
        int leftSum = 0;

        for(int i = 0; i < nums.Length; i++)
        {
            if(leftSum == sum - leftSum - nums[i])
            {
                return i;
            }

            leftSum += nums[i];
        }

        return -1;
    }
}
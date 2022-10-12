/**
 * Runtime: 225 ms
 * Memory Usage: 50.1 MB
 * Link: https://leetcode.com/submissions/detail/756484400/
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
public class Solution {
    public int MaxSubArray(int[] nums) {
        
        // 1. Set the max as the first element. It always will be the value.
        var max = nums[0];
        
        // 2. Set the current sum as 0.
        var cur = 0;

        // 3. Loop over all elements of array.
        for(int i = 0; i < nums.Length; i++)
        {
            // 4. If the current sum is negative we should remove that part of array from the calculation.
            if(cur < 0)
            {
                cur = 0;
            }

            // 5. Add the current element to the current sum.
            cur += nums[i];
            
            // 6. Find the max of the array.
            max = Math.Max(max, cur);
        }

        // 7. Return the max
        return max;
    }
}
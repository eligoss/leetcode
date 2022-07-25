/**
 * Runtime: 225 ms
 * Memory Usage: 50.1 MB
 * Link: https://leetcode.com/submissions/detail/756484400/
 * //-----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
public class Solution {
    public int MaxSubArray(int[] nums) {
        var max = nums[0];
        var cur = 0;

        for(int i = 0; i < nums.Length; i++)
        {
            if(cur < 0)
            {
                cur = 0;
            }

            cur += nums[i];
            max = Math.Max(max, cur);
        }

        return max;
    }
}
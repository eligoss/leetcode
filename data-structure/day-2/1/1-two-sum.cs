/**
 * Runtime: 83 ms
 * Memory Usage: 41.1 MB
 * Link: https://leetcode.com/submissions/detail/750755164/
 *  //-----------------------------------------------------------------------------
 *     1. Set the hash map
 *     2. Loop over the nums
 *     3. Get the target minus the current
 *     4.    If such record is found in hashmap return the current index and the found one
 *     5.    Add the current element to the map.
 *     6. Return empty array;
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        // 1. Set the hash map
        Dictionary<int, int> dictionary = new Dictionary<int, int>(nums.Length);

         // 2. Loop over the nums
        for(int i = 0; i < nums.Length; i++)
        {
            // 3. Get the target minus the current
            int complement = target - nums[i];

            // 4. If the record is found return the current index and the found one
            if(dictionary.TryGetValue(complement, out int complementIndex))
            {
                return new [] {i, complementIndex};
            }

            // 5. Add the current element to the map.
            dictionary.TryAdd(nums[i], i);
        }

        return null;
  }
}

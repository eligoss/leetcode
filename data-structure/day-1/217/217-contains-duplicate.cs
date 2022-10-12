/**
 * Runtime: 167 ms
 * Memory Usage: 52.6 MB
 * Link: https://leetcode.com/submissions/detail/742341562/
 * //-----------------------------------------------------------------------------
 *    1. Define the hashset
 *    2. Loop over the nums
 *    3.    If the hashset contains the nums[i] -> return true
 *    4.    Add nums[i] to hashset
 *    5. Return false;
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
function containsDuplicate(nums: number[]): boolean {

        // 1. Define the hashset
        //Dictionary is faster then hashSet in c#
        var hashSet = new Dictionary<int, int>();

        // 2. Loop over the nums
        for(int i = 0; i < nums.Length; i++)
        {
            // 3. If the hashset contains the nums[i] -> return true
            // 4. Add nums[i] to hashset
            if(!hashSet.TryAdd(nums[i], 1))
            {
                return true;
            }
        }

        // 5. Return false;
        return false;
    }
}
/**
 * Runtime: 90 ms
 * Memory Usage: 51.6 MB
 * Link: https://leetcode.com/submissions/detail/753057123/
 * //-----------------------------------------------------------------------------
 *    1. Define the hashset
 *    2. Loop over the nums
 *    3.    If the hashset contains the nums[i] -> return true
 *    4.    Add nums[i] to hashset
 *    5. Return false;
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {

    // 1. Define the hashset
    let dic = {}

    // 2. Loop over the nums
    for (const n of nums) {
        
        // 3. If the hashset contains the nums[i] -> return true
        if (dic[n] !== undefined) {
            return true;
        }

        // 4. Add nums[i] to hashset
        dic[n] = n
    }
    
    // 5. Return false;
    return false;
};
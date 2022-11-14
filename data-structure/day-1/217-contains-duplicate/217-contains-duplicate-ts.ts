/**
 * Runtime: 102 ms
 * Memory Usage: 50.7 MB
 * Link: https://leetcode.com/submissions/detail/756453803/
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
    let dictionary = new Set<number>();

    // 2. Loop over the nums
    for (let i = 0; i < nums.length; i++) {

        // 3. If the hashset contains the nums[i] -> return true
        if (dictionary.has(nums[i])) {
            return true;
        }

        // 4. Add nums[i] to hashset
        dictionary.add(nums[i]);
    }

    // 5. Return false;
    return false;
}
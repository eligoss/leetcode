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

    let dictionary = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (dictionary.has(nums[i])) {
            return true;
        }

        dictionary.add(nums[i]);
    }

    return false;
}
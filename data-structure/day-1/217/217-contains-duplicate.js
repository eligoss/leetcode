/**
 * Runtime: 90 ms
 * Memory Usage: 51.6 MB
 * Link: https://leetcode.com/submissions/detail/753057123/
 * //-----------------------------------------------------------------------------
 *    1. Find sum of all elements
 *    2. Loop over the nums
 *    3.    If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
 *    4.    Increment leftSum to nums[i]
 *    5. Return -1;
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {

    let dic = {}

    for (const n of nums) {
        if (dic[n] !== undefined) {
            return true;
        }

        dic[n] = n
    }
    return false;
};
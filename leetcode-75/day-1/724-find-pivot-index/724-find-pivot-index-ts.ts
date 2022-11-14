/**
 * Runtime: 93 ms
 * Memory Usage: 45.6 MB
 * Link: https://leetcode.com/submissions/detail/756431165/
 * //-----------------------------------------------------------------------------
 *    1. Find sum of all elements
 *    2. Loop over the nums
 *    3.    If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
 *    4.    Increment leftSum to nums[i]
 *    5. Return -1;
 * //-----------------------------------------------------------------------------
 * @param {number[]} nums
 * @return {number[]}
 */
function pivotIndex(nums: number[]): number {

    // 1. Find sum of all elements
    // 👇️ using <number> generic to set return type
    const sum = nums.reduce<number>((accum, n) => {
        return accum + n;
    }, 0);
    let leftSum = 0;

    // 2. Loop over the nums
    for (let i = 0; i < nums.length; i++) {

        // 3. If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
        if(leftSum == sum - leftSum - nums[i]) {
            return i;
        }

        // 4. Increment leftSum to nums[i]
        leftSum += nums[i];
    }

    // 5. Return if not found -1;
    return -1;
}
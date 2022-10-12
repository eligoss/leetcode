/**
 * Runtime: 105 ms
 * Memory Usage: 52.5 MB
 * Link: https://leetcode.com/submissions/detail/756478883/
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
function maxSubArray(nums: number[]): number {

    // 1. Set the max as the first element. It always will be the value.
    let max = nums[0];

    // 2. Set the current sum as 0.
    let currentMax = 0;

    // 3. Loop over all elements of array.
    for(let i = 0; i < nums.length; i++) {

        // 4. If the current sum is negative we should remove that part of array from the calculation.
        if(currentMax < 0) {
            currentMax = 0;
        }

        // 5. Add the current element to the current sum.
        currentMax += nums[i];

        // 6. Find the max of the array.
        max = Math.max(max, currentMax);
    }

    // 7. Return the max
    return max;
}
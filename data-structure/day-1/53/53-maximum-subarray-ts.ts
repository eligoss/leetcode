/**
 * Runtime: 105 ms
 * Memory Usage: 52.5 MB
 * Link: https://leetcode.com/submissions/detail/756478883/
 * //-----------------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums: number[]): number {

    // Set the max as the first element. It always will be the value.
    let max = nums[0];

    // Set the current sum as 0.
    let currentMax = 0;

    // Loop over all elements of array.
    for(let i = 0; i < nums.length; i++) {

        // If the current sum is negative we should remove that part of array from the calculation.
        if(currentMax < 0) {
            currentMax = 0;
        }

        // Add the current element to the current sum.
        currentMax += nums[i];

        //Find the nex max of the array.
        max = Math.max(max, currentMax);
    }

    return max;
}
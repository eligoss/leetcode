/**
 * Runtime: 112 ms
 * Memory Usage: 44.3 MB
 * Link: https://leetcode.com/submissions/detail/756426597/
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
var pivotIndex = function (nums) {

    // 1. Find sum of all elements
    let sum = nums.reduce((a, b) => a + b);
    let leftSum = 0;
    
    // 2. Loop over the nums
    for(let i = 0; i < nums; i++) {
        
        // 3. If the leftSum is equals to the sum - leftSum - nums[i] -> Return Index
        if(leftSum === sum - leftSum - nums[i])
        {
            return i;
        }
    
        // 4. Increment leftSum to nums[i]
        leftSum += nums[i];
    }
    
    // 5. Return if not found -1;
    return -1;
};
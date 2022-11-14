/**
 * Runtime: 115  ms
 * Memory Usage: 54 MB
 * Link: https://leetcode.com/problems/rotate-array/submissions/842471067/
 * //-----------------------------------------------------------------------------
 *    1. Define intermediate array
 *    2. Loop over array of items
 *    3.    Calculate the correct index of each element by dooing ( i + k) % nums.length
 *    4.    Set the element to new array at the correct index
 *    5  Loop over the intermediate array and copy values to the original array.
 * //-----------------------------------------------------------------------------
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    // 1. Define intermediate array
    let tempArray = [];

    // 2. Loop over array of items
    for (let i = 0; i < nums.length; i++) {

        // 3. Calculate the correct index of each element by dooing ( i + k) % nums.length
        let newIndex = ( i + k ) % nums.length;

        // 4. Set the element to new array at the correct index
        tempArray[newIndex] = nums[i];
    }

    // 5. Loop over the intermediate array and copy values to the original array.
    for (let i = 0; i < nums.length; i++) {
        nums[i] = tempArray[i];
    }
};